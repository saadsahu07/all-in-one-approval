import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/area")({
  head: () => toolHead("calculators", "area"),
  component: Page,
});

function Page() {
  const [shape, setShape] = useState("rectangle");
  const [a, setA] = useState(10);
  const [b, setB] = useState(5);
  let area = 0;
  if (shape === "rectangle") area = a * b;
  else if (shape === "circle") area = Math.PI * a * a;
  else if (shape === "triangle") area = 0.5 * a * b;
  return (
    <ToolShell categorySlug="calculators" toolSlug="area"
      intro="Calculate the area of common shapes in seconds."
      howTo={["Pick a shape.", "Enter the required dimensions.", "Read the area below."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Shape</Label>
          <Select value={shape} onChange={(e) => setShape(e.target.value)}>
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle (radius)</option>
            <option value="triangle">Triangle (base × height)</option>
          </Select>
        </div>
        <div><Label>{shape === "circle" ? "Radius" : shape === "triangle" ? "Base" : "Width"}</Label>
          <Input type="number" value={a} onChange={(e) => setA(+e.target.value)} /></div>
        {shape !== "circle" && (
          <div><Label>{shape === "triangle" ? "Height" : "Length"}</Label>
            <Input type="number" value={b} onChange={(e) => setB(+e.target.value)} /></div>
        )}
      </div>
      <p className="mt-6 text-2xl font-bold text-primary">{area.toLocaleString(undefined, { maximumFractionDigits: 4 })} sq units</p>
    </ToolShell>
  );
}