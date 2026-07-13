import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Lock, Sparkles, ArrowRight, Star, Clock } from "lucide-react";
import { categories, allTools } from "@/lib/tools";
import { useFavorites, useRecent } from "@/lib/user-prefs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToolsHive — 55 Free Online Tools for Text, Images, PDFs & Code" },
      { name: "description", content: "55 free online tools for text, images, PDFs, developers, calculators, and content creation. Fast, private, and processed in your browser." },
      { property: "og:title", content: "ToolsHive — 55 Free Online Tools" },
      { property: "og:description", content: "55 free online tools for text, images, PDFs, developers, calculators, and content creation. Fast, private, and processed in your browser." },
      { property: "og:url", content: "https://all-in-one-approval.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  const { favorites } = useFavorites();
  const recent = useRecent();
  const favTools = favorites
    .map((p) => allTools.find((t) => t.path === p))
    .filter((t): t is (typeof allTools)[number] => !!t);
  const recentTools = recent
    .map((p) => allTools.find((t) => t.path === p))
    .filter((t): t is (typeof allTools)[number] => !!t && !favorites.includes(t.path))
    .slice(0, 4);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--hero-gradient)" }}>
        {/* grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "var(--grid-fade)",
            WebkitMaskImage: "var(--grid-fade)",
          }}
        />
        {/* orb glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.22 275 / 0.35), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-6 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>AI-assisted · 55 tools · 100% in-browser</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-[clamp(2rem,9vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            The intelligent toolkit for <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              modern workflows
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fifty precision-built utilities for text, images, PDFs, code, and calculations.
            No accounts. No uploads. Everything runs privately in your browser.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={categories[0].path as "/"}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Explore tools
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Read the blog
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground/70 sm:text-xs">
            <span>Text</span><span className="opacity-40">·</span>
            <span>Image</span><span className="opacity-40">·</span>
            <span>PDF</span><span className="opacity-40">·</span>
            <span>Developer</span><span className="opacity-40">·</span>
            <span>Calculators</span>
          </div>
        </div>
      </section>

      {/* Personalized: favorites + recent */}
      {(favTools.length > 0 || recentTools.length > 0) && (
        <section className="border-b border-border bg-navy-deep/40">
          <div className="mx-auto max-w-6xl px-4 py-12">
            {favTools.length > 0 && (
              <div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Your favorites</h2>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {favTools.map((t) => (
                    <Link
                      key={t.path}
                      to={t.path as "/"}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 transition-all hover:border-accent hover:bg-card"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/40 text-accent">
                        <t.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {recentTools.length > 0 && (
              <div className={favTools.length > 0 ? "mt-8" : ""}>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Recently used</h2>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {recentTools.map((t) => (
                    <Link
                      key={t.path}
                      to={t.path as "/"}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 transition-all hover:border-accent hover:bg-card"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/40 text-accent">
                        <t.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">01 — Categories</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Browse by category</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Five focused collections. Ten precision-built utilities per category.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={c.path as "/"}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/60"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 30% 0%, oklch(0.62 0.22 275 / 0.15), transparent 60%)" }}
              />
              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-accent transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-accent">
                  {c.tools.length} tools
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All tools */}
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
              <Link
                key={t.path}
                to={t.path as "/"}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3.5 transition-all hover:border-primary/50 hover:bg-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/40 text-accent transition-colors group-hover:text-primary">
                  <t.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.short}</p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {[
              { icon: Lock, title: "Private by design", body: "Files are processed entirely in your browser and never touch our servers." },
              { icon: Zap, title: "Fast and free", body: "No accounts, no watermarks, no artificial limits. Open a tool and get to work." },
              { icon: ShieldCheck, title: "Built to be trusted", body: "Clear results, honest limitations, and a straightforward privacy policy." },
            ].map((f) => (
              <div key={f.title} className="bg-card p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-accent">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
