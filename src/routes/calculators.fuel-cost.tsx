import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/fuel-cost")({
  head: () => toolHead("calculators", "fuel-cost"),
  component: Page,
});

function Page() {
  const [dist, setDist] = useState("300");
  const [mpg, setMpg] = useState("30");
  const [price, setPrice] = useState("4.20");
  const litres = +dist / +mpg;
  const cost = litres * +price;
  const ok = +dist > 0 && +mpg > 0 && +price >= 0 && isFinite(cost);
  return (
    <ToolShell categorySlug="calculators" toolSlug="fuel-cost"
      intro="Estimate the fuel cost of a trip from distance, vehicle mileage, and fuel price."
      howTo={["Enter distance, mileage, and fuel price.", "Read the cost live."]}>
      <div className="grid gap-3 sm:grid-cols-3 max-w-2xl">
        <div><Label>Distance</Label><Input type="number" value={dist} onChange={(e) => setDist(e.target.value)} /></div>
        <div><Label>Mileage (miles or km per unit fuel)</Label><Input type="number" value={mpg} onChange={(e) => setMpg(e.target.value)} /></div>
        <div><Label>Fuel price (per unit)</Label><Input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
      </div>
      {ok && (
        <div className="mt-4 rounded-md border border-border p-4">
          <p className="text-xs text-muted-foreground">Estimated fuel needed</p>
          <p className="text-xl font-semibold">{litres.toFixed(2)}</p>
          <p className="mt-2 text-xs text-muted-foreground">Estimated cost</p>
          <p className="text-2xl font-bold">{cost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        </div>
      )}
    </ToolShell>
  );
}