import { useEffect, useRef, useState } from "react";

const SCRIPT_SRC = "https://saveapp.store/cp/js/rr68k";
const SCRIPT_ID = "ogads-captcha-locker";

function isProduction() {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname.toLowerCase().replace(/^www\./, "");
  return hostname === "toolshive.tools";
}

function ensureScript() {
  if (typeof document === "undefined") return;
  if (document.getElementById(SCRIPT_ID)) return;
  const s = document.createElement("script");
  s.id = SCRIPT_ID;
  s.src = SCRIPT_SRC;
  s.async = true;
  document.body.appendChild(s);
}

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

export function CaptchaLocker({
  title = "Unlock Premium Features",
  description = "Complete a quick human verification to unlock bonus tools, faster downloads, and premium templates.",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isProduction()) return;
    setIsActive(true);
    ensureScript();
  }, []);

  if (!isActive) {
    return (
      <div
        className={`rounded-2xl border border-dashed border-border/70 bg-muted/30 p-6 text-center text-sm text-muted-foreground ${className}`}
      >
        <span className="sr-only">Premium verification is loading</span>
      </div>
    );
  }

  return (
    <section
      ref={ref}
      className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-6 shadow-sm sm:p-8 ${className}`}
      aria-label="Human verification to unlock premium features"
    >
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <span aria-hidden>🔓</span> Premium Unlock
        </div>
        <h3 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-5 flex justify-center">
          <div data-captcha-enable="true" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Verify you are human to continue. Free forever — no signup needed.
        </p>
      </div>
    </section>
  );
}

export default CaptchaLocker;