import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/add-blank-page")({
  head: () => toolHead("pdf-tools", "add-blank-page"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [after, setAfter] = useState(1);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const total = src.getPageCount();
      const pos = Math.min(Math.max(0, after), total);
      const first = src.getPage(0);
      const { width, height } = first.getSize();
      src.insertPage(pos, [width, height]);
      const bytes = await src.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `blank-inserted-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="add-blank-page"
      intro="Insert a blank page at a chosen position."
      howTo={["Upload a PDF.", "Choose where to insert (after page N).", "Download the updated PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 max-w-xs"><Label>Insert after page #</Label><Input type="number" min={0} value={after} onChange={(e) => setAfter(+e.target.value)} /></div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Inserting…" : "Insert & Download"}</Button></div>
    </ToolShell>
  );
}