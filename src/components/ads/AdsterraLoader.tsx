import { useEffect } from "react";

/**
 * Injects Adsterra Popunder + Social Bar scripts once, client-side only.
 * Skipped on localhost / preview subdomains so it doesn't fire during dev.
 */
const SCRIPTS = [
  "https://pl30442652.effectivecpmnetwork.com/51/8c/4a/518c4a282eb8d12daded388e806f80e5.js", // popunder
  "https://pl30442653.effectivecpmnetwork.com/39/07/a9/3907a98a21b0019e352e14b84a31bd95.js", // social bar
];

export function AdsterraLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    // Skip local dev only; run on lovable.app + custom domain (toolshive.tools)
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".lovableproject.com")) {
      return;
    }
    for (const src of SCRIPTS) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}