import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/merge")({
  head: () => ({ meta: [{ title: "Merge PDF — ToolHarbor" }, { name: "description", content: "Combine multiple PDF files into one document, in your browser." }] }),
  component: Page,
});

function Page() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const merge = async () => {
    setBusy(true);
    try {
      const out = await PDFDocument.create();
      for (const f of files) {
        const src = await PDFDocument.load(await f.arrayBuffer());
        const pages = await out.copyPages(src, src.getPageIndices());
        pages.forEach((p) => out.addPage(p));
      }
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), "merged.pdf");
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="merge"
      intro="Combine two or more PDFs into a single document. Files never leave your browser."
      howTo={["Add PDF files in the order you want.", "Click Merge.", "Download the combined PDF."]}>
      <FileDrop accept="application/pdf" multiple onFiles={(fs) => setFiles((prev) => [...prev, ...fs])} />
      {files.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm">
          {files.map((f, i) => <li key={i} className="rounded border border-border bg-secondary px-3 py-2">{f.name}</li>)}
        </ul>
      )}
      <div className="mt-4 flex gap-2">
        <Button onClick={merge} disabled={files.length < 2 || busy}>{busy ? "Merging…" : "Merge PDFs"}</Button>
        {files.length > 0 && <Button variant="outline" onClick={() => setFiles([])}>Clear</Button>}
      </div>
    </ToolShell>
  );
}