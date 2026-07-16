import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Textarea } from "@/components/ui-primitives";
import { fileToDataUrl, formatBytes } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/image-to-base64")({
  head: () => toolHead("image-tools", "image-to-base64"),
  component: Page,
});

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");

  const onFile = async (f: File) => {
    setFile(f); setError("");
    try { setDataUrl(await fileToDataUrl(f)); }
    catch (e) { setError(e instanceof Error ? e.message : "Could not read file."); }
  };

  return (
    <ToolShell categorySlug="image-tools" toolSlug="image-to-base64"
      intro="Encode any image as a Base64 data URL you can paste directly into HTML, CSS, JSON, or Markdown."
      howTo={["Drop or choose an image.", "The full data URL appears below.", "Copy it and embed anywhere."]}
    >
      <div className="space-y-4">
        <FileDrop accept="image/*" onFiles={(f) => onFile(f[0])} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {file && dataUrl && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{file.name} — {formatBytes(file.size)} → {formatBytes(dataUrl.length)} as Base64</p>
            <img src={dataUrl} alt="preview" className="max-h-48 rounded border border-border" />
            <Textarea rows={8} readOnly value={dataUrl} className="font-mono text-xs" />
            <CopyButton text={dataUrl} label="Copy data URL" />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
