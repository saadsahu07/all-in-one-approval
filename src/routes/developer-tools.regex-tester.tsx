import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/regex-tester")({
  head: () => toolHead("developer-tools", "regex-tester"),
  component: Page,
});

function Page() {
  const [pattern, setPattern] = useState("\\b(\\w+)@(\\w+)\\.(\\w+)\\b");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("Contact us at hello@toolshive.com or team@example.org");

  const result = useMemo(() => {
    try {
      const re = new RegExp(pattern, flags);
      const matches: { match: string; index: number; groups: string[] }[] = [];
      if (flags.includes("g")) {
        let m: RegExpExecArray | null;
        while ((m = re.exec(text)) !== null) {
          matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
          if (m.index === re.lastIndex) re.lastIndex++;
        }
      } else {
        const m = re.exec(text);
        if (m) matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
      }
      return { ok: true as const, matches };
    } catch (e) {
      return { ok: false as const, error: (e as Error).message };
    }
  }, [pattern, flags, text]);

  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="regex-tester"
      intro="Test a JavaScript regular expression against sample text — see every match and capture group instantly."
      howTo={["Enter a regex pattern and flags.", "Paste sample text below.", "Read the matches and groups."]}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_120px]">
          <div>
            <Label>Pattern</Label>
            <Input value={pattern} onChange={(e) => setPattern(e.target.value)} className="mt-1 font-mono" />
          </div>
          <div>
            <Label>Flags</Label>
            <Input value={flags} onChange={(e) => setFlags(e.target.value)} className="mt-1 font-mono" placeholder="gim" />
          </div>
        </div>
        <div>
          <Label>Sample text</Label>
          <Textarea rows={6} value={text} onChange={(e) => setText(e.target.value)} className="mt-1 font-mono text-sm" />
        </div>
        <div className="rounded-md border border-border bg-card p-3">
          {result.ok ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {result.matches.length} match{result.matches.length === 1 ? "" : "es"}
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                {result.matches.map((m, i) => (
                  <li key={i} className="rounded bg-secondary/60 px-2 py-1 font-mono text-xs">
                    <span className="text-foreground">{m.match}</span>
                    <span className="ml-2 text-muted-foreground">@ {m.index}</span>
                    {m.groups.length > 0 && (
                      <span className="ml-2 text-muted-foreground">groups: [{m.groups.map((g) => JSON.stringify(g)).join(", ")}]</span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="font-mono text-sm text-destructive">Error: {result.error}</p>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
