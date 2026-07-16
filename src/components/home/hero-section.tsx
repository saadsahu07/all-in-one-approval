import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";

/** Landing hero: clean, simple, light. Clear headline + two CTAs. */
export function HeroSection() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          60 free tools · no signup
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Simple tools for everyday work
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Text, image, PDF, developer and calculator tools — all in one place. Free, fast, and easy to use.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            hash="all-tools"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <Search className="h-4 w-4" />
            Browse all tools
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}