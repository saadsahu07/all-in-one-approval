import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/duplicate-pages")({
  head: () => toolHead("pdf-tools", "duplicate-pages"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [page, setPage] = useState(1);
  const [copies, setCopies] = useState(2);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const total = src.getPageCount();
      const idx = Math.min(Math.max(1, page), total) - 1;
      const out = await PDFDocument.create();
      const originals = await out.copyPages(src, src.getPageIndices());
      for (let i = 0; i < originals.length; i++) {
        out.addPage(originals[i]);
        if (i === idx) {
          for (let c = 0; c < Math.max(1, copies); c++) {
            const [dup] = await out.copyPages(src, [idx]);
            out.addPage(dup);
          }
        }
      }
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `duplicated-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="duplicate-pages"
      intro="Duplicate a specific page as many times as you need."
      howTo={["Upload a PDF.", "Pick the page and copy count.", "Download the new PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 max-w-md">
        <div><Label>Page #</Label><Input type="number" min={1} value={page} onChange={(e) => setPage(+e.target.value)} /></div>
        <div><Label>Copies</Label><Input type="number" min={1} value={copies} onChange={(e) => setCopies(+e.target.value)} /></div>
      </div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Duplicating…" : "Duplicate & Download"}</Button></div>
    </ToolShell>
  );
}