import { Routes, Route } from "react-router-dom";
import SmoothScroll from "@/components/providers/smooth-scroll";
import ScrollManager from "@/components/providers/scroll-manager";
import PageLoader from "@/components/layout/page-loader";
import CursorFollower from "@/components/effects/cursor-follower";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Category from "./pages/Category";
import Author from "./pages/Author";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <PageLoader />
      <CursorFollower />
      <SmoothScroll>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/category/:slug" element={<Category />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/author" element={<Author />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SmoothScroll>
    </>
  );
}
