import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiArrowUpRight, FiClock, FiLayers } from "react-icons/fi";
import { BLOG_POSTS } from "@/lib/data";
import { slugify, cn } from "@/lib/utils";
import Reveal from "@/components/effects/reveal";

type Sort = "newest" | "oldest" | "az";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogListing({
  activeCategorySlug = null,
}: {
  activeCategorySlug?: string | null;
}) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("newest");

  const categories = useMemo(() => {
    const map = new Map<string, { name: string; slug: string; count: number }>();
    for (const p of BLOG_POSTS) {
      const slug = slugify(p.category);
      const cur = map.get(slug);
      if (cur) cur.count++;
      else map.set(slug, { name: p.category, slug, count: 1 });
    }
    return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const posts = useMemo(() => {
    let list = BLOG_POSTS.slice();
    if (activeCategorySlug) {
      list = list.filter((p) => slugify(p.category) === activeCategorySlug);
    }
    const term = q.trim().toLowerCase();
    if (term) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.excerpt.toLowerCase().includes(term) ||
          p.tags.some((t) => t.toLowerCase().includes(term))
      );
    }
    list.sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return sort === "newest" ? -diff : diff;
    });
    return list;
  }, [q, sort, activeCategorySlug]);

  const catLinkClass = (active: boolean) =>
    cn(
      "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
      active
        ? "bg-accent/15 font-medium text-accent"
        : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
    );

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        <aside className="order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
          <div className="liquid-glass rounded-2xl p-5">
            <h2 className="flex items-center gap-2 px-1 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              <FiLayers size={14} /> Categories
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              <li>
                <Link to="/blog" className={catLinkClass(!activeCategorySlug)}>
                  <span>All posts</span>
                  <span className="text-xs text-foreground/40">
                    {BLOG_POSTS.length}
                  </span>
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/blog/category/${c.slug}`}
                    className={catLinkClass(activeCategorySlug === c.slug)}
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-foreground/40">{c.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="order-1 lg:order-2">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-xs">
              <FiSearch
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40"
                size={16}
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent/50 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-foreground/50">Sort</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-accent/50 focus:outline-none"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="az">A → Z</option>
              </select>
            </div>
          </div>

          <p className="mb-5 text-sm text-foreground/50">
            {posts.length} article{posts.length === 1 ? "" : "s"}
          </p>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-14 text-center text-foreground/50">
              No articles found. Try a different search or category.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-glass backdrop-blur-xl transition-all duration-300 will-change-transform hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow active:scale-[0.98]"
                  >
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-accent/15 via-transparent to-accent/5">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <span className="text-5xl transition-transform duration-300 group-hover:scale-110">
                          {post.emoji}
                        </span>
                      )}
                      <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/50">
                        <span>{formatDate(post.date)}</span>
                        <span className="text-foreground/20">•</span>
                        <span className="inline-flex items-center gap-1">
                          <FiClock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/60">
                        {post.excerpt}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent">
                        Read article <FiArrowUpRight />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
