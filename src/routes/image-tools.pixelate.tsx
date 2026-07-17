import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Label } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/pixelate")({
  head: () => toolHead("image-tools", "pixelate"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [block, setBlock] = useState(12);
  const onFile = (f: File) => { setFile(f); setPreview(URL.createObjectURL(f)); };
  const download = async () => {
    if (!file) return;
    const img = await loadImageFromFile(file);
    const w = img.naturalWidth, h = img.naturalHeight;
    const small = document.createElement("canvas");
    const sw = Math.max(1, Math.round(w / block)), sh = Math.max(1, Math.round(h / block));
    small.width = sw; small.height = sh;
    small.getContext("2d")!.drawImage(img, 0, 0, sw, sh);
    const out = document.createElement("canvas");
    out.width = w; out.height = h;
    const ctx = out.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, w, h);
    const isPng = file.type === "image/png";
    const blob = await canvasToBlob(out, isPng ? "image/png" : "image/jpeg", 0.92);
    downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-pixel." + (isPng ? "png" : "jpg"));
  };
  return (
    <ToolShell categorySlug="image-tools" toolSlug="pixelate"
      intro="Turn any image into a chunky pixel-art version with an adjustable block-size slider."
      howTo={["Drop or choose an image.", "Pick a block size.", "Click Download."]}>
      <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
      {file && preview && (
        <div className="mt-4 space-y-4">
          <div className="flex justify-center rounded-lg border border-border bg-secondary p-6">
            <img src={preview} alt="preview" className="max-h-64" />
          </div>
          <div className="max-w-sm"><Label>Block size: {block}px</Label><input type="range" min={2} max={60} value={block} onChange={(e) => setBlock(+e.target.value)} className="w-full accent-[var(--accent)]" /></div>
          <Button onClick={download}>Download</Button>
        </div>
      )}
    </ToolShell>
  );
}