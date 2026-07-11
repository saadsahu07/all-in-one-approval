import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { removeBackground } from "@/lib/ai.functions";
import { ToolShell } from "@/components/tool-shell";
import { FileDrop } from "@/components/file-drop";
import { Button } from "@/components/ui-primitives";
import { fileToDataUrl, formatBytes } from "@/lib/image-utils";

export const Route = createFileRoute("/image-tools/background-remover")({
  head: () => ({
    meta: [
      { title: "AI Background Remover — Free Online | ToolHive" },
      { name: "description", content: "Remove image backgrounds automatically with AI. Upload a photo and download a clean PNG cutout in seconds." },
      { property: "og:title", content: "AI Background Remover | ToolHive" },
      { property: "og:description", content: "Remove image backgrounds automatically with AI." },
    ],
  }),
  component: BackgroundRemover,
});

function BackgroundRemover() {
  const run = useServerFn(removeBackground);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const onFile = async (f: File) => {
    setError("");
    setOutput("");
    if (f.size > 5 * 1024 * 1024) {
      setError("Please choose an image under 5 MB.");
      return;
    }
    setFile(f);
    setPreview(await fileToDataUrl(f));
  };

  const submit = async () => {
    if (!preview) return;
    setBusy(true);
    setError("");
    try {
      const result = await run({ data: { dataUrl: preview } });
      if (result.error) setError(result.error);
      else setOutput(result.dataUrl);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="background-remover"
      intro="Upload a photo and let AI remove the background, leaving a clean subject cutout you can download as a PNG."
      howTo={[
        "Choose or drop a photo (under 5 MB) with a clear subject.",
        "Click Remove Background and wait a few seconds.",
        "Download the result.",
      ]}
      note="This tool sends your image to an AI service for processing. Results work best with a clearly defined subject."
    >
      <div className="space-y-4">
        <FileDrop accept="image/jpeg,image/png,image/webp" onFiles={(f) => onFile(f[0])}>
          <p className="text-xs text-muted-foreground">JPG, PNG, or WebP — up to 5 MB. Processed with AI.</p>
        </FileDrop>
        {file && preview && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{file.name} ({formatBytes(file.size)})</p>
            <img src={preview} alt="Original" className="max-h-56 rounded border border-border" />
            <Button onClick={submit} disabled={busy}>
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              {busy ? "Removing background…" : "Remove Background"}
            </Button>
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {output && (
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <div className="inline-block rounded bg-[repeating-conic-gradient(#e5e7eb_0%_25%,#ffffff_0%_50%)] bg-[length:20px_20px] p-2">
              <img src={output} alt="Background removed" className="max-h-64 rounded" />
            </div>
            <div>
              <a href={output} download="background-removed.png">
                <Button variant="accent">Download PNG</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}