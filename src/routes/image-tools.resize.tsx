import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Input, Label } from "@/components/ui-primitives";
import { loadImageFromFile, drawToCanvas, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/resize")({
  head: () => toolHead("image-tools", "resize"),
  component: ImageResizer,
});

function ImageResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [orig, setOrig] = useState<{ w: number; h: number } | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lock, setLock] = useState(true);
  const [error, setError] = useState("");

  const onFile = async (f: File) => {
    setError("");
    try {
      const img = await loadImageFromFile(f);
      setFile(f);
      setOrig({ w: img.naturalWidth, h: img.naturalHeight });
      setWidth(img.naturalWidth);
      setHeight(img.naturalHeight);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load image.");
    }
  };

  const resize = async () => {
    if (!file) return;
    try {
      const img = await loadImageFromFile(file);
      const canvas = drawToCanvas(img, Math.max(1, width), Math.max(1, height));
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + `-${width}x${height}.` + (isPng ? "png" : "jpg"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not resize image.");
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="resize"
      intro="Resize any image to exact pixel dimensions. Keep the aspect ratio locked to avoid stretching, or unlock it for a custom shape."
      howTo={[
        "Choose or drop an image.",
        "Enter a new width and height in pixels — keep the ratio locked to avoid distortion.",
        "Click Resize & Download.",
      ]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && orig && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {file.name} — original {orig.w} × {orig.h}px
            </p>
            <div className="flex flex-wrap items-end gap-3">
              <div className="w-32">
                <Label htmlFor="w">Width (px)</Label>
                <Input id="w" type="number" min={1} value={width} onChange={(e) => {
                  const w = Number(e.target.value);
                  setWidth(w);
                  if (lock && orig.w) setHeight(Math.round((w / orig.w) * orig.h));
                }} />
              </div>
              <div className="w-32">
                <Label htmlFor="h">Height (px)</Label>
                <Input id="h" type="number" min={1} value={height} onChange={(e) => {
                  const h = Number(e.target.value);
                  setHeight(h);
                  if (lock && orig.h) setWidth(Math.round((h / orig.h) * orig.w));
                }} />
              </div>
              <label className="flex items-center gap-2 pb-2 text-sm">
                <input type="checkbox" checked={lock} onChange={(e) => setLock(e.target.checked)} className="h-4 w-4 accent-[var(--accent)]" />
                Lock aspect ratio
              </label>
            </div>
            <Button onClick={resize}>Resize &amp; Download</Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}