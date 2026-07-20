/**
 * Adsterra Smart Direct Link. Use as a subtle sponsored CTA anywhere text
 * links appear (footer, blog, tool pages). Opens in a new tab and marks
 * the link as sponsored + nofollow per Google's guidelines.
 */
export const SMART_LINK_URL =
  "https://www.effectivecpmnetwork.com/sysif6sb?key=498d0a6ab0115d8ac8d8a93a6200d8cb";

export function SmartLink({
  children = "Sponsored offer — check it out",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={SMART_LINK_URL}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
      }
      aria-label="Sponsored link"
    >
      <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-accent">Ad</span>
      {children}
    </a>
  );
}