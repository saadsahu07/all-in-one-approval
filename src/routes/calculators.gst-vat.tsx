import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/gst-vat")({
  head: () => ({ meta: [{ title: "GST / VAT Calculator — ToolHarbor" }, { name: "description", content: "Add or remove GST/VAT from any amount at any rate." }] }),
  component: Page,
});

function Page() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState<"add" | "remove">("add");
  const a = +amount || 0; const r = +rate || 0;
  const tax = mode === "add" ? a * r / 100 : a - a / (1 + r / 100);
  const total = mode === "add" ? a + tax : a;
  const net = mode === "add" ? a : a - tax;
  return (
    <ToolShell categorySlug="calculators" toolSlug="gst-vat"
      intro="Compute tax-inclusive or tax-exclusive totals for GST or VAT."
      howTo={["Enter amount and rate.", "Pick add or remove tax.", "See breakdown."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Amount</Label><Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /></div>
        <div><Label>Rate (%)</Label><Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
        <div><Label>Mode</Label><Select value={mode} onChange={(e) => setMode(e.target.value as "add" | "remove")}><option value="add">Add tax</option><option value="remove">Remove tax</option></Select></div>
      </div>
      {a > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4"><p className="text-xs uppercase text-muted-foreground">Net</p><p className="text-xl font-bold">{net.toFixed(2)}</p></div>
          <div className="rounded-lg border border-border p-4"><p className="text-xs uppercase text-muted-foreground">Tax</p><p className="text-xl font-bold">{tax.toFixed(2)}</p></div>
          <div className="rounded-lg border border-border p-4"><p className="text-xs uppercase text-muted-foreground">Total</p><p className="text-xl font-bold">{total.toFixed(2)}</p></div>
        </div>
      )}
    </ToolShell>
  );
}