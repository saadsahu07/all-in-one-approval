import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/flip")({
  head: () => toolHead("image-tools", "flip"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [error, setError] = useState("");

  const onFile = (f: File) => { setFile(f); setPreview(URL.createObjectURL(f)); setFlipH(false); setFlipV(false); setError(""); };

  const download = async () => {
    if (!file) return;
    try {
      const img = await loadImageFromFile(file);
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.translate(flipH ? canvas.width : 0, flipV ? canvas.height : 0);
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
      ctx.drawImage(img, 0, 0);
      const isPng = file.type === "image/png";
      const blob = await canvasToBlob(canvas, isPng ? "image/png" : "image/jpeg", 0.92);
      downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-flipped." + (isPng ? "png" : "jpg"));
    } catch (e) { setError(e instanceof Error ? e.message : "Could not flip image."); }
  };

  return (
    <ToolShell categorySlug="image-tools" toolSlug="flip"
      intro="Flip any image horizontally, vertically, or both. Preview updates live before you download."
      howTo={["Choose or drop an image.", "Toggle horizontal or vertical flip.", "Click Download when the preview looks right."]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && preview && (
          <div className="space-y-4">
            <div className="flex justify-center rounded-lg border border-border bg-secondary p-6">
              <img src={preview} alt="preview" className="max-h-64 transition-transform" style={{ transform: `scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})` }} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" onClick={() => setFlipH(v => !v)}>Flip horizontal</Button>
              <Button variant="secondary" onClick={() => setFlipV(v => !v)}>Flip vertical</Button>
              <Button onClick={download}>Download</Button>
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
