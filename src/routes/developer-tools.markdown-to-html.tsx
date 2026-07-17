import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/markdown-to-html")({
  head: () => toolHead("developer-tools", "markdown-to-html"),
  component: Page,
});

function esc(s: string) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function md(src: string): string {
  const lines = src.split("\n");
  const out: string[] = [];
  let inList = false, inCode = false, para: string[] = [];
  const flushPara = () => { if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; } };
  const inline = (s: string) => esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  for (const raw of lines) {
    const l = raw;
    if (/^```/.test(l)) { flushPara(); if (!inCode) { out.push("<pre><code>"); inCode = true; } else { out.push("</code></pre>"); inCode = false; } continue; }
    if (inCode) { out.push(esc(l)); continue; }
    if (/^\s*$/.test(l)) { flushPara(); if (inList) { out.push("</ul>"); inList = false; } continue; }
    const h = /^(#{1,6})\s+(.*)$/.exec(l);
    if (h) { flushPara(); if (inList) { out.push("</ul>"); inList = false; } out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); continue; }
    const li = /^\s*[-*]\s+(.*)$/.exec(l);
    if (li) { flushPara(); if (!inList) { out.push("<ul>"); inList = true; } out.push(`<li>${inline(li[1])}</li>`); continue; }
    para.push(l);
  }
  flushPara(); if (inList) out.push("</ul>"); if (inCode) out.push("</code></pre>");
  return out.join("\n");
}

function Page() {
  const [t, setT] = useState("# Hello\n\nThis is **markdown**.\n\n- item one\n- item two");
  const out = md(t);
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="markdown-to-html"
      intro="Convert Markdown into clean HTML — supports headings, bold, italic, links, lists, inline code, and fenced code blocks."
      howTo={["Write or paste Markdown.", "Copy the generated HTML."]}>
      <Textarea rows={10} value={t} onChange={(e) => setT(e.target.value)} className="font-mono text-sm" />
      <Textarea rows={10} value={out} readOnly className="mt-3 font-mono text-sm" />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}