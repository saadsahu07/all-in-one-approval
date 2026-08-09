import { useEffect, useRef } from "react";
import { isAdsEnabled } from "./AdsterraLoader";

const KEY = "90c1ca47d555c0535e16b95cc57b0383";

/** Adsterra Native Banner unit. */
export function NativeBanner() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isAdsEnabled() || !ref.current) return;
    const src = `https://pl30442654.effectivecpmnetwork.com/${KEY}/invoke.js`;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    ref.current.appendChild(s);
  }, []);
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6" ref={ref}>
      <div id={`container-${KEY}`} />
    </div>
  );
}