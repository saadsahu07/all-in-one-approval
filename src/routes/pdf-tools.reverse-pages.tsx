import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/reverse-pages")({
  head: () => toolHead("pdf-tools", "reverse-pages"),
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
      const indices = src.getPageIndices().slice().reverse();
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, indices);
      pages.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `reversed-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="reverse-pages"
      intro="Flip the page order of a PDF end-to-end."
      howTo={["Upload a PDF.", "Click Reverse.", "Download the flipped PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Reversing…" : "Reverse & Download"}</Button></div>
    </ToolShell>
  );
}