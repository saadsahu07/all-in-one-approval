import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/tools";

/**
 * Bento grid of tool categories.
 * Layout: hero tile (first, 2×2) + medium tiles + wide CTA row (last).
 * Collapses to a single column on mobile, 2 cols on md, 4 cols on lg.
 */
export function CategoryBento() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">01 — Categories</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Browse by category</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Six focused collections. Purpose-built utilities in every one.
        </p>
      </div>
      <ul className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => {
          const isHero = i === 0;
          const isWide = i === categories.length - 1;
          const spanClass = isHero
            ? "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
            : isWide
              ? "md:col-span-2 lg:col-span-4"
              : "";
          return (
            <li key={c.slug} className={spanClass}>
              <Link
                to={c.path as "/"}
                className={`group relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/70 hover:-translate-y-0.5 focus-visible:border-primary ${
                  isHero ? "sm:p-8" : ""
                }`}
                style={{ boxShadow: "var(--shadow-card)" }}
                aria-label={`${c.name} — ${c.tools.length} tools`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 25% 0%, oklch(0.78 0.16 165 / 0.18), transparent 60%)",
                  }}
                />
                <div className="relative flex flex-1 flex-col">
                  <span
                    className={`flex shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/60 group-hover:text-accent ${
                      isHero ? "h-14 w-14" : "h-11 w-11"
                    }`}
                  >
                    <c.icon className={isHero ? "h-7 w-7" : "h-5 w-5"} />
                  </span>
                  <h3
                    className={`mt-5 font-semibold tracking-tight ${
                      isHero ? "text-2xl sm:text-3xl" : "text-lg"
                    }`}
                  >
                    {c.name}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-muted-foreground ${
                      isHero ? "text-base max-w-md" : "text-sm"
                    }`}
                  >
                    {c.short}
                  </p>
                  <p className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors group-hover:text-accent">
                    {c.tools.length} tools
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}