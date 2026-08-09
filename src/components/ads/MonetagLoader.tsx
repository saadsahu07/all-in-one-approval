import { useEffect } from "react";

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

const TAGS: { src: string; zone?: string }[] = [
  // MultiTag
  { src: "https://quge5.com/88/tag.min.js", zone: "268262" },
  // Vignette / Industrious
  { src: "https://5gvci.com/act/files/tag.min.js?z=11534379" },
  // In-Page Push
  { src: "https://nap5k.com/tag.min.js", zone: "11534383" },
];

/** Loads Monetag tags once, client-side, on live domains only. */
export function MonetagLoader() {
  useEffect(() => {
    if (!isAdsEnabled()) return;
    for (const tag of TAGS) {
      if (document.querySelector(`script[src="${tag.src}"]`)) continue;
      const s = document.createElement("script");
      s.src = tag.src;
      s.async = true;
      s.setAttribute("data-cfasync", "false");
      if (tag.zone) s.dataset.zone = tag.zone;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
