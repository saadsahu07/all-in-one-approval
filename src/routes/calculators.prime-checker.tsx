import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/prime-checker")({
  head: () => toolHead("calculators", "prime-checker"),
  component: Page,
});

function check(n: number): { prime: boolean; factor?: number } | null {
  if (!Number.isInteger(n) || n < 2) return null;
  if (n < 4) return { prime: true };
  if (n % 2 === 0) return { prime: false, factor: 2 };
  const lim = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= lim; i += 2) if (n % i === 0) return { prime: false, factor: i };
  return { prime: true };
}

function Page() {
  const [n, setN] = useState("97");
  const r = check(+n);
  return (
    <ToolShell categorySlug="calculators" toolSlug="prime-checker"
      intro="Check whether a number is prime — and if not, see its smallest prime factor."
      howTo={["Enter an integer ≥ 2.", "Read the result live."]}>
      <div className="max-w-xs"><Label>Number</Label><Input type="number" min={2} value={n} onChange={(e) => setN(e.target.value)} /></div>
      {r && (
        <p className={"mt-4 text-lg font-semibold " + (r.prime ? "text-emerald-500" : "text-destructive")}>
          {r.prime ? `✓ ${n} is prime` : `✗ ${n} is not prime — smallest factor is ${r.factor}`}
        </p>
      )}
    </ToolShell>
  );
}