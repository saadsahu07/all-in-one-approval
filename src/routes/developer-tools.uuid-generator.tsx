import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea, Label, Input } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/uuid-generator")({
  head: () => toolHead("developer-tools", "uuid-generator"),
  component: Page,
});

function uuidv4(): string {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  const b = new Uint8Array(16);
  c.getRandomValues(b);
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

function Page() {
  const [count, setCount] = useState(5);
  const [ids, setIds] = useState<string[]>(() => Array.from({ length: 5 }, uuidv4));
  const generate = () => setIds(Array.from({ length: Math.max(1, Math.min(500, count)) }, uuidv4));
  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="uuid-generator"
      intro="Generate cryptographically strong v4 UUIDs (RFC 4122) directly in your browser — nothing is sent to a server."
      howTo={[
        "Choose how many UUIDs you need.",
        "Click Generate to produce a fresh batch.",
        "Copy them to the clipboard.",
      ]}
    >
      <div className="space-y-4">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Label>How many</Label>
            <Input type="number" min={1} max={500} value={count} onChange={(e) => setCount(+e.target.value)} className="mt-1" />
          </div>
          <Button onClick={generate}>Generate</Button>
        </div>
        <Textarea rows={10} readOnly value={ids.join("\n")} className="font-mono text-xs" />
        <CopyButton text={ids.join("\n")} />
      </div>
    </ToolShell>
  );
}