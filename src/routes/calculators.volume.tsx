import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/volume")({
  head: () => toolHead("calculators", "volume"),
  component: Page,
});

function Page() {
  const [shape, setShape] = useState("box");
  const [a, setA] = useState(10);
  const [b, setB] = useState(5);
  const [c, setC] = useState(3);
  let v = 0;
  if (shape === "box") v = a * b * c;
  else if (shape === "sphere") v = (4 / 3) * Math.PI * a ** 3;
  else if (shape === "cylinder") v = Math.PI * a * a * b;
  return (
    <ToolShell categorySlug="calculators" toolSlug="volume"
      intro="Compute the volume of common 3D shapes."
      howTo={["Pick a shape.", "Enter dimensions.", "Read the volume."]}>
      <div className="grid gap-4 sm:grid-cols-4">
        <div><Label>Shape</Label>
          <Select value={shape} onChange={(e) => setShape(e.target.value)}>
            <option value="box">Box (L×W×H)</option>
            <option value="sphere">Sphere (radius)</option>
            <option value="cylinder">Cylinder (r, h)</option>
          </Select>
        </div>
        <div><Label>{shape === "sphere" || shape === "cylinder" ? "Radius" : "Length"}</Label>
          <Input type="number" value={a} onChange={(e) => setA(+e.target.value)} /></div>
        {shape !== "sphere" && (
          <div><Label>{shape === "cylinder" ? "Height" : "Width"}</Label>
            <Input type="number" value={b} onChange={(e) => setB(+e.target.value)} /></div>
        )}
        {shape === "box" && (
          <div><Label>Height</Label>
            <Input type="number" value={c} onChange={(e) => setC(+e.target.value)} /></div>
        )}
      </div>
      <p className="mt-6 text-2xl font-bold text-primary">{v.toLocaleString(undefined, { maximumFractionDigits: 4 })} cubic units</p>
    </ToolShell>
  );
}