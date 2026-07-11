import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Button, Label, Select, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/image-tools/qr-code")({
  head: () => ({
    meta: [
      { title: "QR Code Generator — Free Online | ToolHive" },
      { name: "description", content: "Create QR codes for links, text, Wi-Fi, and more. Choose the size and download as PNG. Free, no sign-up." },
      { property: "og:title", content: "QR Code Generator | ToolHive" },
      { property: "og:description", content: "Create QR codes for links, text, and more, free." },
    ],
  }),
  component: QrGenerator,
});

function QrGenerator() {
  const [text, setText] = useState("");
  const [sizePx, setSizePx] = useState(512);
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");

  const generate = async () => {
    setError("");
    try {
      const QRCode = (await import("qrcode")).default;
      const url = await QRCode.toDataURL(text, { width: sizePx, margin: 2 });
      setDataUrl(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not generate QR code.");
    }
  };

  return (
    <ToolShell
      categorySlug="image-tools"
      toolSlug="qr-code"
      intro="Turn any link or text into a scannable QR code. Pick a size and download the PNG for print or screen."
      howTo={[
        "Paste a URL or any text into the box.",
        "Choose a size — 512px works well for most uses.",
        "Click Generate, then download the PNG.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={4} placeholder="https://example.com or any text…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap items-end gap-3">
          <div className="w-40">
            <Label>Size</Label>
            <Select value={sizePx} onChange={(e) => setSizePx(Number(e.target.value))}>
              <option value={256}>256 × 256</option>
              <option value={512}>512 × 512</option>
              <option value={1024}>1024 × 1024</option>
            </Select>
          </div>
          <Button onClick={generate} disabled={!text.trim()}>Generate</Button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {dataUrl && (
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <img src={dataUrl} alt="Generated QR code" className="h-56 w-56 rounded border border-border" />
            <a href={dataUrl} download="qr-code.png">
              <Button variant="accent">Download PNG</Button>
            </a>
          </div>
        )}
      </div>
    </ToolShell>
  );
}