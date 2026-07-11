import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/unlock")({
  head: () => ({ meta: [{ title: "Unlock PDF — ToolHarbor" }, { name: "description", content: "Remove restrictions from PDFs you own." }] }),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const run = async () => {
    if (!file) return;
    setBusy(true); setErr("");
    try {
      const src = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, src.getPageIndices());
      pages.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `unlocked-${file.name}`);
    } catch (e) { setErr((e as Error).message || "Could not unlock this PDF."); }
    finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="unlock"
      intro="Remove owner restrictions from a PDF you have permission to modify."
      howTo={["Upload the PDF.", "Click Unlock.", "Download the unrestricted file."]}
      note="Only unlock PDFs you own or have explicit permission to modify. Strongly encrypted (password-protected) files require the correct password and may not open here.">
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      {err && <p className="mt-2 text-sm text-destructive">{err}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Working…" : "Unlock & Download"}</Button></div>
    </ToolShell>
  );
}