import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/pdf-metadata")({
  head: () => toolHead("pdf-tools", "pdf-metadata"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [busy, setBusy] = useState(false);
  const onFile = async (f: File | null) => {
    setFile(f);
    if (!f) return;
    const src = await PDFDocument.load(await f.arrayBuffer());
    setTitle(src.getTitle() ?? "");
    setAuthor(src.getAuthor() ?? "");
    setSubject(src.getSubject() ?? "");
    setPageCount(src.getPageCount());
  };
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      src.setTitle(title);
      src.setAuthor(author);
      src.setSubject(subject);
      const bytes = await src.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `meta-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-metadata"
      intro="View and update PDF metadata — title, author, and subject."
      howTo={["Upload a PDF.", "Edit any of the fields.", "Download the updated PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => onFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name} · {pageCount} pages</p>}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div><Label>Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div><Label>Author</Label><Input value={author} onChange={(e) => setAuthor(e.target.value)} /></div>
        <div><Label>Subject</Label><Input value={subject} onChange={(e) => setSubject(e.target.value)} /></div>
      </div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Saving…" : "Save Metadata"}</Button></div>
    </ToolShell>
  );
}