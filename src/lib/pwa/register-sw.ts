// Guarded PWA service worker registration.
// Only registers in production on the real published origin.

const SW_URL = "/sw.js";

function isPreviewOrDevHost(hostname: string): boolean {
  return (
    hostname.startsWith("id-preview--") ||
    hostname.startsWith("preview--") ||
    hostname === "lovableproject.com" ||
    hostname.endsWith(".lovableproject.com") ||
    hostname === "lovableproject-dev.com" ||
    hostname.endsWith(".lovableproject-dev.com") ||
    hostname === "beta.lovable.dev" ||
    hostname.endsWith(".beta.lovable.dev")
  );
}

async function unregisterMatching(): Promise<void> {
  if (!("serviceWorker" in navigator)) return;
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      regs
        .filter((r) => {
          const url =
            r.active?.scriptURL || r.waiting?.scriptURL || r.installing?.scriptURL || "";
          return url.endsWith(SW_URL);
        })
        .map((r) => r.unregister()),
    );
  } catch {
    // ignore
  }
}

export function registerPWA(): void {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  const inIframe = window.self !== window.top;
  const url = new URL(window.location.href);
  const swOff = url.searchParams.get("sw") === "off";
  const refused =
    !import.meta.env.PROD ||
    inIframe ||
    swOff ||
    isPreviewOrDevHost(window.location.hostname);

  if (refused) {
    void unregisterMatching();
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(SW_URL, { scope: "/" }).catch(() => {
      // ignore registration errors silently
    });
  });
}