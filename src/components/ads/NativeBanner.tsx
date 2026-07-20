import { useEffect, useRef } from "react";

const SRC = "https://pl30442654.effectivecpmnetwork.com/90c1ca47d555c0535e16b95cc57b0383/invoke.js";
const CONTAINER_ID = "container-90c1ca47d555c0535e16b95cc57b0383";

/**
 * Adsterra Native Banner. Renders an empty container and injects the
 * provider script once on mount. Skipped in local dev.
 */
export function NativeBanner({ className }: { className?: string }) {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".lovableproject.com")) return;
    injected.current = true;
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    document.body.appendChild(s);
  }, []);
  return (
    <div className={className ?? "my-10"} aria-label="Advertisement">
      <div id={CONTAINER_ID} />
    </div>
  );
}