import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { generateYouTubeTitles } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label, Select, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-title-generator")({
  head: () => toolHead("content-creation", "youtube-title-generator"),
  component: YouTubeTitleGenerator,
});

function YouTubeTitleGenerator() {
  const run = useServerFn(generateYouTubeTitles);
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [tone, setTone] = useState("engaging");
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const titles = useMemo(
    () =>
      raw
        .split("\n")
        .map((l) => l.replace(/^\s*\d+[.)\-\s]+/, "").replace(/^["'\s]+|["'\s]+$/g, "").trim())
        .filter((l) => l.length > 0 && l.length <= 120),
    [raw],
  );

  const submit = async () => {
    setLoading(true);
    setError("");
    setRaw("");
    try {
      const result = await run({ data: { topic, keyword, tone } });
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
      toolSlug="youtube-title-generator"
      intro="Generate 10 catchy, high-CTR YouTube titles from your topic. Pick a style and copy the winner into YouTube Studio."
      howTo={[
        "Enter your video topic (and optional main keyword).",
        "Pick a title style — engaging, clickbait, professional, how-to, or listicle.",
        "Click Generate Titles and copy your favorite.",
      ]}
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="yt-topic">Video topic</Label>
          <Textarea
            id="yt-topic"
            rows={3}
            placeholder="e.g. beginner sourdough bread recipe with no starter"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="yt-keyword">Primary keyword (optional)</Label>
            <Input
              id="yt-keyword"
              placeholder="e.g. sourdough bread"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="yt-tone">Style</Label>
            <Select id="yt-tone" value={tone} onChange={(e) => setTone(e.target.value)}>
              <option value="engaging">Engaging</option>
              <option value="clickbait">Clickbait</option>
              <option value="professional">Professional</option>
              <option value="howto">How-to</option>
              <option value="listicle">Listicle</option>
            </Select>
          </div>
        </div>
        <Button onClick={submit} disabled={loading || !topic.trim()}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Generating…" : "Generate Titles"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {titles.length > 0 && (
          <ol className="space-y-2">
            {titles.map((t, i) => (
              <li
                key={`${t}-${i}`}
                className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <span className="text-sm">
                  <span className="mr-2 font-semibold text-muted-foreground">{i + 1}.</span>
                  {t}
                  <span className="ml-2 text-xs text-muted-foreground">({t.length} chars)</span>
                </span>
                <CopyButton text={t} label="Copy" />
              </li>
            ))}
          </ol>
        )}
      </div>
    </ToolShell>
  );
}