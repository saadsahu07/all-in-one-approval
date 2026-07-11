import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { generateYouTubeTags } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-tag-generator")({
  head: () => toolHead("content-creation", "youtube-tag-generator"),
  component: YouTubeTagGenerator,
});

function YouTubeTagGenerator() {
  const run = useServerFn(generateYouTubeTags);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const tags = useMemo(
    () =>
      raw
        .split(/[,\n]/)
        .map((t) => t.replace(/^["'\-\d.\s]+|["'\s]+$/g, "").trim())
        .filter((t) => t.length > 0 && t.length <= 60),
    [raw],
  );
  const joined = tags.join(", ");
  const totalChars = joined.length;

  const submit = async () => {
    setLoading(true);
    setError("");
    setRaw("");
    try {
      const result = await run({ data: { title, description } });
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
      toolSlug="youtube-tag-generator"
      intro="Generate SEO-optimized YouTube tags from your video title in seconds. Boost discoverability with a keyword-rich mix of short, mid-tail, and long-tail tags."
      howTo={[
        "Enter your video title (and optional description for better context).",
        "Click Generate Tags and wait a few seconds.",
        "Copy the comma-separated tags and paste them into YouTube Studio.",
      ]}
      note="YouTube limits the total tag field to 500 characters. Trim tags if the character count exceeds that limit."
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
          <Label htmlFor="yt-desc">Description (optional)</Label>
          <Textarea
            id="yt-desc"
            rows={4}
            placeholder="A few sentences about your video for more accurate tags…"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button onClick={submit} disabled={loading || !title.trim()}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Generating…" : "Generate Tags"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {tags.length > 0 && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span>{tags.length} tags · {totalChars} / 500 characters</span>
              <CopyButton text={joined} label="Copy all tags" />
            </div>
            <Textarea rows={5} readOnly value={joined} />
            <div className="flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}