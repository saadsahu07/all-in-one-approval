import type { ReactNode } from "react";

/**
 * Tiny markdown renderer shared by the blog post view and the inline
 * "How to use — the full guide" section on tool pages. Supports only the
 * subset we author: `#`/`##` headings, blank-line paragraphs, `- ` bullet
 * lists, and inline `**bold**`. Anything else is rendered as a plain
 * paragraph so unknown syntax degrades gracefully.
 */
export function renderMarkdown(md: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  const lines = md.split("\n");
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("# ")) {
      blocks.push(<h1 key={key++} className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">{line.slice(2)}</h1>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++} className="mt-8 text-xl font-bold text-foreground">{line.slice(3)}</h2>);
      i++; continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          {items.map((it, idx) => <li key={idx}>{renderInline(it)}</li>)}
        </ul>,
      );
      continue;
    }
    blocks.push(<p key={key++} className="mt-4 leading-relaxed text-muted-foreground">{renderInline(line)}</p>);
    i++;
  }
  return blocks;
}

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}