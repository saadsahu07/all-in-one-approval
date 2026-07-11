import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/emi")({
  head: () => ({ meta: [{ title: "EMI Calculator — ToolHive" }, { name: "description", content: "Estimate monthly loan payments (EMI) and total interest." }] }),
  component: Page,
});

function Page() {
  const [p, setP] = useState("500000");
  const [r, setR] = useState("9");
  const [n, setN] = useState("60");
  const P = +p, R = +r / 12 / 100, N = +n;
  const emi = R > 0 ? (P * R * (1 + R) ** N) / ((1 + R) ** N - 1) : P / N;
  const total = emi * N; const interest = total - P;
  return (
    <ToolShell categorySlug="calculators" toolSlug="emi"
      intro="Estimate monthly loan installments based on principal, annual rate, and tenure."
      howTo={["Enter loan details.", "See EMI, total payable, and interest."]}
      note="Estimates only. Actual bank offers may include processing fees, GST, and rate variations.">
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Principal</Label><Input type="number" value={p} onChange={(e) => setP(e.target.value)} /></div>
        <div><Label>Annual rate (%)</Label><Input type="number" value={r} onChange={(e) => setR(e.target.value)} /></div>
        <div><Label>Tenure (months)</Label><Input type="number" value={n} onChange={(e) => setN(e.target.value)} /></div>
      </div>
      {isFinite(emi) && emi > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4"><p className="text-xs uppercase text-muted-foreground">Monthly EMI</p><p className="text-xl font-bold">{emi.toFixed(2)}</p></div>
          <div className="rounded-lg border border-border p-4"><p className="text-xs uppercase text-muted-foreground">Total interest</p><p className="text-xl font-bold">{interest.toFixed(2)}</p></div>
          <div className="rounded-lg border border-border p-4"><p className="text-xs uppercase text-muted-foreground">Total payable</p><p className="text-xl font-bold">{total.toFixed(2)}</p></div>
        </div>
      )}
    </ToolShell>
  );
}