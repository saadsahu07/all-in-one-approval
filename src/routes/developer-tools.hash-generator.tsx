import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useEffect, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/hash-generator")({
  head: () => toolHead("developer-tools", "hash-generator"),
  component: Page,
});

const ALGOS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;

async function hashText(text: string, algo: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const digest = await globalThis.crypto.subtle.digest(algo, buf);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function Page() {
  const [text, setText] = useState("hello world");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    Promise.all(ALGOS.map((a) => hashText(text, a).then((h) => [a, h] as const))).then((entries) => {
      if (!cancelled) setHashes(Object.fromEntries(entries));
    });
    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="hash-generator"
      intro="Generate SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes from any text — computed locally using the Web Crypto API."
      howTo={[
        "Type or paste your text.",
        "Every algorithm's hash updates instantly.",
        "Copy the hash you need.",
      ]}
    >
      <div className="space-y-4">
        <div>
          <Label>Input text</Label>
          <Textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} className="mt-1 font-mono text-sm" />
        </div>
        <div className="space-y-3">
          {ALGOS.map((a) => (
            <div key={a} className="rounded-md border border-border bg-card p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{a}</span>
                <CopyButton text={hashes[a] ?? ""} />
              </div>
              <p className="break-all font-mono text-xs text-foreground">{hashes[a] ?? "…"}</p>
            </div>
          ))}
        </div>
      </div>
    </ToolShell>
  );
}