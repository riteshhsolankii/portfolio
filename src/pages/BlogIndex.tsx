import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
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
      <Navbar />
      <main id="main" className="section-padding pt-28 md:pt-32">
        <BlogListing
          eyebrow="Blog"
          heading="Writing & insights"
          subtitle="Notes on web development, AI tooling, React, Next.js and WordPress."
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
