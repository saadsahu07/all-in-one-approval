import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/base64-decode")({
  head: () => toolHead("developer-tools", "base64-decode"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  let out = ""; let err = "";
  try { out = t ? decodeURIComponent(escape(atob(t.trim()))) : ""; } catch (e) { err = (e as Error).message; }
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="base64-decode"
      intro="Decode Base64 strings back to text."
      howTo={["Paste a Base64 string.", "Copy the decoded text."]}>
      <Textarea rows={5} value={t} onChange={(e) => setT(e.target.value)} placeholder="SGVsbG8gd29ybGQ=" />
      {err && <p className="mt-2 text-sm text-destructive">{err}</p>}
      <div className="mt-4"><Textarea rows={5} value={out} readOnly /></div>
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}