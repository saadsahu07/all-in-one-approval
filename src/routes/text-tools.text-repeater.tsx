import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/text-repeater")({
  head: () => toolHead("text-tools", "text-repeater"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(10);
  const [sep, setSep] = useState("\\n");
  const output = useMemo(() => {
    const n = Math.min(Math.max(count | 0, 0), 10000);
    const s = sep.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
    return Array.from({ length: n }, () => text).join(s);
  }, [text, count, sep]);

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="text-repeater"
      intro="Repeat any text or phrase a set number of times, with an optional separator between copies."
      howTo={[
        "Type or paste the text you want to repeat.",
        "Enter how many copies you need.",
        "Pick a separator (newline, space, comma, or custom) and copy the result.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={4} placeholder="Text to repeat…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-3">
          <div className="w-32">
            <Label>Repeat</Label>
            <Input type="number" min={1} max={10000} value={count} onChange={(e) => setCount(Number(e.target.value))} />
          </div>
          <div className="w-40">
            <Label>Separator</Label>
            <Input value={sep} onChange={(e) => setSep(e.target.value)} placeholder="\\n" />
          </div>
        </div>
        {output && (
          <div className="space-y-3">
            <Textarea rows={10} readOnly value={output} />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
