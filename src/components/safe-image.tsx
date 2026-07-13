import type { ImgHTMLAttributes } from "react";

/** Drop-in <img> with lazy loading, async decoding, and required dimensions
 *  to eliminate CLS. Prefer this over a raw <img> in tool pages. */
export function SafeImage(props: ImgHTMLAttributes<HTMLImageElement> & { width: number; height: number; alt: string }) {
  const { loading, decoding, ...rest } = props;
  return <img loading={loading ?? "lazy"} decoding={decoding ?? "async"} {...rest} />;
}