import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import { ToolShell, downloadBlob } from "@/components/tool-shell";
import { Button, Label, Select } from "@/components/ui-primitives";
import { FileDrop } from "@/components/file-drop";

export const Route = createFileRoute("/pdf-tools/rotate")({
  head: () => ({ meta: [{ title: "Rotate PDF — ToolHive" }, { name: "description", content: "Rotate every page of a PDF by 90, 180, or 270 degrees." }] }),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState("90");
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const src = await PDFDocument.load(await file.arrayBuffer());
      src.getPages().forEach((p) => p.setRotation(degrees(((p.getRotation().angle + +angle) % 360 + 360) % 360)));
      const bytes = await src.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), `rotated-${file.name}`);
    } finally { setBusy(false); }
  };
  return (
    <ToolShell categorySlug="pdf-tools" toolSlug="rotate"
      intro="Rotate every page in the PDF by the same angle."
      howTo={["Upload a PDF.", "Pick a rotation angle.", "Download the rotated PDF."]}>
      <FileDrop accept="application/pdf" onFiles={(fs) => setFile(fs[0] ?? null)} />
      {file && <p className="mt-3 text-sm text-muted-foreground">{file.name}</p>}
      <div className="mt-4 max-w-xs">
        <Label>Rotation</Label>
        <Select value={angle} onChange={(e) => setAngle(e.target.value)}>
          <option value="90">90° clockwise</option>
          <option value="180">180°</option>
          <option value="270">270° clockwise</option>
        </Select>
      </div>
      <div className="mt-4"><Button disabled={!file || busy} onClick={run}>{busy ? "Rotating…" : "Rotate & Download"}</Button></div>
    </ToolShell>
  );
}