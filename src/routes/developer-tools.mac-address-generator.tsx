import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/mac-address-generator")({
  head: () => toolHead("developer-tools", "mac-address-generator"),
  component: Page,
});

function gen(sep: string) {
  const b = new Uint8Array(6);
  crypto.getRandomValues(b);
  b[0] = (b[0] & 0xfe) | 0x02; // locally administered, unicast
  return Array.from(b).map((x) => x.toString(16).padStart(2, "0")).join(sep);
}

function Page() {
  const [count, setCount] = useState(10);
  const [sep, setSep] = useState(":");
  const [out, setOut] = useState("");
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="mac-address-generator"
      intro="Generate valid random MAC addresses (locally administered) in bulk."
      howTo={["Choose how many and pick a separator.", "Click Generate.", "Copy the list."]}>
      <div className="grid gap-3 sm:grid-cols-2 max-w-md">
        <div><Label>Count</Label><Input type="number" min={1} max={500} value={count} onChange={(e) => setCount(+e.target.value)} /></div>
        <div><Label>Separator</Label>
          <select value={sep} onChange={(e) => setSep(e.target.value)} className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
            <option value=":">colon (aa:bb)</option>
            <option value="-">dash (aa-bb)</option>
            <option value="">none (aabb)</option>
          </select>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <Button onClick={() => setOut(Array.from({ length: Math.min(500, count) }, () => gen(sep)).join("\n"))}>Generate</Button>
        <CopyButton text={out} />
      </div>
      {out && <Textarea rows={10} className="mt-3 font-mono text-sm" value={out} readOnly />}
    </ToolShell>
  );
}