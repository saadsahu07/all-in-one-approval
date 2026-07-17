import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button, Label } from "@/components/ui-primitives";
import { loadImageFromFile, canvasToBlob } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/brightness")({
  head: () => toolHead("image-tools", "brightness"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [v, setV] = useState(120);
  const filter = `brightness(${v}%)`;
  const onFile = (f: File) => { setFile(f); setPreview(URL.createObjectURL(f)); };
  const download = async () => {
    if (!file) return;
    const img = await loadImageFromFile(file);
    const c = document.createElement("canvas");
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    const ctx = c.getContext("2d")!;
    ctx.filter = filter; ctx.drawImage(img, 0, 0);
    const isPng = file.type === "image/png";
    const blob = await canvasToBlob(c, isPng ? "image/png" : "image/jpeg", 0.92);
    downloadBlob(blob, file.name.replace(/\.\w+$/, "") + "-bright." + (isPng ? "png" : "jpg"));
  };
  return (
    <ToolShell categorySlug="image-tools" toolSlug="brightness"
      intro="Brighten or darken any image with a live-preview slider."
      howTo={["Drop or choose an image.", "Adjust the slider.", "Click Download."]}>
      <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
      {file && preview && (
        <div className="mt-4 space-y-4">
          <div className="flex justify-center rounded-lg border border-border bg-secondary p-6">
            <img src={preview} alt="preview" className="max-h-64" style={{ filter }} />
          </div>
          <div className="max-w-sm"><Label>Brightness: {v}%</Label><input type="range" min={0} max={300} value={v} onChange={(e) => setV(+e.target.value)} className="w-full accent-[var(--accent)]" /></div>
          <Button onClick={download}>Download</Button>
        </div>
      )}
    </ToolShell>
  );
}