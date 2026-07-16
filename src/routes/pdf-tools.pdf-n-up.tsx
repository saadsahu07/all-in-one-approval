import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/pdf-n-up")({
  head: () => toolHead("pdf-tools", "pdf-n-up"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const out = await PDFDocument.create();
      const total = src.getPageCount();
      const embedded = await out.embedPages(src.getPages());
      const first = src.getPage(0);
      const { width: pw, height: ph } = first.getSize();
      const sheetW = ph;
      const sheetH = pw;
      const slotW = sheetW / 2;
      const slotH = sheetH;
      const scale = Math.min(slotW / pw, slotH / ph);
      const drawW = pw * scale;
      const drawH = ph * scale;
      for (let i = 0; i < total; i += 2) {
        const page = out.addPage([sheetW, sheetH]);
        const leftX = (slotW - drawW) / 2;
        const y = (slotH - drawH) / 2;
        page.drawPage(embedded[i], { x: leftX, y, width: drawW, height: drawH });
        if (i + 1 < total) {
          const rightX = slotW + (slotW - drawW) / 2;
          page.drawPage(embedded[i + 1], { x: rightX, y, width: drawW, height: drawH });
        }
      }
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `2up-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-n-up"
      intro="Combine two PDF pages side-by-side on each landscape sheet — saves paper when printing."
      howTo={["Upload a PDF.", "Click Convert.", "Download the 2-up PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Building…" : "Build 2-Up PDF"}</Button></div>
    </ToolShell>
  );
}