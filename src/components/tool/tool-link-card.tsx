import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Tool } from "@/lib/tools";

/**
 * Compact link card used to preview a single tool.
 *
 * Two visual variants:
 *  - "compact"  — icon + title only (favorites / recents lists)
 *  - "detailed" — icon + title + short description + hover chevron (all-tools grid)
 */
export function ToolLinkCard({
  tool,
  variant = "compact",
}: {
  tool: Tool;
  variant?: "compact" | "detailed";
}) {
  const Icon = tool.icon;
  if (variant === "detailed") {
    return (
      <Link
        to={tool.path as "/"}
        className="group flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3.5 transition-all hover:border-primary/50 hover:bg-card"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/40 text-accent transition-colors group-hover:text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{tool.name}</p>
          <p className="truncate text-xs text-muted-foreground">{tool.short}</p>
        </div>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
      </Link>
    );
  }
  return (
    <Link
      to={tool.path as "/"}
      className="group flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 transition-all hover:border-accent hover:bg-card"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/40 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1 truncate text-sm font-medium">{tool.name}</span>
    </Link>
  );
}