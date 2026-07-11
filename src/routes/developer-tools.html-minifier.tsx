import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/html-minifier")({
  head: () => ({ meta: [{ title: "HTML Minifier — ToolHarbor" }, { name: "description", content: "Strip comments and collapse whitespace from HTML." }] }),
  component: Page,
});

function minifyHtml(s: string) {
  return s
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function Page() {
  const [t, setT] = useState("");
  const [out, setOut] = useState("");
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="html-minifier"
      intro="Reduce HTML file size by removing comments and unnecessary whitespace."
      howTo={["Paste HTML.", "Click Minify.", "Copy the compact output."]}>
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} placeholder="<div>  Hello  </div>" />
      <div className="mt-3"><Button onClick={() => setOut(minifyHtml(t))}>Minify</Button></div>
      {out && <div className="mt-4"><Textarea rows={8} value={out} readOnly /><div className="mt-2"><CopyButton text={out} /></div></div>}
    </ToolShell>
  );
}