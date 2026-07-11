import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/word-to-pdf")({
  head: () => ({ meta: [{ title: "Word to PDF — ToolHarbor" }, { name: "description", content: "Convert Word (.docx) documents to PDF in your browser." }] }),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const mammoth = await import("mammoth");
      const { value: html } = await mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() });
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      const container = document.createElement("div");
      container.style.width = "540px";
      container.style.fontFamily = "Helvetica, Arial, sans-serif";
      container.style.fontSize = "12px";
      container.style.color = "#111";
      container.innerHTML = html;
      document.body.appendChild(container);
      try {
        await pdf.html(container, { x: 32, y: 32, width: 540, windowWidth: 540, autoPaging: "text" });
      } finally {
        container.remove();
      }
      downloadBlob(pdf.output("blob"), file.name.replace(/\.docx?$/i, ".pdf"));
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="word-to-pdf"
      intro="Convert a .docx document to PDF, right in the browser."
      howTo={["Upload a .docx file.", "Click Convert.", "Download the PDF."]}
      note="Best for text-heavy documents. Complex Word layouts (tables, floats, custom fonts) may render differently.">
      <FileDrop accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Converting…" : "Convert to PDF"}</Button></div>
    </ToolShell>
  );
}