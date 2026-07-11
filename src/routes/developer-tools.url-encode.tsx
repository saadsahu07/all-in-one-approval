import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/url-encode")({
  head: () => toolHead("developer-tools", "url-encode"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  const out = t ? encodeURIComponent(t) : "";
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="url-encode"
      intro="Percent-encode text for URLs and query strings."
      howTo={["Paste text.", "Copy the encoded URL-safe result."]}>
      <Textarea rows={4} value={t} onChange={(e) => setT(e.target.value)} placeholder="hello world & friends" />
      <div className="mt-4"><Textarea rows={4} value={out} readOnly /></div>
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}