import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/pdf-to-word")({
  head: () => toolHead("pdf-tools", "pdf-to-word"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const pdfjs = await import("pdfjs-dist");
      const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
      pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
      const doc = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
      const docxMod = await import("docx");
      const paras: InstanceType<typeof docxMod.Paragraph>[] = [];
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const content = await page.getTextContent();
        const text = content.items.map((it) => ("str" in it ? (it as { str: string }).str : "")).join(" ");
        paras.push(new docxMod.Paragraph({ text }));
      }
      const out = new docxMod.Document({ sections: [{ children: paras }] });
      const blob = await docxMod.Packer.toBlob(out);
      downloadBlob(blob, file.name.replace(/\.pdf$/i, ".docx"));
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-to-word"
      intro="Extract text from a PDF into an editable .docx file."
      howTo={["Upload a PDF.", "Click Convert.", "Open the .docx in Word or Google Docs."]}
      note="Text extraction only — original layout, images, and complex formatting are not preserved.">
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Converting…" : "Convert to Word"}</Button></div>
    </ToolShell>
  );
}