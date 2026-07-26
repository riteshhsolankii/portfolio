import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "@/lib/data";
import { slugify } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import PageHero from "@/components/layout/page-hero";
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
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: name },
        ]}
        title={name}
        subtitle={`Articles filed under ${name}.`}
        image={match.image}
      />
      <main id="main" className="section-padding">
        <BlogListing activeCategorySlug={slug} />
      </main>
      <Footer />
    </>
  );
}
