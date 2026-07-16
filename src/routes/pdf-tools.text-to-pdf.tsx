import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/pdf-tools/text-to-pdf")({
  head: () => toolHead("pdf-tools", "text-to-pdf"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!text.trim()) return;
    setBusy(true);
    try {
      const doc = await PDFDocument.create();
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const size = 12;
      const margin = 50;
      const pageW = 595, pageH = 842;
      const maxW = pageW - margin * 2;
      const lineHeight = size * 1.4;
      let page = doc.addPage([pageW, pageH]);
      let y = pageH - margin;
      const wrap = (line: string) => {
        if (!line) return [""];
        const words = line.split(/\s+/);
        const out: string[] = [];
        let cur = "";
        for (const w of words) {
          const t = cur ? cur + " " + w : w;
          if (font.widthOfTextAtSize(t, size) > maxW) {
            if (cur) out.push(cur);
            cur = w;
          } else cur = t;
        }
        if (cur) out.push(cur);
        return out;
      };
      for (const raw of text.split(/\r?\n/)) {
        for (const line of wrap(raw)) {
          if (y < margin) { page = doc.addPage([pageW, pageH]); y = pageH - margin; }
          page.drawText(line, { x: margin, y, size, font, color: rgb(0.1, 0.1, 0.1) });
          y -= lineHeight;
        }
      }
      const bytes = await doc.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), "text.pdf");
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="text-to-pdf"
      intro="Convert plain text into a clean A4 PDF."
      howTo={["Paste your text.", "Click Convert.", "Download the PDF."]}>
      <Label>Text</Label>
      <Textarea rows={12} value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste text here…" />
      <div className="mt-4"><Button disabled={!text.trim() || busy} onClick={run}>{busy ? "Creating…" : "Create PDF"}</Button></div>
    </ToolShell>
  );
}