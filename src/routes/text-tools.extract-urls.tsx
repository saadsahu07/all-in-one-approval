import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/extract-urls")({
  head: () => toolHead("text-tools", "extract-urls"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  const matches = Array.from(new Set(t.match(/https?:\/\/[^\s<>"')]+/gi) ?? []));
  const out = matches.join("\n");
  return (
    <ToolShell categorySlug="text-tools" toolSlug="extract-urls"
      intro="Pull every http(s) link out of any block of text — deduplicated and ready to copy."
      howTo={["Paste any text.", "URLs are extracted instantly.", "Copy the list."]}>
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} placeholder="Check https://example.com and http://test.org/page…" />
      <p className="mt-2 text-xs text-muted-foreground">{matches.length} unique URL{matches.length === 1 ? "" : "s"}</p>
      <Textarea rows={6} className="mt-3" value={out} readOnly />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}