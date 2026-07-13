import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/pdf-to-jpg")({
  head: () => toolHead("pdf-tools", "pdf-to-jpg"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [imgs, setImgs] = useState<string[]>([]);
  const run = async () => {
    if (!file) return;
    setBusy(true); setImgs([]);
    try {
      const pdfjs = await import("pdfjs-dist");
      const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
      pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
      const doc = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
      const out: string[] = [];
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width; canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await page.render({ canvasContext: ctx, viewport, canvas } as never).promise;
        out.push(canvas.toDataURL("image/jpeg", 0.92));
      }
      setImgs(out);
    } finally { setBusy(false); }
  };
  const download = (url: string, i: number) => {
    fetch(url).then((r) => r.blob()).then((b) => downloadBlob(b, `page-${i + 1}.jpg`));
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="pdf-to-jpg"
      intro="Convert each page of a PDF into a JPG image."
      howTo={["Upload a PDF.", "Preview each page.", "Download the JPGs individually."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Rendering…" : "Convert"}</Button></div>
      {imgs.length > 0 && (
        <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
          {imgs.map((src, i) => (
            <div key={i} className="rounded-lg border border-border p-3">
              <img src={src} alt={`Page ${i + 1}`} className="w-full rounded" />
              <Button variant="outline" className="mt-3 w-full" onClick={() => download(src, i)}>Download page {i + 1}</Button>
            </div>
          ))}
        </div>
      )}
    </ToolShell>
  );
}