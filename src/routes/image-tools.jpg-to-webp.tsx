import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";
import { loadImageFromFile, drawToCanvas, canvasToBlob, formatBytes } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/jpg-to-webp")({
  head: () => toolHead("image-tools", "jpg-to-webp"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const convert = async () => {
    if (!file) return;
    setBusy(true); setError("");
    try {
      const img = await loadImageFromFile(file);
      const canvas = drawToCanvas(img);
      const blob = await canvasToBlob(canvas, "image/webp", 0.92);
      if (result) URL.revokeObjectURL(result.url);
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (e) { setError(e instanceof Error ? e.message : "Could not convert image."); }
    finally { setBusy(false); }
  };

  return (
    <ToolShell categorySlug="image-tools" toolSlug="jpg-to-webp"
      intro="Convert JPG photos to modern WebP format for smaller files. Conversion runs entirely in your browser — your image never leaves your device."
      howTo={["Choose or drop a JPG image.", "Click Convert.", "Download the WEBP result."]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => { setFile(f[0]); setResult(null); }} />
        {file && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Selected: <span className="font-medium text-foreground">{file.name}</span> ({formatBytes(file.size)})</p>
            <Button onClick={convert} disabled={busy}>{busy ? "Converting…" : "Convert to WEBP"}</Button>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && file && (
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <img src={result.url} alt="converted" className="max-h-64 rounded" />
            <p className="text-sm">{formatBytes(file.size)} → <span className="font-bold text-accent">{formatBytes(result.blob.size)}</span></p>
            <Button variant="accent" onClick={() => downloadBlob(result.blob, file.name.replace(/\.\w+$/, "") + ".webp")}>Download WEBP</Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
