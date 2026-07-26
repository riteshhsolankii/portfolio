import Footer from "@/components/layout/footer";
import PageHero from "@/components/layout/page-hero";
import BlogListing from "@/components/blog/blog-listing";
import Seo from "@/components/seo";

export default function BlogIndex() {
  return (
    <>
      <Seo
        title="Blog"
        description="Articles and notes on web development, AI coding tools, React, Next.js and WordPress by Ritesh Solanki."
        path="/blog"
      />
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
        title="Writing & insights"
        subtitle="Notes on web development, AI tooling, React, Next.js and WordPress."
        image="/blog/cursorvscopilot.jpeg"
      />
      <main id="main" className="section-padding">
        <BlogListing />
      </main>
      <Footer />
    </>
  );
}
