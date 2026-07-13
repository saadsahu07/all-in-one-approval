import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Textarea, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/jwt-decoder")({
  head: () => toolHead("developer-tools", "jwt-decoder"),
  component: Page,
});

function b64urlDecode(s: string): string {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = (s + pad).replace(/-/g, "+").replace(/_/g, "/");
  try {
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch {
    return "";
  }
}

function decode(token: string) {
  const parts = token.trim().split(".");
  if (parts.length < 2) return { error: "A JWT has three dot-separated parts." };
  const format = (raw: string) => {
    const txt = b64urlDecode(raw);
    if (!txt) return "// unable to decode";
    try { return JSON.stringify(JSON.parse(txt), null, 2); } catch { return txt; }
  };
  return {
    header: format(parts[0]),
    payload: format(parts[1]),
    signature: parts[2] ?? "",
  };
}

function Page() {
  const [token, setToken] = useState("");
  const result = useMemo(() => (token.trim() ? decode(token) : null), [token]);
  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="jwt-decoder"
      intro="Paste a JSON Web Token to inspect its header and payload. Decoding happens locally — the token never leaves your browser. This tool does not verify the signature."
      howTo={[
        "Paste your JWT into the box.",
        "Read the decoded header and payload.",
        "Never paste production secrets into any online tool.",
      ]}
      note="Decoding a JWT does not verify it. Do not trust an unverified token."
    >
      <div className="space-y-4">
        <Textarea rows={4} placeholder="eyJhbGciOi..." value={token} onChange={(e) => setToken(e.target.value)} className="font-mono text-xs" />
        {result && "error" in result ? (
          <p className="text-sm text-destructive">{result.error}</p>
        ) : result ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Header</Label>
              <pre className="mt-1 max-h-64 overflow-auto rounded-md border border-border bg-card p-3 text-xs">{result.header}</pre>
            </div>
            <div>
              <Label>Payload</Label>
              <pre className="mt-1 max-h-64 overflow-auto rounded-md border border-border bg-card p-3 text-xs">{result.payload}</pre>
            </div>
          </div>
        ) : null}
      </div>
    </ToolShell>
  );
}