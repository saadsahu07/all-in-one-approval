import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/rot13")({
  head: () => toolHead("text-tools", "rot13"),
  component: Page,
});

function rot13(s: string) {
  return s.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function Page() {
  const [text, setText] = useState("");
  const output = useMemo(() => rot13(text), [text]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="rot13"
      intro="Apply the classic ROT13 letter-shift cipher. Encoding and decoding are the same operation — apply twice to get back the original."
      howTo={[
        "Type or paste your text.",
        "The ROT13-shifted output appears live.",
        "Copy the result.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={6} placeholder="Type text…" value={text} onChange={(e) => setText(e.target.value)} />
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
