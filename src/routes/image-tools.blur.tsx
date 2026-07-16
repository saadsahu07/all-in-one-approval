import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Label } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/blur")({
  head: () => toolHead("image-tools", "blur"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [radius, setRadius] = useState(6);
  const [error, setError] = useState("");

  const onFile = (f: File) => { setFile(f); setPreview(URL.createObjectURL(f)); setError(""); };
  const filter = `blur(${radius}px)`;

  const download = async () => {
    if (!file) return;
    try {
      const img = await loadImageFromFile(file);
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.filter = filter;
      ctx.drawImage(img, 0, 0);
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-blur." + (isPng ? "png" : "jpg"));
    } catch (e) { setError(e instanceof Error ? e.message : "Could not process image."); }
  };

  return (
    <ToolShell categorySlug="image-tools" toolSlug="blur"
      intro="Apply an adjustable Gaussian blur to any image."
      howTo={["Choose or drop an image.", "Adjust the strength slider.", "Click Download to save the processed image."]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && preview && (
          <div className="space-y-4">
            <div className="flex justify-center rounded-lg border border-border bg-secondary p-6">
              <img src={preview} alt="preview" className="max-h-64" style={{ filter }} />
            </div>
            <div className="max-w-sm"><Label>Blur radius: {radius}px</Label><input type="range" min={1} max={40} value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full accent-[var(--accent)]" /></div>
            <Button onClick={download}>Download</Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
