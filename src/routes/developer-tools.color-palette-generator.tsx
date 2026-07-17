import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/color-palette-generator")({
  head: () => toolHead("developer-tools", "color-palette-generator"),
  component: Page,
});

function hexToHsl(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s * 100, l * 100];
}
function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))));
  return "#" + [f(0), f(8), f(4)].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function Page() {
  const [c, setC] = useState("#3b82f6");
  const hsl = hexToHsl(c);
  const palette = hsl
    ? [-40, -20, 0, 20, 40].map((d) => hslToHex((hsl[0] + d + 360) % 360, hsl[1], hsl[2]))
    : [];
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="color-palette-generator"
      intro="Generate a harmonious 5-color analogous palette around any HEX base color."
      howTo={["Pick or paste a HEX color.", "Copy any swatch's HEX code."]}>
      <div className="flex flex-wrap items-end gap-3 max-w-md">
        <div><Label>Base color</Label><Input value={c} onChange={(e) => setC(e.target.value)} className="font-mono" /></div>
        <input type="color" value={/^#?[0-9a-f]{6}$/i.test(c) ? (c.startsWith("#") ? c : "#" + c) : "#3b82f6"} onChange={(e) => setC(e.target.value)} className="h-10 w-16 rounded border border-border" />
      </div>
      {palette.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {palette.map((hex) => (
            <div key={hex} className="overflow-hidden rounded-lg border border-border">
              <div style={{ background: hex }} className="h-24" />
              <div className="flex items-center justify-between p-2">
                <span className="font-mono text-xs">{hex}</span>
                <CopyButton text={hex} />
              </div>
            </div>
          ))}
        </div>
      )}
    </ToolShell>
  );
}