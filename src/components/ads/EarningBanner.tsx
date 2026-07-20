/**
 * `EarningBanner` — a prominent sponsored CTA card that opens the
 * Adsterra SmartLink offer in a new tab. Use on high-visibility surfaces
 * (homepage, tool pages, blog posts) to complement the smaller inline
 * `SmartLink`. Marked `rel="sponsored nofollow noopener"` per Google's
 * paid-link guidelines.
 */
import { Sparkles, ExternalLink } from "lucide-react";
import { SMART_LINK_URL } from "./SmartLink";

interface EarningBannerProps {
  title?: string;
  description?: string;
  cta?: string;
  className?: string;
}

export function EarningBanner({
  title = "Recommended for our readers",
  description = "Handpicked sponsored offer — free to check, takes 30 seconds.",
  cta = "View offer",
  className,
}: EarningBannerProps) {
  return (
    <aside
      className={
        className ??
        "my-8 overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 via-card to-card p-5 shadow-sm sm:p-6"
      }
      aria-label="Sponsored offer"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                Sponsored
              </span>
              <p className="text-sm font-semibold text-foreground sm:text-base">{title}</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{description}</p>
          </div>
        </div>
        <a
          href={SMART_LINK_URL}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 sm:w-auto"
        >
          {cta}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}