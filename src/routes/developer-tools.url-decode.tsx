import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/url-decode")({
  head: () => ({ meta: [{ title: "URL Decoder — ToolHarbor" }, { name: "description", content: "Decode percent-encoded URLs to readable text." }] }),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  let out = ""; let err = "";
  try { out = t ? decodeURIComponent(t) : ""; } catch (e) { err = (e as Error).message; }
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="url-decode"
      intro="Convert percent-encoded URLs back into plain text."
      howTo={["Paste an encoded URL.", "Copy the decoded output."]}>
      <Textarea rows={4} value={t} onChange={(e) => setT(e.target.value)} placeholder="hello%20world" />
      {err && <p className="mt-2 text-sm text-destructive">{err}</p>}
      <div className="mt-4"><Textarea rows={4} value={out} readOnly /></div>
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}