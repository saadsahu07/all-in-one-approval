import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";
import { formatBytes } from "@/lib/image-utils";

export const Route = createFileRoute("/pdf-tools/compress")({
  head: () => ({ meta: [{ title: "Compress PDF — ToolHarbor" }, { name: "description", content: "Reduce PDF file size with basic optimization." }] }),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ before: number; after: number } | null>(null);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const bytes = await src.save({ useObjectStreams: true });
      setResult({ before: file.size, after: bytes.byteLength });
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), file.name.replace(/\.pdf$/i, "-compressed.pdf"));
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="compress"
      intro="Rebuild a PDF using compact object streams to trim file size."
      howTo={["Upload a PDF.", "Click Compress.", "Download the smaller file."]}
      note="Basic optimization only. PDFs already using image compression may not shrink further.">
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name} — {formatBytes(file.size)}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Compressing…" : "Compress & Download"}</Button></div>
      {result && <p className="mt-3 text-sm">Original: {formatBytes(result.before)} → New: {formatBytes(result.after)}</p>}
    </ToolShell>
  );
}