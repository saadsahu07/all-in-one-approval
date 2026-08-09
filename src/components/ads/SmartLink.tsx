const SMART_LINK = "https://www.effectivecpmnetwork.com/sysif6sb?key=498d0a6ab0115d8ac8d8a93a6200d8cb";

/** Sponsored smart-link CTA. */
export function SmartLink({ label = "Sponsored: recommended offer for our readers" }: { label?: string }) {
  return (
    <div className="my-6 text-center">
      <a
        href={SMART_LINK}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
      >
        {label}
      </a>
    </div>
  );
}