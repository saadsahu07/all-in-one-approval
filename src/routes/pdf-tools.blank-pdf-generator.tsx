import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/pdf-tools/blank-pdf-generator")({
  head: () => toolHead("pdf-tools", "blank-pdf-generator"),
  component: Page,
});

const SIZES: Record<string, [number, number]> = {
  A4: [595.28, 841.89],
  Letter: [612, 792],
  Legal: [612, 1008],
  A5: [419.53, 595.28],
};

function Page() {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState<keyof typeof SIZES>("A4");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    setBusy(true);
    try {
      const doc = await PDFDocument.create();
      const [w, h] = SIZES[size];
      for (let i = 0; i < Math.min(500, Math.max(1, count)); i++) doc.addPage([w, h]);
      const bytes = await doc.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `blank-${size}-${count}p.pdf`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="blank-pdf-generator"
      intro="Generate a new PDF with any number of blank pages in A4, Letter, Legal, or A5."
      howTo={["Pick a page size and count.", "Click Generate.", "Download the blank PDF."]}>
      <div className="grid gap-3 sm:grid-cols-2 max-w-md">
        <div><Label>Pages</Label><Input type="number" min={1} max={500} value={count} onChange={(e) => setCount(+e.target.value)} /></div>
        <div><Label>Size</Label>
          <select value={size} onChange={(e) => setSize(e.target.value as keyof typeof SIZES)} className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
            {Object.keys(SIZES).map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-4"><Button disabled={busy} onClick={run}>{busy ? "Generating…" : "Generate & Download"}</Button></div>
    </ToolShell>
  );
}