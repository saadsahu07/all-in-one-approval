import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/extract-pages")({
  head: () => toolHead("pdf-tools", "extract-pages"),
  component: Page,
});

function parsePages(spec: string, max: number): number[] {
  const out = new Set<number>();
  spec.split(",").forEach((part) => {
    const p = part.trim();
    if (!p) return;
    if (p.includes("-")) {
      const [a, b] = p.split("-").map((n) => parseInt(n, 10));
      const lo = Math.max(1, Math.min(a, b));
      const hi = Math.min(max, Math.max(a, b));
      for (let i = lo; i <= hi; i++) out.add(i - 1);
    } else {
      const n = parseInt(p, 10);
      if (n >= 1 && n <= max) out.add(n - 1);
    }
  });
  return [...out].sort((a, b) => a - b);
}

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [spec, setSpec] = useState("1-3, 5");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const idx = parsePages(spec, src.getPageCount());
      if (idx.length === 0) { alert("No valid pages in range."); return; }
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, idx);
      pages.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `extracted-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="extract-pages"
      intro="Extract selected pages from a PDF into a new file."
      howTo={["Upload a PDF.", "Enter pages like '1-3, 5, 8'.", "Download the extracted PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 max-w-md"><Label>Pages</Label><Input value={spec} onChange={(e) => setSpec(e.target.value)} placeholder="1-3, 5, 8" /></div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Extracting…" : "Extract & Download"}</Button></div>
    </ToolShell>
  );
}