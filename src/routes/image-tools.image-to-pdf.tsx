import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";
import { fileToDataUrl, loadImageFromFile } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/image-to-pdf")({
  head: () => ({
    meta: [
      { title: "Image to PDF Converter — Free Online | ToolHive" },
      { name: "description", content: "Combine one or more images into a single PDF document, one image per page. Free, in-browser, and private." },
      { property: "og:title", content: "Image to PDF | ToolHive" },
      { property: "og:description", content: "Combine images into a PDF document, free and private." },
    ],
  }),
  component: ImageToPdf,
});

function ImageToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const convert = async () => {
    if (!files.length) return;
    setBusy(true);
    setError("");
    try {
      const { jsPDF } = await import("jspdf");
      let doc: InstanceType<typeof jsPDF> | null = null;
      for (const file of files) {
        const img = await loadImageFromFile(file);
        const dataUrl = await fileToDataUrl(file);
        const landscape = img.naturalWidth > img.naturalHeight;
        const page = new jsPDF({ orientation: landscape ? "l" : "p", unit: "pt", format: "a4" });
        if (!doc) doc = page;
        else doc.addPage("a4", landscape ? "l" : "p");
        const target = doc;
        const pw = target.internal.pageSize.getWidth() - 40;
        const ph = target.internal.pageSize.getHeight() - 40;
        const scale = Math.min(pw / img.naturalWidth, ph / img.naturalHeight);
        const w = img.naturalWidth * scale;
        const h = img.naturalHeight * scale;
        const fmt = file.type === "image/png" ? "PNG" : "JPEG";
        target.addImage(dataUrl, fmt, (target.internal.pageSize.getWidth() - w) / 2, (target.internal.pageSize.getHeight() - h) / 2, w, h);
      }
      doc?.save("images.pdf");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not create PDF from these images.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="image-to-pdf"
      intro="Turn images into a PDF — each image is centered on its own A4 page. Combine several images into one document."
      howTo={[
        "Choose or drop one or more images (JPG or PNG).",
        "Check the file list — images are added in the order selected.",
        "Click Create PDF to download the document.",
      ]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/jpeg,image/png" multiple onFiles={(f) => setFiles((prev) => [...prev, ...f])} />
        {files.length > 0 && (
          <div className="space-y-3">
            <ul className="space-y-1 text-sm text-muted-foreground">
              {files.map((f, i) => (
                <li key={i} className="flex items-center justify-between rounded border border-border bg-card px-3 py-1.5">
                  <span>{i + 1}. {f.name}</span>
                  <button className="text-xs text-destructive" onClick={() => setFiles(files.filter((_, j) => j !== i))}>Remove</button>
                </li>
              ))}
            </ul>
            <Button onClick={convert} disabled={busy}>{busy ? "Creating PDF…" : "Create PDF"}</Button>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </ToolShell>
  );
}