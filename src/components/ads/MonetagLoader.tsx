import { useEffect } from "react";

const SRC = "https://quge5.com/88/tag.min.js";
const ZONE = "268262";

/**
 * Injects the Monetag MultiTag script once, client-side only.
 * Skipped on localhost / preview subdomains so it doesn't fire during dev.
 */
export function MonetagLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".lovableproject.com")) return;
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.setAttribute("data-zone", ZONE);
    s.setAttribute("data-cfasync", "false");
    document.body.appendChild(s);
  }, []);
  return null;
}
