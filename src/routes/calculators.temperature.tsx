import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/temperature")({
  head: () => ({ meta: [{ title: "Temperature Converter — ToolHarbor" }, { name: "description", content: "Convert between Celsius, Fahrenheit, and Kelvin." }] }),
  component: Page,
});

function toC(v: number, u: string) { return u === "C" ? v : u === "F" ? (v - 32) * 5 / 9 : v - 273.15; }
function fromC(c: number, u: string) { return u === "C" ? c : u === "F" ? c * 9 / 5 + 32 : c + 273.15; }

function Page() {
  const [v, setV] = useState("100");
  const [from, setFrom] = useState("C");
  const [to, setTo] = useState("F");
  const out = fromC(toC(+v, from), to);
  return (
    <ToolShell categorySlug="calculators" toolSlug="temperature"
      intro="Convert Celsius, Fahrenheit, and Kelvin instantly."
      howTo={["Enter a temperature.", "Pick source and target scales."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Value</Label><Input type="number" value={v} onChange={(e) => setV(e.target.value)} /></div>
        <div><Label>From</Label><Select value={from} onChange={(e) => setFrom(e.target.value)}><option>C</option><option>F</option><option>K</option></Select></div>
        <div><Label>To</Label><Select value={to} onChange={(e) => setTo(e.target.value)}><option>C</option><option>F</option><option>K</option></Select></div>
      </div>
      <p className="mt-6 text-2xl font-bold">{out.toFixed(2)} °{to}</p>
    </ToolShell>
  );
}