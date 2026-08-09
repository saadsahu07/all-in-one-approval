import { useEffect } from "react";

const SCRIPTS = [
  // Social Bar
  "https://pl30442653.effectivecpmnetwork.com/39/07/a9/3907a98a21b0019e352e14b84a31bd95.js",
  // Popunder
  "https://pl30442652.effectivecpmnetwork.com/51/8c/4a/518c4a282eb8d12daded388e806f80e5.js",
];

export function isAdsEnabled() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return !(
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".lovableproject.com") ||
    host.includes("id-preview")
  );
}

/** Loads Adsterra Social Bar + Popunder once, client-side, on live domains only. */
export function AdsterraLoader() {
  useEffect(() => {
    if (!isAdsEnabled()) return;
    for (const src of SCRIPTS) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.setAttribute("data-cfasync", "false");
      document.body.appendChild(s);
    }
  }, []);
  return null;
}