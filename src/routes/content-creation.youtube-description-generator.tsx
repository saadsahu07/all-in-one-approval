import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { generateYouTubeDescription } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-description-generator")({
  head: () => toolHead("content-creation", "youtube-description-generator"),
  component: YouTubeDescriptionGenerator,
});

function YouTubeDescriptionGenerator() {
  const run = useServerFn(generateYouTubeDescription);
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    try {
      const result = await run({ data: { title, topic, keywords } });
      if (result.error) setError(result.error);
      else setOutput(result.text);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolShell
      categorySlug="content-creation"
      toolSlug="youtube-description-generator"
      intro="Write a complete, SEO-optimized YouTube description in seconds — hook, summary, timestamps, CTA, and hashtags included."
      howTo={[
        "Enter your video title.",
        "Add a short summary of what the video covers and any target keywords.",
        "Click Generate Description, review the output, and paste it into YouTube Studio.",
      ]}
      note="Replace the placeholder timestamps with your actual video chapters before publishing."
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="yt-title">Video title</Label>
          <Input
            id="yt-title"
            placeholder="e.g. How to bake sourdough bread at home"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="yt-topic">What the video covers (optional)</Label>
          <Textarea
            id="yt-topic"
            rows={4}
            placeholder="A few sentences describing the video content…"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="yt-keywords">Target keywords (optional)</Label>
          <Input
            id="yt-keywords"
            placeholder="comma-separated, e.g. sourdough, no starter, beginner"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <Button onClick={submit} disabled={loading || !title.trim()}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Generating…" : "Generate Description"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {output && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span>{output.length} / 5000 characters</span>
              <CopyButton text={output} label="Copy description" />
            </div>
            <Textarea rows={16} readOnly value={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}