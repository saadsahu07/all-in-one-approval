import { useEffect, useState } from "react";

/**
 * Detects ad blockers using two signals:
 *  1. A bait <div> with class names ad-blockers commonly hide.
 *  2. A fetch to a known ads script URL — blockers cancel the request.
 * Shows a dismissible modal asking users to disable their blocker.
 * Dismissal is remembered for 24h via localStorage.
 */
const DISMISS_KEY = "th_adblock_dismissed_at";
const DISMISS_MS = 24 * 60 * 60 * 1000;
const BAIT_URL =
  "https://pl30442653.effectivecpmnetwork.com/39/07/a9/3907a98a21b0019e352e14b84a31bd95.js";

export function AdBlockDetector() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".lovableproject.com")) return;

    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_MS) return;

    let cancelled = false;
    const check = async () => {
      // Signal 1: bait element
      const bait = document.createElement("div");
      bait.className =
        "adsbox ad-placement ad-banner adsbygoogle ad-container pub_300x250 pub_728x90";
      bait.style.cssText =
        "position:absolute;left:-9999px;top:-9999px;height:10px;width:10px;";
      bait.innerHTML = "&nbsp;";
      document.body.appendChild(bait);

      await new Promise((r) => setTimeout(r, 400));

      const baitHidden =
        !bait.offsetParent ||
        bait.offsetHeight === 0 ||
        getComputedStyle(bait).display === "none" ||
        getComputedStyle(bait).visibility === "hidden";
      bait.remove();

      // Signal 2: try to fetch the actual ad script
      let fetchBlocked = false;
      try {
        await fetch(BAIT_URL, { method: "HEAD", mode: "no-cors", cache: "no-store" });
      } catch {
        fetchBlocked = true;
      }

      if (!cancelled && (baitHidden || fetchBlocked)) {
        setBlocked(true);
      }
    };

    const t = setTimeout(check, 1200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  if (!blocked) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    setBlocked(false);
  };

  const reload = () => window.location.reload();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="adblock-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
          🛡️
        </div>
        <h2 id="adblock-title" className="text-xl font-semibold text-foreground">
          Ad blocker detected
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          ToolsHive gives you <strong>120+ tools completely free</strong> — no signup,
          no watermark. Ads are the only way we keep the lights on. Please disable
          your ad blocker for <strong>toolshive.tools</strong> and refresh.
        </p>
        <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-foreground/80">
          <li>Click your ad blocker icon (uBlock, AdBlock, Brave shield, etc.)</li>
          <li>Choose <em>Pause / Disable on this site</em></li>
          <li>Hit refresh below</li>
        </ol>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={reload}
            className="inline-flex flex-1 items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            I disabled it — Refresh
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Continue anyway
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Thank you for supporting free tools 💙
        </p>
      </div>
    </div>
  );
}