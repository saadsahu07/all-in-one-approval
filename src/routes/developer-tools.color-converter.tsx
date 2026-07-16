import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/color-converter")({
  head: () => toolHead("developer-tools", "color-converter"),
  component: Page,
});

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.trim().replace(/^#/, "");
  const s = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return null;
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}
function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0")).join("");
}
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function Page() {
  const [hex, setHex] = useState("#3b82f6");
  const rgb = useMemo(() => hexToRgb(hex), [hex]);
  const rgbStr = rgb ? `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` : "—";
  const hslStr = rgb ? (() => { const [h, s, l] = rgbToHsl(...rgb); return `hsl(${h}, ${s}%, ${l}%)`; })() : "—";
  const preview = rgb ? rgbToHex(...rgb) : "#000000";

  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="color-converter"
      intro="Convert colors between HEX, RGB, and HSL with a live preview swatch."
      howTo={["Enter a HEX color code.", "See the RGB and HSL equivalents live.", "Copy whichever format you need."]}
    >
      <div className="space-y-4">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Label>HEX</Label>
            <Input value={hex} onChange={(e) => setHex(e.target.value)} className="mt-1 font-mono" placeholder="#3b82f6" />
          </div>
          <div className="h-12 w-16 shrink-0 rounded-md border border-border" style={{ background: preview }} aria-label="Color preview" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">RGB</span>
              <CopyButton text={rgbStr} />
            </div>
            <p className="font-mono text-sm text-foreground">{rgbStr}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">HSL</span>
              <CopyButton text={hslStr} />
            </div>
            <p className="font-mono text-sm text-foreground">{hslStr}</p>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
