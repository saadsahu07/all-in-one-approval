import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Label } from "@/components/ui-primitives";
import { loadImageFromFile, drawToCanvas, canvasToBlob, formatBytes } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/compress")({
  head: () => toolHead("image-tools", "compress"),
  component: ImageCompressor,
});

function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(0.7);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const compress = async () => {
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const img = await loadImageFromFile(file);
      const canvas = drawToCanvas(img);
      const blob = await canvasToBlob(canvas, "image/jpeg", quality);
      if (result) URL.revokeObjectURL(result.url);
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not compress this image.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="compress"
      intro="Reduce image file size by re-encoding at a lower quality. Everything happens in your browser — your image never leaves your device."
      howTo={[
        "Choose or drop an image (JPG, PNG, or WebP).",
        "Adjust the quality slider — lower quality means a smaller file.",
        "Click Compress and download the result.",
      ]}
      note="Output is saved as JPG. Transparent areas become white — use the resizer or PNG converter if you need transparency."
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => { setFile(f[0]); setResult(null); }} />
        {file && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Selected: <span className="font-medium text-foreground">{file.name}</span> ({formatBytes(file.size)})</p>
            <div className="max-w-sm">
              <Label>Quality: {Math.round(quality * 100)}%</Label>
              <input type="range" min={10} max={95} value={quality * 100} onChange={(e) => setQuality(Number(e.target.value) / 100)} className="w-full accent-[var(--accent)]" />
            </div>
            <Button onClick={compress} disabled={busy}>{busy ? "Compressing…" : "Compress"}</Button>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && file && (
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <img src={result.url} alt="Compressed preview" className="max-h-64 rounded" />
            <p className="text-sm">
              {formatBytes(file.size)} → <span className="font-bold text-accent">{formatBytes(result.blob.size)}</span>{" "}
              ({Math.max(0, Math.round((1 - result.blob.size / file.size) * 100))}% smaller)
            </p>
            <Button variant="accent" onClick={() => downloadBlob(result.blob, file.name.replace(/\.\w+$/, "") + "-compressed.jpg")}>
              Download compressed image
            </Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}