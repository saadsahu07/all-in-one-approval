import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Input, Label, Select } from "@/components/ui-primitives";
import { loadImageFromFile, drawToCanvas, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/watermark")({
  head: () => ({
    meta: [
      { title: "Watermark Adder — Add Text Watermarks | ToolHive" },
      { name: "description", content: "Add a text watermark to your images with custom position, size, and opacity. Free, in-browser, and private." },
      { property: "og:title", content: "Watermark Adder | ToolHive" },
      { property: "og:description", content: "Add a text watermark to protect your images." },
    ],
  }),
  component: WatermarkAdder,
});

function WatermarkAdder() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("© Your Name");
  const [position, setPosition] = useState("bottom-right");
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(5);
  const [error, setError] = useState("");

  const apply = async () => {
    if (!file) return;
    setError("");
    try {
      const img = await loadImageFromFile(file);
      const canvas = drawToCanvas(img);
      const ctx = canvas.getContext("2d")!;
      const fontSize = Math.max(14, Math.round((canvas.width * size) / 100));
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = `rgba(255,255,255,${opacity})`;
      ctx.strokeStyle = `rgba(0,0,0,${opacity * 0.6})`;
      ctx.lineWidth = Math.max(1, fontSize / 20);
      const pad = fontSize;
      const metrics = ctx.measureText(text);
      let tx = pad, ty = canvas.height - pad;
      if (position.includes("right")) tx = canvas.width - metrics.width - pad;
      if (position.includes("top")) ty = pad + fontSize;
      if (position === "center") {
        tx = (canvas.width - metrics.width) / 2;
        ty = canvas.height / 2;
      }
      ctx.strokeText(text, tx, ty);
      ctx.fillText(text, tx, ty);
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-watermarked." + (isPng ? "png" : "jpg"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not add watermark.");
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="watermark"
      intro="Stamp a text watermark onto your images — choose the text, position, size, and opacity, then download the protected copy."
      howTo={[
        "Choose or drop an image.",
        "Type your watermark text and pick a position, size, and opacity.",
        "Click Add Watermark & Download.",
      ]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => setFile(f[0])} />
        {file && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Selected: {file.name}</p>
            <div className="grid max-w-lg gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label>Watermark text</Label>
                <Input value={text} onChange={(e) => setText(e.target.value)} />
              </div>
              <div>
                <Label>Position</Label>
                <Select value={position} onChange={(e) => setPosition(e.target.value)}>
                  <option value="bottom-right">Bottom right</option>
                  <option value="bottom-left">Bottom left</option>
                  <option value="top-right">Top right</option>
                  <option value="top-left">Top left</option>
                  <option value="center">Center</option>
                </Select>
              </div>
              <div>
                <Label>Size: {size}% of width</Label>
                <input type="range" min={2} max={15} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full accent-[var(--accent)]" />
                <Label className="mt-2">Opacity: {Math.round(opacity * 100)}%</Label>
                <input type="range" min={10} max={100} value={opacity * 100} onChange={(e) => setOpacity(Number(e.target.value) / 100)} className="w-full accent-[var(--accent)]" />
              </div>
            </div>
            <Button onClick={apply} disabled={!text.trim()}>Add Watermark &amp; Download</Button>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </ToolShell>
  );
}