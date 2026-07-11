import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/jpg-to-pdf")({
  head: () => ({ meta: [{ title: "JPG to PDF — ToolHive" }, { name: "description", content: "Combine JPG or PNG images into a single PDF." }] }),
  component: Page,
});

function Page() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    setBusy(true);
    try {
      const pdf = await PDFDocument.create();
      for (const f of files) {
        const buf = await f.arrayBuffer();
        const img = /png$/i.test(f.type) ? await pdf.embedPng(buf) : await pdf.embedJpg(buf);
        const page = pdf.addPage([img.width, img.height]);
        page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
      }
      const bytes = await pdf.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), "images.pdf");
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="jpg-to-pdf"
      intro="Turn one or more images into a single PDF."
      howTo={["Add JPG or PNG images.", "Click Convert.", "Download the PDF."]}>
      <FileDrop accept="image/jpeg,image/png" multiple onFiles={(fs) => setFiles((p) => [...p, ...fs])} />
      {files.length > 0 && <p className="mt-3 text-sm text-muted-foreground">{files.length} image(s)</p>}
      <div className="mt-4 flex gap-2">
        <Button disabled={!files.length || busy} onClick={run}>{busy ? "Converting…" : "Convert to PDF"}</Button>
        {files.length > 0 && <Button variant="outline" onClick={() => setFiles([])}>Clear</Button>}
      </div>
    </ToolShell>
  );
}