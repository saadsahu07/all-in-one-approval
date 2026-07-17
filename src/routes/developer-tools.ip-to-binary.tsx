import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/ip-to-binary")({
  head: () => toolHead("developer-tools", "ip-to-binary"),
  component: Page,
});

function Page() {
  const [ip, setIp] = useState("192.168.1.1");
  const parts = ip.split(".");
  const valid = parts.length === 4 && parts.every((p) => /^\d+$/.test(p) && +p >= 0 && +p <= 255);
  const bin = valid ? parts.map((p) => (+p).toString(2).padStart(8, "0")).join(".") : "";
  const dec = valid ? parts.reduce((n, p) => n * 256 + +p, 0) : 0;
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="ip-to-binary"
      intro="Convert an IPv4 address to its 32-bit binary form (dotted per-octet) and its decimal integer form."
      howTo={["Type an IPv4 address like 192.168.1.1.", "Read the binary and decimal below."]}>
      <Input value={ip} onChange={(e) => setIp(e.target.value)} className="font-mono max-w-xs" />
      {valid ? (
        <div className="mt-4 space-y-3">
          <div className="rounded-md border border-border bg-card p-3">
            <p className="text-xs uppercase text-muted-foreground">Binary</p>
            <p className="mt-1 break-all font-mono text-sm">{bin}</p>
            <div className="mt-2"><CopyButton text={bin} /></div>
          </div>
          <div className="rounded-md border border-border bg-card p-3">
            <p className="text-xs uppercase text-muted-foreground">Decimal integer</p>
            <p className="mt-1 font-mono text-sm">{dec}</p>
          </div>
        </div>
      ) : <p className="mt-2 text-sm text-destructive">Enter a valid IPv4 address.</p>}
    </ToolShell>
  );
}