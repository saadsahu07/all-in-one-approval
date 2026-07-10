import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/case-converter")({
  head: () => ({
    meta: [
      { title: "Case Converter — UPPER, lower, Title Case | ToolHarbor" },
      { name: "description", content: "Convert text between uppercase, lowercase, title case, sentence case, and alternating case. Free online case converter." },
      { property: "og:title", content: "Case Converter | ToolHarbor" },
      { property: "og:description", content: "Switch text between upper, lower, title, and sentence case." },
    ],
  }),
  component: CaseConverter,
});

const conversions: [string, (s: string) => string][] = [
  ["UPPERCASE", (s) => s.toUpperCase()],
  ["lowercase", (s) => s.toLowerCase()],
  ["Title Case", (s) => s.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase())],
  ["Sentence case", (s) => s.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, p, c) => p + c.toUpperCase())],
  ["aLtErNaTiNg", (s) => s.split("").map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase())).join("")],
  ["iNVERSE", (s) => s.split("").map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("")],
];

function CaseConverter() {
  const [text, setText] = useState("");

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="case-converter"
      intro="Paste text and convert it to the case you need — uppercase, lowercase, title case, sentence case, and more."
      howTo={[
        "Paste or type text into the box.",
        "Click any case button to convert the text in place.",
        "Copy the result when it looks right.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Type or paste text here…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-2">
          {conversions.map(([label, fn]) => (
            <Button key={label} variant="secondary" onClick={() => setText(fn(text))} disabled={!text}>
              {label}
            </Button>
          ))}
          <CopyButton text={text} />
        </div>
      </div>
    </ToolShell>
  );
}