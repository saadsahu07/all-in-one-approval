import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";
import { loadImageFromFile, drawToCanvas, canvasToBlob, formatBytes } from "@/lib/image-utils";

interface Props {
  toolSlug: string;
  from: string;
  to: "png" | "jpeg";
  intro: string;
}

export function ImageConverter({ toolSlug, from, to, intro }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(null);
  const [error, setError] = useState("");

  const convert = async () => {
    if (!file) return;
    setError("");
    try {
      const img = await loadImageFromFile(file);
      const canvas = drawToCanvas(img);
      if (to === "jpeg") {
        // fill white behind transparency
        const ctx = canvas.getContext("2d")!;
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      const blob = await canvasToBlob(canvas, `image/${to}`, to === "jpeg" ? 0.92 : undefined);
      if (result) URL.revokeObjectURL(result.url);
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not convert this image.");
    }
  };

  const ext = to === "jpeg" ? "jpg" : "png";

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug={toolSlug}
      intro={intro}
      howTo={[
        `Choose or drop a ${from.toUpperCase()} image.`,
        "Click Convert.",
        `Download the ${ext.toUpperCase()} version.`,
      ]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => { setFile(f[0]); setResult(null); }} />
        {file && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{file.name} ({formatBytes(file.size)})</p>
            <Button onClick={convert}>Convert to {ext.toUpperCase()}</Button>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && file && (
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <img src={result.url} alt="Converted preview" className="max-h-64 rounded" />
            <p className="text-sm">Converted — {formatBytes(result.blob.size)}</p>
            <Button variant="accent" onClick={() => downloadBlob(result.blob, file.name.replace(/\.\w+$/, "") + "." + ext)}>
              Download {ext.toUpperCase()}
            </Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}