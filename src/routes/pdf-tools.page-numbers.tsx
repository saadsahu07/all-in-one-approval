import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Label, Select } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/page-numbers")({
  head: () => ({ meta: [{ title: "Add Page Numbers to PDF — ToolHive" }, { name: "description", content: "Stamp page numbers on every PDF page in your browser." }] }),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [pos, setPos] = useState("bottom-center");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const font = await src.embedFont(StandardFonts.Helvetica);
      const pages = src.getPages();
      pages.forEach((p, i) => {
        const { width } = p.getSize();
        const text = `${i + 1} / ${pages.length}`;
        const size = 10;
        const tw = font.widthOfTextAtSize(text, size);
        let x = width / 2 - tw / 2;
        if (pos.endsWith("left")) x = 24;
        if (pos.endsWith("right")) x = width - tw - 24;
        const y = pos.startsWith("top") ? p.getHeight() - 24 : 20;
        p.drawText(text, { x, y, size, font, color: rgb(0.1, 0.15, 0.3) });
      });
      const bytes = await src.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `numbered-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="page-numbers"
      intro="Add page numbers to every page of your PDF."
      howTo={["Upload a PDF.", "Choose a position.", "Download the stamped PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 max-w-xs">
        <Label>Position</Label>
        <Select value={pos} onChange={(e) => setPos(e.target.value)}>
          <option value="bottom-center">Bottom center</option>
          <option value="bottom-left">Bottom left</option>
          <option value="bottom-right">Bottom right</option>
          <option value="top-center">Top center</option>
          <option value="top-left">Top left</option>
          <option value="top-right">Top right</option>
        </Select>
      </div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Adding…" : "Add Numbers"}</Button></div>
    </ToolShell>
  );
}