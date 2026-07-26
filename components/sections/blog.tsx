import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiClock } from "react-icons/fi";
import { BLOG_POSTS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/effects/reveal";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="section-padding relative">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Blog"
          title="Writing & insights"
          subtitle="Notes on web development, AI tooling and building for the web."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
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

        <Reveal className="mt-10 flex justify-center">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 font-heading text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
          >
            View all articles
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
