import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/extract-emails")({
  head: () => toolHead("text-tools", "extract-emails"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  const matches = Array.from(new Set(t.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? []));
  const out = matches.join("\n");
  return (
    <ToolShell categorySlug="text-tools" toolSlug="extract-emails"
      intro="Pull every email address out of any block of text — deduplicated and ready to copy."
      howTo={["Paste any text.", "Emails are extracted instantly.", "Copy the list."]}>
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} placeholder="Contact alice@example.com or bob@test.co…" />
      <p className="mt-2 text-xs text-muted-foreground">{matches.length} unique email{matches.length === 1 ? "" : "s"}</p>
      <Textarea rows={6} className="mt-3" value={out} readOnly />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}