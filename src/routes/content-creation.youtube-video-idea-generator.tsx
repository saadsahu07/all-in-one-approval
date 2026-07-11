import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { generateYouTubeVideoIdeas } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-video-idea-generator")({
  head: () => toolHead("content-creation", "youtube-video-idea-generator"),
  component: YouTubeVideoIdeaGenerator,
});

interface Idea { title: string; hook: string }

function parseIdeas(raw: string): Idea[] {
  const blocks = raw
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
  const ideas: Idea[] = [];
  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.replace(/^\s*\d+[.)\-\s]+/, "").replace(/^["'\s]+|["'\s]+$/g, "").trim()).filter(Boolean);
    if (lines.length === 0) continue;
    ideas.push({ title: lines[0], hook: lines.slice(1).join(" ") });
  }
  return ideas;
}

function YouTubeVideoIdeaGenerator() {
  const run = useServerFn(generateYouTubeVideoIdeas);
  const [niche, setNiche] = useState("");
  const [audience, setAudience] = useState("");
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ideas = useMemo(() => parseIdeas(raw), [raw]);

  const submit = async () => {
    setLoading(true);
    setError("");
    setRaw("");
    try {
      const result = await run({ data: { niche, audience } });
      if (result.error) setError(result.error);
      else setRaw(result.text);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolShell
      categorySlug="content-creation"
      toolSlug="youtube-video-idea-generator"
      intro="Beat content burnout. Enter a niche or keyword and get 10 fresh YouTube video ideas — each with a title and hook you can film this week."
      howTo={[
        "Enter your niche or a keyword (and optionally who your audience is).",
        "Click Generate Ideas and wait a few seconds.",
        "Copy the ideas you like and re-run for more.",
      ]}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="niche">Niche or keyword</Label>
            <Input
              id="niche"
              placeholder="e.g. home espresso, budget travel, indie game dev"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="audience">Audience (optional)</Label>
            <Input
              id="audience"
              placeholder="e.g. absolute beginners, working parents"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={submit} disabled={loading || !niche.trim()}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Generating…" : "Generate Ideas"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {ideas.length > 0 && (
          <ol className="space-y-3">
            {ideas.map((idea, i) => (
              <li key={i} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">
                      <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                      {idea.title}
                    </p>
                    {idea.hook && <p className="mt-1 text-sm text-muted-foreground">{idea.hook}</p>}
                  </div>
                  <CopyButton text={`${idea.title}${idea.hook ? `\n${idea.hook}` : ""}`} label="Copy" />
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </ToolShell>
  );
}