import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/css-minifier")({
  head: () => ({ meta: [{ title: "CSS Minifier — ToolHive" }, { name: "description", content: "Compress CSS by removing comments and whitespace." }] }),
  component: Page,
});

function minifyCss(s: string) {
  return s
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

function Page() {
  const [t, setT] = useState("");
  const [out, setOut] = useState("");
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="css-minifier"
      intro="Shrink stylesheets by removing comments and whitespace."
      howTo={["Paste CSS.", "Click Minify.", "Copy the compact output."]}>
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} placeholder=".card { color: red; }" />
      <div className="mt-3"><Button onClick={() => setOut(minifyCss(t))}>Minify</Button></div>
      {out && <div className="mt-4"><Textarea rows={8} value={out} readOnly /><div className="mt-2"><CopyButton text={out} /></div></div>}
    </ToolShell>
  );
}