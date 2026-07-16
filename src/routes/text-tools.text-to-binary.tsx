import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/text-to-binary")({
  head: () => toolHead("text-tools", "text-to-binary"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const output = useMemo(() => {
    if (!text) return "";
    const bytes = new TextEncoder().encode(text);
    return Array.from(bytes, (b) => b.toString(2).padStart(8, "0")).join(" ");
  }, [text]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="text-to-binary"
      intro="Encode any text into its 8-bit binary representation using UTF-8. Handles emoji and non-ASCII characters."
      howTo={[
        "Type or paste text.",
        "The binary appears live below.",
        "Copy it or paste it into the Binary to Text tool to decode.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={6} placeholder="Type text…" value={text} onChange={(e) => setText(e.target.value)} />
        {output && (
          <div className="space-y-3">
            <Textarea rows={8} readOnly value={output} className="font-mono" />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
