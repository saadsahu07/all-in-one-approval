import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/mortgage")({
  head: () => toolHead("calculators", "mortgage"),
  component: Page,
});

function Page() {
  const [amount, setAmount] = useState("250000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");
  const P = +amount, r = +rate / 100 / 12, n = +years * 12;
  const monthly = r > 0 && n > 0 ? (P * r) / (1 - Math.pow(1 + r, -n)) : P / n;
  const total = monthly * n, interest = total - P;
  const ok = P > 0 && +rate >= 0 && +years > 0 && isFinite(monthly);
  return (
    <ToolShell categorySlug="calculators" toolSlug="mortgage"
      intro="Estimate monthly mortgage payments plus total interest over the loan term."
      howTo={["Enter the loan amount, annual rate, and term.", "Read the monthly payment and totals live."]}>
      <div className="grid gap-3 sm:grid-cols-3 max-w-2xl">
        <div><Label>Loan amount</Label><Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /></div>
        <div><Label>Interest rate (% APR)</Label><Input type="number" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
        <div><Label>Term (years)</Label><Input type="number" value={years} onChange={(e) => setYears(e.target.value)} /></div>
      </div>
      {ok && (
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Monthly</p><p className="text-xl font-semibold">{monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Total paid</p><p className="text-xl font-semibold">{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Total interest</p><p className="text-xl font-semibold">{interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p></div>
        </div>
      )}
    </ToolShell>
  );
}