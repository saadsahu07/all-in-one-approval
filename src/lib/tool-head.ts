import { seoTitles } from "./seo/titles";
import { getCategory } from "./tools";
import ogCover from "@/assets/og-cover.jpg";

const SITE = "https://toolshive.tools";
const OG_IMAGE = `${SITE}${ogCover}`;

/**
 * Build the TanStack `head()` object for a tool page.
 * Falls back to a generic title if no SEO entry is registered.
 */
export function toolHead(categorySlug: string, toolSlug: string) {
  const category = getCategory(categorySlug);
  const tool = category?.tools.find((t) => t.slug === toolSlug);
  const path = tool?.path ?? `/${categorySlug}/${toolSlug}`;
  const url = `${SITE}${path}`;
  const seo = seoTitles[path];
  const title = seo?.title ?? `${tool?.name ?? toolSlug} | ToolsHive`;
  const description = seo?.metaDescription ?? tool?.short ?? "Free online tool from ToolsHive.";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}