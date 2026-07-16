import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/pdf-watermark")({
  head: () => toolHead("pdf-tools", "pdf-watermark"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [size, setSize] = useState(60);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const font = await src.embedFont(StandardFonts.HelveticaBold);
      src.getPages().forEach((p) => {
        const { width, height } = p.getSize();
        const tw = font.widthOfTextAtSize(text, size);
        p.drawText(text, {
          x: width / 2 - tw / 2,
          y: height / 2,
          size,
          font,
          color: rgb(0.7, 0.7, 0.7),
          opacity: 0.3,
          rotate: degrees(-30),
        });
      });
      const bytes = await src.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `watermarked-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-watermark"
      intro="Stamp a diagonal text watermark on every page of a PDF."
      howTo={["Upload a PDF.", "Type the watermark text and font size.", "Download the watermarked PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 max-w-lg">
        <div><Label>Text</Label><Input value={text} onChange={(e) => setText(e.target.value)} /></div>
        <div><Label>Font size</Label><Input type="number" value={size} onChange={(e) => setSize(+e.target.value)} /></div>
      </div>
      <div className="mt-4"><Button disabled={!file || busy || !text} onClick={run}>{busy ? "Stamping…" : "Add Watermark"}</Button></div>
    </ToolShell>
  );
}