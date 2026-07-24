import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { BLOG_POSTS, SITE } from "@/lib/data";
import { slugify } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import PostContent from "@/components/blog/post-content";
import BlogSidebar from "@/components/blog/blog-sidebar";
import Seo from "@/components/seo";
import NotFound from "./NotFound";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const headings = post.content
    .filter((b) => b.type === "heading")
    .map((b) => ({ id: slugify(b.text), text: b.text }));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={articleJsonLd}
      />
      <Navbar />
      <main id="main" className="section-padding pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <Link
            to="/blog"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-accent"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            All articles
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <article className="min-w-0">
              <header className="mb-10 border-b border-border pb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-foreground/50">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar size={14} /> {formatDate(post.date)}
              </span>
              <span className="text-foreground/20">•</span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock size={14} /> {post.readTime}
              </span>
            </div>
          </header>

          {post.image && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )}

              <PostContent blocks={post.content} />
            </article>

            <BlogSidebar post={post} headings={headings} />
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
