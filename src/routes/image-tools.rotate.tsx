import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/rotate")({
  head: () => toolHead("image-tools", "rotate"),
  component: ImageRotator,
});

function ImageRotator() {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const onFile = async (f: File) => {
    setError("");
    setFile(f);
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setPreview(URL.createObjectURL(f));
  };

  const download = async () => {
    if (!file) return;
    try {
      const img = await loadImageFromFile(file);
      const rad = (rotation * Math.PI) / 180;
      const swap = rotation % 180 !== 0;
      const canvas = document.createElement("canvas");
      canvas.width = swap ? img.naturalHeight : img.naturalWidth;
      canvas.height = swap ? img.naturalWidth : img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rad);
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
      ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-rotated." + (isPng ? "png" : "jpg"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not rotate image.");
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="rotate"
      intro="Rotate images in 90° steps and flip them horizontally or vertically, with a live preview before downloading."
      howTo={[
        "Choose or drop an image.",
        "Use the rotate and flip buttons — the preview updates live.",
        "Click Download when it looks right.",
      ]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && preview && (
          <div className="space-y-4">
            <div className="flex justify-center rounded-lg border border-border bg-secondary p-6">
              <img
                src={preview}
                alt="Preview"
                className="max-h-64 transition-transform"
                style={{ transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})` }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" onClick={() => setRotation((r) => (r + 270) % 360)}>⟲ Rotate left</Button>
              <Button variant="secondary" onClick={() => setRotation((r) => (r + 90) % 360)}>⟳ Rotate right</Button>
              <Button variant="secondary" onClick={() => setFlipH((v) => !v)}>Flip horizontal</Button>
              <Button variant="secondary" onClick={() => setFlipV((v) => !v)}>Flip vertical</Button>
              <Button onClick={download}>Download</Button>
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}