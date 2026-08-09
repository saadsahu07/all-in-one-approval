import { useEffect, useRef } from "react";
import { isAdsEnabled } from "./AdsterraLoader";

const KEY = "d88cdd36cf1fb8ee8983f9fa128868e4";

/** Adsterra 728x90 iframe banner, rendered inside an isolated container. */
export function BannerAd() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isAdsEnabled() || !ref.current) return;
    if (ref.current.childElementCount > 0) return;
    const conf = document.createElement("script");
    conf.type = "text/javascript";
    conf.text = `atOptions = { 'key' : '${KEY}', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };`;
    const s = document.createElement("script");
    s.src = `https://www.highperformanceformat.com/${KEY}/invoke.js`;
    s.async = true;
    ref.current.appendChild(conf);
    ref.current.appendChild(s);
  }, []);
  return (
    <div className="my-6 flex w-full justify-center overflow-hidden">
      <div ref={ref} style={{ width: 728, height: 90, maxWidth: "100%" }} />
    </div>
  );
}