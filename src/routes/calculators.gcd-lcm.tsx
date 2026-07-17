import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/gcd-lcm")({
  head: () => toolHead("calculators", "gcd-lcm"),
  component: Page,
});

function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; }

function Page() {
  const [a, setA] = useState("24");
  const [b, setB] = useState("36");
  const na = +a, nb = +b;
  const ok = Number.isInteger(na) && Number.isInteger(nb) && (na || nb);
  const g = ok ? gcd(na, nb) : 0;
  const l = ok && g ? Math.abs(na * nb) / g : 0;
  return (
    <ToolShell categorySlug="calculators" toolSlug="gcd-lcm"
      intro="Find the greatest common divisor (GCD) and least common multiple (LCM) of two integers."
      howTo={["Enter two integers.", "Read GCD and LCM live."]}>
      <div className="grid gap-3 sm:grid-cols-2 max-w-md">
        <div><Label>A</Label><Input type="number" value={a} onChange={(e) => setA(e.target.value)} /></div>
        <div><Label>B</Label><Input type="number" value={b} onChange={(e) => setB(e.target.value)} /></div>
      </div>
      {ok && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-md">
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">GCD</p><p className="text-2xl font-bold">{g}</p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">LCM</p><p className="text-2xl font-bold">{l}</p></div>
        </div>
      )}
    </ToolShell>
  );
}