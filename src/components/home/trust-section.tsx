import { Lock, Zap, ShieldCheck } from "lucide-react";

/** Three-up "why us" panel shown at the bottom of the home page. */
const PILLARS = [
  {
    icon: Lock,
    title: "Private by design",
    body: "Files are processed entirely in your browser and never touch our servers.",
  },
  {
    icon: Zap,
    title: "Fast and free",
    body: "No accounts, no watermarks, no artificial limits. Open a tool and get to work.",
  },
  {
    icon: ShieldCheck,
    title: "Built to be trusted",
    body: "Clear results, honest limitations, and a straightforward privacy policy.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {PILLARS.map((f) => (
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
  );
}