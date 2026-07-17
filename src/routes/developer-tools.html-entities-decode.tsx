import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/html-entities-decode")({
  head: () => toolHead("developer-tools", "html-entities-decode"),
  component: Page,
});

function decode(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, e) => ({ amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " } as Record<string, string>)[e]);
}

function Page() {
  const [t, setT] = useState("");
  const out = decode(t);
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="html-entities-decode"
      intro="Decode HTML entities like &amp;amp;, &amp;lt;, and numeric entities back into readable characters."
      howTo={["Paste entity-encoded text.", "Copy the decoded output."]}>
      <Textarea rows={5} value={t} onChange={(e) => setT(e.target.value)} placeholder="&lt;div&gt;Hi &amp; bye&lt;/div&gt;" />
      <Textarea rows={5} value={out} readOnly className="mt-3 font-mono text-sm" />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}