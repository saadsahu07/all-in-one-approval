import { Link } from "@tanstack/react-router";
import { getCategory } from "@/lib/tools";

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) return null;
  const SITE = "https://all-in-one-approval.lovable.app";
  const catUrl = `${SITE}${category.path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: category.name, item: catUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.name,
      description: category.short,
      url: catUrl,
      hasPart: category.tools.map((t) => ({
        "@type": "SoftwareApplication",
        name: t.name,
        description: t.short,
        url: `${SITE}${t.path}`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any (web browser)",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      })),
    },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:h-12 sm:w-12">
          <category.icon className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{category.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{category.short}</p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.tools.map((t) => (
          <Link
            key={t.path}
            to={t.path as "/"}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <t.icon className="h-6 w-6 text-accent" />
            <h2 className="mt-3 font-serif text-base font-bold">{t.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.short}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}