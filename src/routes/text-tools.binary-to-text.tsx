import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/binary-to-text")({
  head: () => toolHead("text-tools", "binary-to-text"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const { output, error } = useMemo(() => {
    if (!text.trim()) return { output: "", error: "" };
    try {
      const groups = text.trim().split(/\s+/);
      for (const g of groups) if (!/^[01]{1,8}$/.test(g)) throw new Error(`Invalid binary group: "${g}"`);
      const bytes = new Uint8Array(groups.map((g) => parseInt(g, 2)));
      return { output: new TextDecoder().decode(bytes), error: "" };
    } catch (e) {
      return { output: "", error: e instanceof Error ? e.message : "Invalid input" };
    }
  }, [text]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="binary-to-text"
      intro="Decode 8-bit binary sequences back into readable text. Groups may be separated by spaces or newlines."
      howTo={[
        "Paste binary — spaces between bytes are fine.",
        "The decoded text appears live.",
        "Copy the result.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={6} placeholder="01001000 01101001" value={text} onChange={(e) => setText(e.target.value)} className="font-mono" />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {output && (
          <div className="space-y-3">
            <Textarea rows={6} readOnly value={output} />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
