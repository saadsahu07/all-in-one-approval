import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/js-minifier")({
  head: () => ({ meta: [{ title: "JavaScript Minifier — ToolHive" }, { name: "description", content: "Basic JavaScript minifier: strips comments and whitespace." }] }),
  component: Page,
});

function minifyJs(s: string) {
  return s
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1")
    .replace(/\n\s*/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function Page() {
  const [t, setT] = useState("");
  const [out, setOut] = useState("");
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="js-minifier"
      intro="Light JavaScript minifier that removes comments and extra whitespace."
      howTo={["Paste JS.", "Click Minify.", "Copy the smaller output."]}
      note="This is a lightweight minifier for quick trimming. For production builds, use a real bundler like esbuild or terser.">
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} placeholder="function hi() { console.log('hi'); }" />
      <div className="mt-3"><Button onClick={() => setOut(minifyJs(t))}>Minify</Button></div>
      {out && <div className="mt-4"><Textarea rows={8} value={out} readOnly /><div className="mt-2"><CopyButton text={out} /></div></div>}
    </ToolShell>
  );
}