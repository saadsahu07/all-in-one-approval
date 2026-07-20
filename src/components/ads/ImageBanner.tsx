/**
 * ImageBanner — clickable PNG banner ads pointing at the SmartLink /
 * file-locker offer. Three variants tuned for different placements:
 * - `leaderboard` (wide, above/below hero)
 * - `rectangle`   (square-ish, sidebar / inline tool page)
 * - `mobile`      (wide, works well on small screens & blog posts)
 */
import { SMART_LINK_URL } from "./SmartLink";

type Variant = "leaderboard" | "rectangle" | "mobile";

const SRC: Record<Variant, { src: string; w: number; h: number; alt: string }> = {
  leaderboard: {
    src: "/ads/banner-leaderboard.png",
    w: 1456,
    h: 512,
    alt: "Unlock premium tools — download now",
  },
  rectangle: {
    src: "/ads/banner-rectangle.png",
    w: 896,
    h: 752,
    alt: "Get free access — unlock 150+ premium tools",
  },
  mobile: {
    src: "/ads/banner-mobile.png",
    w: 1536,
    h: 512,
    alt: "Unlock bonus pack — free PDF + tools bundle",
  },
};

export function ImageBanner({
  variant = "leaderboard",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { src, w, h, alt } = SRC[variant];
  return (
    <a
      href={SMART_LINK_URL}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-label={alt}
      className={
        className ??
        "my-6 block overflow-hidden rounded-xl border border-border shadow-sm transition-transform hover:scale-[1.01]"
      }
    >
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        className="h-auto w-full"
      />
      <span className="sr-only">Sponsored</span>
    </a>
  );
}