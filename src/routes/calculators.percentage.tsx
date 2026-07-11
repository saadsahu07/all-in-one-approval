import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/percentage")({
  head: () => ({ meta: [{ title: "Percentage Calculator — ToolHarbor" }, { name: "description", content: "Solve common percentage problems fast." }] }),
  component: Page,
});

function Page() {
  const [p, setP] = useState("");
  const [n, setN] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  return (
    <ToolShell categorySlug="calculators" toolSlug="percentage"
      intro="Two common percentage questions in one place."
      howTo={["Fill in the fields.", "Read the answer live."]}>
      <div className="rounded-lg border border-border p-4">
        <p className="text-sm font-medium">What is X% of Y?</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div><Label>X (%)</Label><Input type="number" value={p} onChange={(e) => setP(e.target.value)} /></div>
          <div><Label>Y</Label><Input type="number" value={n} onChange={(e) => setN(e.target.value)} /></div>
        </div>
        {p && n && <p className="mt-3 text-lg font-semibold">= {((+p * +n) / 100).toLocaleString()}</p>}
      </div>
      <div className="mt-4 rounded-lg border border-border p-4">
        <p className="text-sm font-medium">A is what % of B?</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div><Label>A</Label><Input type="number" value={a} onChange={(e) => setA(e.target.value)} /></div>
          <div><Label>B</Label><Input type="number" value={b} onChange={(e) => setB(e.target.value)} /></div>
        </div>
        {a && b && +b !== 0 && <p className="mt-3 text-lg font-semibold">= {((+a / +b) * 100).toFixed(2)}%</p>}
      </div>
    </ToolShell>
  );
}