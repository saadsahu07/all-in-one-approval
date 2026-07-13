import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useEffect, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/password-generator")({
  head: () => toolHead("developer-tools", "password-generator"),
  component: Page,
});

function gen(length: number, opts: { upper: boolean; lower: boolean; num: boolean; sym: boolean }) {
  let pool = "";
  if (opts.upper) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (opts.lower) pool += "abcdefghijklmnopqrstuvwxyz";
  if (opts.num) pool += "0123456789";
  if (opts.sym) pool += "!@#$%^&*()-_=+[]{};:,.<>?";
  if (!pool) return "";
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, (v) => pool[v % pool.length]).join("");
}

function Page() {
  const [len, setLen] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [num, setNum] = useState(true);
  const [sym, setSym] = useState(true);
  const [pw, setPw] = useState("");
  useEffect(() => { setPw(gen(len, { upper, lower, num, sym })); }, [len, upper, lower, num, sym]);
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="password-generator"
      intro="Create cryptographically strong random passwords locally in your browser."
      howTo={["Pick a length and character set.", "Regenerate as needed.", "Copy the password to your manager."]}>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
        <div><Label>Length: {len}</Label><input type="range" min={6} max={64} value={len} onChange={(e) => setLen(+e.target.value)} className="w-full" /></div>
        <div className="space-y-2 text-sm">
          <label className="flex gap-2"><input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)} /> Uppercase</label>
          <label className="flex gap-2"><input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} /> Lowercase</label>
          <label className="flex gap-2"><input type="checkbox" checked={num} onChange={(e) => setNum(e.target.checked)} /> Numbers</label>
          <label className="flex gap-2"><input type="checkbox" checked={sym} onChange={(e) => setSym(e.target.checked)} /> Symbols</label>
        </div>
      </div>
      <div className="mt-4"><Input value={pw} readOnly className="font-mono" /></div>
      <div className="mt-2 flex gap-2">
        <Button onClick={() => setPw(gen(len, { upper, lower, num, sym }))}>Regenerate</Button>
        <CopyButton text={pw} />
      </div>
    </ToolShell>
  );
}