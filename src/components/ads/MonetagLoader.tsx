import { useEffect } from "react";

type Tag = { src: string; zone: string; zoneAttr: "data-zone" | "query" };

const TAGS: Tag[] = [
  // MultiTag
  { src: "https://quge5.com/88/tag.min.js", zone: "268262", zoneAttr: "data-zone" },
  // Vignette / Interstitial ("Industrious" tag)
  { src: "https://5gvci.com/act/files/tag.min.js?z=11534379", zone: "11534379", zoneAttr: "query" },
  // In-Page Push
  { src: "https://nap5k.com/tag.min.js", zone: "11534383", zoneAttr: "data-zone" },
];

/**
 * Injects the Monetag MultiTag script once, client-side only.
 * Skipped on localhost / preview subdomains so it doesn't fire during dev.
 */
export function MonetagLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".lovableproject.com")) return;
    for (const tag of TAGS) {
      if (document.querySelector(`script[src="${tag.src}"]`)) continue;
      const s = document.createElement("script");
      s.src = tag.src;
      s.async = true;
      if (tag.zoneAttr === "data-zone") s.dataset.zone = tag.zone;
      s.setAttribute("data-cfasync", "false");
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
