import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/providers/smooth-scroll";
import ScrollManager from "@/components/providers/scroll-manager";
import PageLoader from "@/components/layout/page-loader";
import ScrollProgress from "@/components/layout/scroll-progress";
import CursorFollower from "@/components/effects/cursor-follower";
import Navbar from "@/components/layout/navbar";
import BackToTop from "@/components/layout/back-to-top";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Category from "./pages/Category";
import Author from "./pages/Author";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CursorFollower />
      <Navbar />
      <SmoothScroll>
        <ScrollManager />
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/category/:slug" element={<Category />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/author" element={<Author />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </SmoothScroll>
      <BackToTop />
    </>
  );
}
