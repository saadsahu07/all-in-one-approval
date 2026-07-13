import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Card } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/tip")({
  head: () => toolHead("calculators", "tip"),
  component: Page,
});

function Page() {
  const [bill, setBill] = useState(50);
  const [pct, setPct] = useState(15);
  const [people, setPeople] = useState(2);
  const { tip, total, perPerson } = useMemo(() => {
    const t = (bill * pct) / 100;
    const tot = bill + t;
    return { tip: t, total: tot, perPerson: people > 0 ? tot / people : 0 };
  }, [bill, pct, people]);
  const fmt = (n: number) => n.toLocaleString(undefined, { style: "currency", currency: "USD" });
  return (
    <ToolShell
      categorySlug="calculators"
      toolSlug="tip"
      intro="Split any bill and figure out a fair tip per person in seconds."
      howTo={[
        "Enter the bill amount.",
        "Choose the tip percentage.",
        "Enter the number of people to split between.",
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Bill</Label><Input type="number" min={0} step="0.01" value={bill} onChange={(e) => setBill(+e.target.value)} className="mt-1" /></div>
        <div><Label>Tip %</Label><Input type="number" min={0} max={100} value={pct} onChange={(e) => setPct(+e.target.value)} className="mt-1" /></div>
        <div><Label>People</Label><Input type="number" min={1} value={people} onChange={(e) => setPeople(+e.target.value)} className="mt-1" /></div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[["Tip", fmt(tip)], ["Total", fmt(total)], ["Per person", fmt(perPerson)]].map(([l, v]) => (
          <Card key={l} className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{v}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{l}</p>
          </Card>
        ))}
      </div>
    </ToolShell>
  );
}