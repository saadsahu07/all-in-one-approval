import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { ToolShell } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/pdf-page-count")({
  head: () => toolHead("pdf-tools", "pdf-page-count"),
  component: Page,
});

function Page() {
  const [info, setInfo] = useState<{ name: string; pages: number; size: string } | null>(null);
  const onFile = async (f: File) => {
    const doc = await PDFDocument.load(await f.arrayBuffer(), { ignoreEncryption: true });
    setInfo({ name: f.name, pages: doc.getPageCount(), size: (f.size / 1024).toFixed(1) + " KB" });
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-page-count"
      intro="Instantly count the pages in any PDF — no upload to a server, everything runs in your browser."
      howTo={["Drop or choose a PDF file.", "See the page count and file size."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => onFile(fs[0])} />
      {info && (
        <div className="mt-6 rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">{info.name}</p>
          <p className="mt-2 text-3xl font-bold">{info.pages} <span className="text-base font-normal text-muted-foreground">page{info.pages === 1 ? "" : "s"}</span></p>
          <p className="mt-1 text-xs text-muted-foreground">{info.size}</p>
        </div>
      )}
    </ToolShell>
  );
}