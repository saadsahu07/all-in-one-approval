import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-thumbnail-downloader")({
  head: () => toolHead("content-creation", "youtube-thumbnail-downloader"),
  component: YouTubeThumbnailDownloader,
});

function extractVideoId(input: string): string | null {
  const s = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/(?:embed|shorts|live|v)\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = s.match(re);
    if (m) return m[1];
  }
  return null;
}

const QUALITIES: { key: string; label: string; size: string }[] = [
  { key: "maxresdefault", label: "Max Res HD", size: "1280×720" },
  { key: "sddefault", label: "SD", size: "640×480" },
  { key: "hqdefault", label: "HQ", size: "480×360" },
  { key: "mqdefault", label: "MQ", size: "320×180" },
];

function YouTubeThumbnailDownloader() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState("");
  const videoId = useMemo(() => (submitted ? extractVideoId(submitted) : null), [submitted]);
  const error = submitted && !videoId ? "Could not find a YouTube video ID in that URL." : "";

  const download = async (qKey: string) => {
    if (!videoId) return;
    const src = `https://img.youtube.com/vi/${videoId}/${qKey}.jpg`;
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error("not available");
      const blob = await res.blob();
      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = `${videoId}-${qKey}.jpg`;
      a.click();
      URL.revokeObjectURL(href);
    } catch {
      window.open(src, "_blank");
    }
  };

  return (
    <ToolShell
      categorySlug="content-creation"
      toolSlug="youtube-thumbnail-downloader"
      intro="Paste any YouTube video URL and download its thumbnail in HD, SD, HQ, and MQ resolutions — straight from YouTube's public image CDN."
      howTo={[
        "Paste a YouTube video URL (regular, Shorts, or youtu.be link).",
        "Click Fetch Thumbnails to preview all available sizes.",
        "Click Download on the resolution you want.",
      ]}
      note="Not every video has a Max Res version — that's a YouTube limitation, not a bug. Use HQ if Max Res fails to load."
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
            <Button onClick={() => setSubmitted(url)} disabled={!url.trim()}>
              Fetch Thumbnails
            </Button>
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {videoId && (
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
            {QUALITIES.map((q) => (
              <div key={q.key} className="rounded-lg border border-border bg-card p-3">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/${q.key}.jpg`}
                  alt={`${q.label} thumbnail`}
                  loading="lazy"
                  className="aspect-video w-full rounded-md object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                  }}
                />
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium">{q.label}</p>
                    <p className="text-xs text-muted-foreground">{q.size}</p>
                  </div>
                  <Button variant="outline" onClick={() => download(q.key)}>
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolShell>
  );
}