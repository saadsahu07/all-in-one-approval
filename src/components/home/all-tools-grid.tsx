import { allTools } from "@/lib/tools";
import { ToolLinkCard } from "@/components/tool/tool-link-card";

/** Flat, scannable grid listing every tool in the library. */
export function AllToolsGrid() {
  return (
    <section className="border-t border-border bg-navy-deep/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">02 — The full library</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">All 55 tools</h2>
          </div>
          <p className="text-sm text-muted-foreground">Fast, private, and free forever.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {allTools.map((t) => (
            <ToolLinkCard key={t.path} tool={t} variant="detailed" />
          ))}
        </div>
      </div>
    </section>
  );
}