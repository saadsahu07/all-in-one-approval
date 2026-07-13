import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Card } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/discount")({
  head: () => toolHead("calculators", "discount"),
  component: Page,
});

function Page() {
  const [price, setPrice] = useState(100);
  const [pct, setPct] = useState(20);
  const { save, final } = useMemo(() => {
    const s = (price * pct) / 100;
    return { save: s, final: price - s };
  }, [price, pct]);
  const fmt = (n: number) => n.toLocaleString(undefined, { style: "currency", currency: "USD" });
  return (
    <ToolShell
      categorySlug="calculators"
      toolSlug="discount"
      intro="Enter an original price and a percentage off to see the sale price and how much you save."
      howTo={[
        "Enter the original price.",
        "Enter the discount percentage.",
        "Read the final price and savings.",
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label>Original price</Label><Input type="number" min={0} step="0.01" value={price} onChange={(e) => setPrice(+e.target.value)} className="mt-1" /></div>
        <div><Label>Discount %</Label><Input type="number" min={0} max={100} value={pct} onChange={(e) => setPct(+e.target.value)} className="mt-1" /></div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[["You save", fmt(save)], ["Final price", fmt(final)]].map(([l, v]) => (
          <Card key={l} className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{v}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{l}</p>
          </Card>
        ))}
      </div>
    </ToolShell>
  );
}