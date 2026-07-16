import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/remove-pages")({
  head: () => toolHead("pdf-tools", "remove-pages"),
  component: Page,
});

function parseSet(spec: string, max: number): Set<number> {
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
  return out;
}

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [spec, setSpec] = useState("2, 4");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      const remove = parseSet(spec, src.getPageCount());
      const keep: number[] = [];
      for (let i = 0; i < src.getPageCount(); i++) if (!remove.has(i)) keep.push(i);
      if (keep.length === 0) { alert("Cannot remove all pages."); return; }
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, keep);
      pages.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `trimmed-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="remove-pages"
      intro="Delete unwanted pages from a PDF."
      howTo={["Upload a PDF.", "List pages to remove (e.g. '2, 4-6').", "Download the trimmed PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 max-w-md"><Label>Pages to remove</Label><Input value={spec} onChange={(e) => setSpec(e.target.value)} placeholder="2, 4-6" /></div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Removing…" : "Remove & Download"}</Button></div>
    </ToolShell>
  );
}