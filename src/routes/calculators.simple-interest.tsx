import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Card, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/simple-interest")({
  head: () => toolHead("calculators", "simple-interest"),
  component: Page,
});

function Page() {
  const [p, setP] = useState(10000);
  const [r, setR] = useState(8);
  const [y, setY] = useState(5);
  const { interest, total } = useMemo(() => {
    const i = (p * r * y) / 100;
    return { interest: i, total: p + i };
  }, [p, r, y]);
  const fmt = (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return (
    <ToolShell categorySlug="calculators" toolSlug="simple-interest"
      intro="Compute simple interest and total amount payable."
      howTo={["Enter principal, rate, and years.", "Read the interest and total below."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Principal</Label><Input type="number" value={p} onChange={(e) => setP(+e.target.value)} /></div>
        <div><Label>Rate (%/yr)</Label><Input type="number" value={r} onChange={(e) => setR(+e.target.value)} /></div>
        <div><Label>Years</Label><Input type="number" value={y} onChange={(e) => setY(+e.target.value)} /></div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{fmt(interest)}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Interest</p></Card>
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{fmt(total)}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Total repayment</p></Card>
      </div>
    </ToolShell>
  );
}