import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useEffect, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select, Button } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/currency-converter")({
  head: () => toolHead("calculators", "currency-converter"),
  component: Page,
});

function Page() {
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const load = () => {
    setError("");
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((j) => setRates(j.rates))
      .catch(() => setError("Failed to fetch rates. Please retry."));
  };
  useEffect(() => { load(); }, []);
  let result = 0;
  if (rates && rates[from] && rates[to]) {
    result = (+amount / rates[from]) * rates[to];
  }
  const codes = rates ? Object.keys(rates).sort() : ["USD", "EUR"];
  return (
    <ToolShell categorySlug="calculators" toolSlug="currency-converter"
      intro="Convert between world currencies using live exchange rates."
      howTo={["Enter an amount.", "Pick source and target currency.", "See the converted value."]}
      note="Rates are indicative, provided by open.er-api.com. Not for financial trading.">
      {error && <p className="mb-3 text-sm text-destructive">{error} <Button variant="outline" onClick={load}>Retry</Button></p>}
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Amount</Label><Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /></div>
        <div><Label>From</Label><Select value={from} onChange={(e) => setFrom(e.target.value)}>{codes.map((c) => <option key={c} value={c}>{c}</option>)}</Select></div>
        <div><Label>To</Label><Select value={to} onChange={(e) => setTo(e.target.value)}>{codes.map((c) => <option key={c} value={c}>{c}</option>)}</Select></div>
      </div>
      {rates && (
        <div className="mt-6 rounded-lg border border-border bg-secondary p-6">
          <p className="text-2xl font-bold">{result.toFixed(4)} {to}</p>
          <p className="mt-1 text-sm text-muted-foreground">{amount} {from}</p>
        </div>
      )}
    </ToolShell>
  );
}