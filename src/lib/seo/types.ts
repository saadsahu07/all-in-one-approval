export interface Faq { q: string; a: string }
export interface ToolSeo {
  title: string;
  metaDescription: string;
  keyword: string;
  intro: string[];
  features: string[];
  faqs: Faq[];
}
