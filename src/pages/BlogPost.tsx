import { useParams } from "react-router-dom";
import { FiClock, FiCalendar } from "react-icons/fi";
import { BLOG_POSTS, SITE } from "@/lib/data";
import { slugify } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import PageHero from "@/components/layout/page-hero";
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
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: post.title },
        ]}
        title={post.title}
        image={post.image}
      >
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-foreground/60">
          <span className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs font-medium text-accent">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="text-foreground/20">•</span>
          <span className="inline-flex items-center gap-1.5">
            <FiClock size={14} /> {post.readTime}
          </span>
        </div>
      </PageHero>
      <main id="main" className="section-padding">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <article className="min-w-0">
              <PostContent blocks={post.content} />
            </article>

            <BlogSidebar post={post} headings={headings} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
