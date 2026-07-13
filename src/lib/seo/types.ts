export interface Faq { q: string; a: string }
export interface ToolSeo {
  title: string;
  metaDescription: string;
  keyword: string;
  intro: string[];
  features: string[];
  faqs: Faq[];
  /** Optional long-form (~500-word) how-to guide rendered inline on the
   *  tool page, below the tool UI and above the FAQ accordion. Supports a
   *  tiny markdown subset: `##` H2, blank-line paragraphs, `- ` bullets,
   *  and `**bold**` inline. */
  guide?: string;
}
