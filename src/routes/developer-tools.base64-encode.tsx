import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/base64-encode")({
  head: () => ({ meta: [{ title: "Base64 Encoder — ToolHive" }, { name: "description", content: "Encode text to Base64 in your browser." }] }),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  let out = "";
  try { out = t ? btoa(unescape(encodeURIComponent(t))) : ""; } catch { out = ""; }
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="base64-encode"
      intro="Encode any text (UTF-8 safe) into Base64."
      howTo={["Type or paste text.", "Copy the Base64 result."]}>
      <Textarea rows={5} value={t} onChange={(e) => setT(e.target.value)} placeholder="Hello world" />
      <div className="mt-4"><Textarea rows={5} value={out} readOnly /></div>
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}