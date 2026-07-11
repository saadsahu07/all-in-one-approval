import { getToolSeo } from "./tool-seo";
import { getCategory } from "./tools";

const SITE = "https://all-in-one-approval.lovable.app";

/**
 * Build the TanStack `head()` object for a tool page.
 * Falls back to a generic title if no SEO entry is registered.
 */
export function toolHead(categorySlug: string, toolSlug: string) {
  const category = getCategory(categorySlug);
  const tool = category?.tools.find((t) => t.slug === toolSlug);
  const path = tool?.path ?? `/${categorySlug}/${toolSlug}`;
  const url = `${SITE}${path}`;
  const seo = getToolSeo(path);

  const title = seo?.title ?? `${tool?.name ?? toolSlug} | ToolHive`;
  const description = seo?.metaDescription ?? tool?.short ?? "Free online tool from ToolHive.";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}