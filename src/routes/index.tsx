import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Lock } from "lucide-react";
import { categories, allTools } from "@/lib/tools";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="text-primary-foreground" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-24">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Every tool you need, in one harbor
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            50 free online tools for text, images, PDFs, code, and calculations.
            No sign-up, no installs — your files are processed right in your browser.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={c.path as "/"}
                className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:bg-primary-foreground/20"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Browse by category</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
          Five collections of carefully built tools, each with ten utilities.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={c.path as "/"}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{c.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.short}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                {c.tools.length} tools →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* All tools */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold">All 50 tools</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allTools.map((t) => (
              <Link
                key={t.path}
                to={t.path as "/"}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-accent"
              >
                <t.icon className="h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <Lock className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 text-lg font-bold">Private by design</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Images and PDFs are processed entirely in your browser — files never leave your device.
            </p>
          </div>
          <div className="text-center">
            <Zap className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 text-lg font-bold">Fast and free</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              No accounts, no watermark on results, no artificial limits. Open a tool and get to work.
            </p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 text-lg font-bold">Built to be trusted</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Clear results, honest limitations, and a straightforward privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
