import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostMeta, postsMeta } from "@/lib/blog-meta";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const meta = getPostMeta(params.slug);
    if (!meta) throw notFound();
    // Content chunk is lazy-split so the blog list doesn't ship it.
    const { postContent } = await import("@/lib/blog-content");
    const content = postContent[params.slug];
    if (!content) throw notFound();
    return { post: { ...meta, content } };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Post not found — ToolsHive Blog" }] };
    const url = `/blog/${params.slug}`;
    const fullTitle = `${p.title} — ToolsHive Blog`;
    return {
      meta: [
        { title: fullTitle },
        { name: "description", content: p.excerpt },
        { name: "keywords", content: `${p.category}, ${p.title}, free online tools, ToolsHive` },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "ToolsHive" },
        { property: "article:section", content: p.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: p.excerpt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            articleSection: p.category,
            timeRequired: `PT${p.readingMinutes}M`,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "ToolsHive" },
            publisher: { "@type": "Organization", name: "ToolsHive" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="font-serif text-3xl font-bold">Post not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary underline">Back to blog</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="font-serif text-3xl font-bold">Something went wrong</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary underline">Back to blog</Link>
    </div>
  ),
  component: BlogPost,
});

function renderContent(md: string) {
  const blocks: React.ReactNode[] = [];
  const lines = md.split("\n");
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("# ")) {
      blocks.push(<h1 key={key++} className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">{line.slice(2)}</h1>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++} className="mt-10 font-serif text-2xl font-bold">{line.slice(3)}</h2>);
      i++; continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          {items.map((it, idx) => <li key={idx}>{renderInline(it)}</li>)}
        </ul>
      );
      continue;
    }
    blocks.push(<p key={key++} className="mt-4 leading-relaxed text-muted-foreground">{renderInline(line)}</p>);
    i++;
  }
  return blocks;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = postsMeta
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">← All posts</Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-primary">{post.category}</p>
      {renderContent(post.content)}
      <p className="mt-4 text-sm text-muted-foreground">{post.readingMinutes} min read</p>
      <div className="my-10 rounded-lg border border-border bg-secondary/40 p-6">
        <h3 className="font-serif text-xl font-bold">Try the tool now</h3>
        <p className="mt-2 text-sm text-muted-foreground">Open {post.title.replace(": The Complete Guide", "")} and put this guide into practice.</p>
        <Link
          to={post.toolPath as "/"}
          className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Open the tool →
        </Link>
      </div>
      {related.length > 0 && (
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-serif text-xl font-bold">More {post.category} guides</h2>
          <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="rounded-lg border border-border p-4 hover:border-primary/50 hover:bg-secondary/40">
                <h3 className="font-serif text-base font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}