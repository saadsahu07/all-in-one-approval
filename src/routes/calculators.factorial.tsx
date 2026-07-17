import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/factorial")({
  head: () => toolHead("calculators", "factorial"),
  component: Page,
});

function fact(n: number): string {
  if (!Number.isInteger(n) || n < 0) return "";
  if (n > 5000) return "Too large (max 5000)";
  let r = 1n;
  for (let i = 2n; i <= BigInt(n); i++) r *= i;
  return r.toString();
}

function Page() {
  const [n, setN] = useState("20");
  const out = fact(+n);
  return (
    <ToolShell categorySlug="calculators" toolSlug="factorial"
      intro="Compute the factorial n! of any non-negative integer, using BigInt for exact results up to n=5000."
      howTo={["Enter a non-negative integer.", "Copy the exact factorial."]}>
      <div className="max-w-xs"><Label>n</Label><Input type="number" min={0} max={5000} value={n} onChange={(e) => setN(e.target.value)} /></div>
      {out && (
        <div className="mt-4 rounded-md border border-border p-3">
          <div className="flex items-start justify-between gap-3">
            <p className="break-all font-mono text-sm">{out}</p>
            <CopyButton text={out} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{out.length} digits</p>
        </div>
      )}
    </ToolShell>
  );
}