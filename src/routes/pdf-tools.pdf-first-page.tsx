import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";

export const Route = createFileRoute("/pdf-tools/pdf-first-page")({
  head: () => toolHead("pdf-tools", "pdf-first-page"),
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
      const [p] = await out.copyPages(src, [0]);
      out.addPage(p);
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `first-page-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-first-page"
      intro="Extract just the first page of any PDF and save it as a new one-page PDF."
      howTo={["Drop or choose a PDF.", "Click Extract.", "Download the one-page PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Extracting…" : "Extract & Download"}</Button></div>
    </ToolShell>
  );
}