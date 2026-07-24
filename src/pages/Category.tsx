import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "@/lib/data";
import { slugify } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";
import BlogListing from "@/components/blog/blog-listing";
import Seo from "@/components/seo";
import NotFound from "./NotFound";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const match = BLOG_POSTS.find((p) => slugify(p.category) === slug);

  if (!match) return <NotFound />;

  const name = match.category;

  return (
    <>
      <Seo
        title={`${name} articles`}
        description={`Articles in the ${name} category by Ritesh Solanki.`}
        path={`/blog/category/${slug}`}
      />
      <Navbar />
      <main id="main" className="section-padding pt-28 md:pt-32">
        <BlogListing
          activeCategorySlug={slug}
          eyebrow="Category"
          heading={name}
          subtitle={`Articles filed under ${name}.`}
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
