import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/split")({
  head: () => ({ meta: [{ title: "Split PDF — ToolHive" }, { name: "description", content: "Extract a page range from a PDF into a new file." }] }),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [range, setRange] = useState("1-1");
  const [busy, setBusy] = useState(false);
  const split = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const out = await PDFDocument.create();
      const [aStr, bStr] = range.split("-");
      const a = Math.max(1, +aStr || 1) - 1;
      const b = Math.min(src.getPageCount(), +bStr || src.getPageCount()) - 1;
      const indices: number[] = [];
      for (let i = a; i <= b; i++) indices.push(i);
      const pages = await out.copyPages(src, indices);
      pages.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `split-${a + 1}-${b + 1}.pdf`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="split"
      intro="Pull out a specific page range from a PDF into a new file."
      howTo={["Upload a PDF.", "Enter a page range like 2-5.", "Download the new PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 max-w-xs">
        <Label>Page range (e.g. 1-3)</Label>
        <Input value={range} onChange={(e) => setRange(e.target.value)} />
      </div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={split}>{busy ? "Splitting…" : "Split & Download"}</Button></div>
    </ToolShell>
  );
}