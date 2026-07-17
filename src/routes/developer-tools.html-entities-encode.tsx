import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/html-entities-encode")({
  head: () => toolHead("developer-tools", "html-entities-encode"),
  component: Page,
});

const MAP: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function Page() {
  const [t, setT] = useState("");
  const out = t.replace(/[&<>"']/g, (c) => MAP[c]);
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="html-entities-encode"
      intro="Encode HTML special characters (& < > \" ') into safe entities for direct use in HTML."
      howTo={["Paste HTML or text.", "Copy the encoded output."]}>
      <Textarea rows={5} value={t} onChange={(e) => setT(e.target.value)} placeholder='<div class="x">Hi & bye</div>' />
      <Textarea rows={5} value={out} readOnly className="mt-3 font-mono text-sm" />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}