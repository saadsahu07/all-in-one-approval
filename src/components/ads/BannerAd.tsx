import { useEffect, useRef } from "react";

/**
 * Adsterra 728x90 banner. Rendered inside a sandboxed iframe via srcdoc so
 * the provider's `document.write` from invoke.js can't clobber our SPA.
 * Skipped on localhost / lovableproject preview.
 */
export function BannerAd({ className }: { className?: string }) {
  const ref = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".lovableproject.com")) return;
    const iframe = ref.current;
    if (!iframe) return;
    iframe.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden;text-align:center}</style></head><body><script type="text/javascript">atOptions={'key':'d88cdd36cf1fb8ee8983f9fa128868e4','format':'iframe','height':90,'width':728,'params':{}};<\/script><script type="text/javascript" src="https://www.highperformanceformat.com/d88cdd36cf1fb8ee8983f9fa128868e4/invoke.js"><\/script></body></html>`;
  }, []);
  return (
    <div className={className ?? "my-8 flex justify-center"} aria-label="Advertisement">
      <iframe
        ref={ref}
        title="Sponsored banner"
        width={728}
        height={90}
        scrolling="no"
        frameBorder={0}
        style={{ border: 0, maxWidth: "100%" }}
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      />
    </div>
  );
}