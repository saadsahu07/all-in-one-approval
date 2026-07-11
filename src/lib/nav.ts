// Lightweight navigation metadata. No icon imports so header/footer don't
// drag the entire lucide-react icon set (via tools.ts) into every route.
export interface NavCategory {
  slug: string;
  path: string;
  name: string;
}

export const navCategories: NavCategory[] = [
  { slug: "text-tools", path: "/text-tools", name: "Text Tools" },
  { slug: "image-tools", path: "/image-tools", name: "Image Tools" },
  { slug: "pdf-tools", path: "/pdf-tools", name: "PDF Tools" },
  { slug: "developer-tools", path: "/developer-tools", name: "Developer Tools" },
  { slug: "calculators", path: "/calculators", name: "Calculators & Converters" },
  { slug: "content-creation", path: "/content-creation", name: "Content Creation" },
];