import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/remove-line-breaks")({
  head: () => toolHead("text-tools", "remove-line-breaks"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const [replace, setReplace] = useState(" ");
  const [keepParas, setKeepParas] = useState(true);
  const output = useMemo(() => {
    if (keepParas) {
      return text
        .split(/\n{2,}/)
        .map((p) => p.replace(/\s*\n\s*/g, replace).trim())
        .join("\n\n");
    }
    return text.replace(/\s*\n+\s*/g, replace).trim();
  }, [text, replace, keepParas]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="remove-line-breaks"
      intro="Strip newlines from copied text, or replace them with a space or custom separator. Great for cleaning PDF and email pastes."
      howTo={[
        "Paste the text with unwanted line breaks.",
        "Pick a replacement (space by default) or type your own.",
        "Choose whether to keep paragraph breaks, then copy the cleaned text.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Paste text with line breaks…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap items-end gap-3">
          <div className="w-40">
            <Label>Replace with</Label>
            <Input value={replace} onChange={(e) => setReplace(e.target.value)} />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={keepParas} onChange={(e) => setKeepParas(e.target.checked)} />
            Keep paragraph breaks
          </label>
        </div>
        {output && (
          <div className="space-y-3">
            <Textarea rows={8} readOnly value={output} />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
