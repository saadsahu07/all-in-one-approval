import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useEffect, useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label, Button } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/timestamp-converter")({
  head: () => toolHead("developer-tools", "timestamp-converter"),
  component: Page,
});

function Page() {
  const [raw, setRaw] = useState(String(Math.floor(Date.now() / 1000)));
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const parsed = useMemo(() => {
    const n = Number(raw);
    if (!Number.isFinite(n)) return null;
    const ms = raw.replace(/\D/g, "").length >= 13 ? n : n * 1000;
    const d = new Date(ms);
    if (isNaN(d.getTime())) return null;
    return d;
  }, [raw]);

  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="timestamp-converter"
      intro="Convert Unix timestamps (seconds or milliseconds) to human dates in UTC and local time — auto-detected."
      howTo={["Paste a Unix timestamp or click Now.", "See UTC and local time equivalents.", "Copy the format you need."]}
    >
      <div className="space-y-4">
        <div>
          <Label>Unix timestamp (seconds or milliseconds)</Label>
          <div className="mt-1 flex gap-2">
            <Input value={raw} onChange={(e) => setRaw(e.target.value)} className="font-mono" />
            <Button variant="outline" onClick={() => setRaw(String(Math.floor(Date.now() / 1000)))}>Now</Button>
          </div>
        </div>
        {parsed ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-card p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">UTC</span>
                <CopyButton text={parsed.toISOString()} />
              </div>
              <p className="font-mono text-sm text-foreground">{parsed.toISOString()}</p>
            </div>
            <div className="rounded-md border border-border bg-card p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Local</span>
                <CopyButton text={parsed.toString()} />
              </div>
              <p className="font-mono text-sm text-foreground">{parsed.toString()}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-destructive">Invalid timestamp</p>
        )}
        <p className="text-xs text-muted-foreground">
          Current time: <span className="font-mono">{Math.floor(now / 1000)}</span> s / <span className="font-mono">{now}</span> ms
        </p>
      </div>
    </ToolShell>
  );
}
