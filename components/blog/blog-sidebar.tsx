import { Link } from "react-router-dom";
import { FiList, FiMail, FiTag, FiArrowUpRight } from "react-icons/fi";
import { BLOG_POSTS, SITE, type BlogPost } from "@/lib/data";
import { lenisRef } from "@/lib/lenis";

type Heading = { id: string; text: string };

export default function BlogSidebar({
  post,
  headings,
}: {
  post: BlogPost;
  headings: Heading[];
}) {
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -100 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
      <Link
        to="/author"
        className="liquid-glass liquid-glass-hover block rounded-2xl p-6"
      >
        <div className="flex items-center gap-4">
          <img
            src="/profile.jpg"
            alt={SITE.name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="font-heading font-semibold text-foreground">{SITE.name}</p>
            <p className="text-sm text-foreground/50">{SITE.roles[0]}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/60">
          Design-obsessed web &amp; React developer building fast,
          conversion-focused websites for startups and global clients.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          View profile <FiArrowUpRight />
        </span>
      </Link>

      {headings.length > 0 && (
        <div className="liquid-glass rounded-2xl p-6">
          <h3 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            <FiList size={14} /> In this article
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 border-l border-border">
            {headings.map((h) => (
              <li key={h.id}>
                <button
                  onClick={() => scrollTo(h.id)}
                  className="-ml-px border-l-2 border-transparent pl-4 text-left text-sm leading-snug text-foreground/60 transition-colors hover:border-accent hover:text-foreground"
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="liquid-glass rounded-2xl p-6">
        <h3 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          <FiTag size={14} /> Tags
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="liquid-glass rounded-2xl p-6">
          <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Related articles
          </h3>
          <ul className="mt-4 flex flex-col gap-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to={`/blog/${r.slug}`} className="group flex items-start gap-3">
                  <span className="text-2xl leading-none">{r.emoji}</span>
                  <span className="text-sm font-medium leading-snug text-foreground/80 transition-colors group-hover:text-accent">
                    {r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
        <h3 className="font-heading text-lg font-bold text-foreground">
          Have a project in mind?
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-foreground/60">
          Let&apos;s build something fast, beautiful and built to convert.
        </p>
        <Link
          to="/#contact"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-heading text-sm font-semibold text-accent-foreground shadow-glow-accent transition hover:brightness-110"
        >
          <FiMail /> Get in touch <FiArrowUpRight />
        </Link>
      </div>
    </aside>
  );
}
