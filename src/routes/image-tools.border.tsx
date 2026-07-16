import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Input, Label } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/border")({
  head: () => toolHead("image-tools", "border"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState(24);
  const [color, setColor] = useState("#111111");
  const [error, setError] = useState("");

  const onFile = (f: File) => { setFile(f); setPreview(URL.createObjectURL(f)); setError(""); };

  const download = async () => {
    if (!file) return;
    try {
      const img = await loadImageFromFile(file);
      const w = Math.max(0, width | 0);
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth + w * 2;
      canvas.height = img.naturalHeight + w * 2;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, w, w);
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-border." + (isPng ? "png" : "jpg"));
    } catch (e) { setError(e instanceof Error ? e.message : "Could not add border."); }
  };

  return (
    <ToolShell categorySlug="image-tools" toolSlug="border"
      intro="Add a solid color border or frame around any image. Choose thickness and color."
      howTo={["Choose or drop an image.", "Pick a color and border thickness.", "Click Download to save the framed image."]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && preview && (
          <div className="space-y-4">
            <div className="flex justify-center rounded-lg border border-border bg-secondary p-6">
              <img src={preview} alt="preview" className="max-h-64" style={{ border: `${width}px solid ${color}` }} />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="w-32"><Label>Border (px)</Label><Input type="number" min={0} max={200} value={width} onChange={(e) => setWidth(Number(e.target.value))} /></div>
              <div><Label>Color</Label><input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-16 rounded border border-input bg-card" /></div>
            </div>
            <Button onClick={download}>Download</Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
