import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/remove-numbers")({
  head: () => toolHead("text-tools", "remove-numbers"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  const out = t.replace(/\d+/g, "");
  return (
    <ToolShell categorySlug="text-tools" toolSlug="remove-numbers"
      intro="Strip every digit and number from your text in one click."
      howTo={["Paste text.", "Numbers are removed instantly.", "Copy the cleaned text."]}>
      <Textarea rows={6} value={t} onChange={(e) => setT(e.target.value)} placeholder="Order 42 arrived on 2024-03-15…" />
      <Textarea rows={6} className="mt-3" value={out} readOnly />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}