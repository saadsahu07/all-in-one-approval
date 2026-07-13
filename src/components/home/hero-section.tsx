import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { categories } from "@/lib/tools";

/** Landing hero: gradient backdrop, headline, primary CTAs. */
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{ background: "var(--hero-gradient)" }}
    >
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
          Fifty-five precision-built utilities for text, images, PDFs, code, and calculations.
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
  );
}