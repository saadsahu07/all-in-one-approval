import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Input, Label } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/crop")({
  head: () => ({
    meta: [
      { title: "Image Cropper — Crop Images Online Free | ToolHive" },
      { name: "description", content: "Crop images to an exact area by position and size, with live preview. Free, in-browser, and private." },
      { property: "og:title", content: "Image Cropper | ToolHive" },
      { property: "og:description", content: "Crop images to a custom area, free and private." },
    ],
  }),
  component: ImageCropper,
});

function ImageCropper() {
  const [file, setFile] = useState<File | null>(null);
  const [orig, setOrig] = useState<{ w: number; h: number } | null>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const onFile = async (f: File) => {
    setError("");
    try {
      const img = await loadImageFromFile(f);
      setFile(f);
      setOrig({ w: img.naturalWidth, h: img.naturalHeight });
      setX(0); setY(0);
      setW(img.naturalWidth);
      setH(img.naturalHeight);
      setPreview(img.src);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load image.");
    }
  };

  const crop = async () => {
    if (!file || !orig) return;
    setError("");
    try {
      const img = await loadImageFromFile(file);
      const cw = Math.min(Math.max(1, w), orig.w - x);
      const ch = Math.min(Math.max(1, h), orig.h - y);
      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      canvas.getContext("2d")!.drawImage(img, x, y, cw, ch, 0, 0, cw, ch);
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-cropped." + (isPng ? "png" : "jpg"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not crop image.");
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="crop"
      intro="Crop an exact region from any image by setting the starting position and the width and height of the area to keep."
      howTo={[
        "Choose or drop an image.",
        "Set X and Y (top-left corner of the crop) and the width and height to keep.",
        "Click Crop & Download.",
      ]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && orig && (
          <div className="space-y-4">
            <img src={preview} alt="Original" className="max-h-64 rounded border border-border" />
            <p className="text-sm text-muted-foreground">Original: {orig.w} × {orig.h}px</p>
            <div className="grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
              <div><Label>X</Label><Input type="number" min={0} max={orig.w - 1} value={x} onChange={(e) => setX(Number(e.target.value))} /></div>
              <div><Label>Y</Label><Input type="number" min={0} max={orig.h - 1} value={y} onChange={(e) => setY(Number(e.target.value))} /></div>
              <div><Label>Width</Label><Input type="number" min={1} value={w} onChange={(e) => setW(Number(e.target.value))} /></div>
              <div><Label>Height</Label><Input type="number" min={1} value={h} onChange={(e) => setH(Number(e.target.value))} /></div>
            </div>
            <Button onClick={crop}>Crop &amp; Download</Button>
          </div>
        )}
      </div>
    </ToolShell>
  );
}