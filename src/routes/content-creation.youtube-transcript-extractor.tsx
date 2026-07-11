import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { fetchYouTubeTranscript } from "@/lib/ai.functions";
import { ToolShell, CopyButton, downloadText } from "@/components/tool-shell";
import { Button, Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-transcript-extractor")({
  head: () => toolHead("content-creation", "youtube-transcript-extractor"),
  component: YouTubeTranscriptExtractor,
});

function YouTubeTranscriptExtractor() {
  const run = useServerFn(fetchYouTubeTranscript);
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [title, setTitle] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    setTranscript("");
    setTitle("");
    try {
      const result = await run({ data: { url } });
      if (result.error) setError(result.error);
      else {
        setTranscript(result.transcript);
        setTitle(result.title);
        setVideoId(result.videoId);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const words = transcript ? transcript.trim().split(/\s+/).length : 0;

  return (
    <ToolShell
      categorySlug="content-creation"
      toolSlug="youtube-transcript-extractor"
      intro="Paste a YouTube video URL and extract its full transcript in seconds. Great for turning videos into notes, blog posts, or AI summaries."
      howTo={[
        "Paste a YouTube video URL (regular, Shorts, or youtu.be link).",
        "Click Extract Transcript and wait a few seconds.",
        "Copy the transcript or download it as a text file.",
      ]}
      note="Only works with videos that have captions available (creator-uploaded or auto-generated)."
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="yt-url">YouTube URL</Label>
          <div className="flex flex-wrap gap-2">
            <Input
              id="yt-url"
              placeholder="https://www.youtube.com/watch?v=…"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="min-w-0 flex-1"
            />
            <Button onClick={submit} disabled={loading || !url.trim()}>
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Extracting…" : "Extract Transcript"}
            </Button>
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {transcript && (
          <div className="space-y-3">
            {title && <p className="text-sm font-medium">{title}</p>}
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span>{words.toLocaleString()} words · {transcript.length.toLocaleString()} characters</span>
              <div className="flex gap-2">
                <CopyButton text={transcript} label="Copy transcript" />
                <Button
                  variant="outline"
                  onClick={() => downloadText(transcript, `${videoId || "transcript"}.txt`)}
                >
                  Download .txt
                </Button>
              </div>
            </div>
            <Textarea rows={18} readOnly value={transcript} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}