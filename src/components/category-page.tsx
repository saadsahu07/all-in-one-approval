import { Link } from "@tanstack/react-router";
import { getCategory } from "@/lib/tools";

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) return null;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <category.icon className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
          <p className="mt-1 text-muted-foreground">{category.short}</p>
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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