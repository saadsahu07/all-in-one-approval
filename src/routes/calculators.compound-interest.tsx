import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Card, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/compound-interest")({
  head: () => toolHead("calculators", "compound-interest"),
  component: Page,
});

function Page() {
  const [p, setP] = useState(10000);
  const [r, setR] = useState(8);
  const [y, setY] = useState(10);
  const [n, setN] = useState(12);
  const { total, interest } = useMemo(() => {
    const t = p * Math.pow(1 + r / 100 / n, n * y);
    return { total: t, interest: t - p };
  }, [p, r, y, n]);
  const fmt = (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return (
    <ToolShell categorySlug="calculators" toolSlug="compound-interest"
      intro="Project the future value of savings or investments with compound interest."
      howTo={["Enter principal, rate, years, and compounding frequency.", "Read the total and interest earned."]}>
      <div className="grid gap-4 sm:grid-cols-4">
        <div><Label>Principal</Label><Input type="number" value={p} onChange={(e) => setP(+e.target.value)} /></div>
        <div><Label>Rate (%/yr)</Label><Input type="number" value={r} onChange={(e) => setR(+e.target.value)} /></div>
        <div><Label>Years</Label><Input type="number" value={y} onChange={(e) => setY(+e.target.value)} /></div>
        <div><Label>Compounds / yr</Label><Input type="number" value={n} onChange={(e) => setN(+e.target.value)} /></div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{fmt(total)}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Future value</p></Card>
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{fmt(interest)}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Interest earned</p></Card>
      </div>
    </ToolShell>
  );
}