import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/providers/smooth-scroll";
import ScrollManager from "@/components/providers/scroll-manager";
import PageLoader from "@/components/layout/page-loader";
import ScrollProgress from "@/components/layout/scroll-progress";
import CursorFollower from "@/components/effects/cursor-follower";
import Navbar from "@/components/layout/navbar";
import BackToTop from "@/components/layout/back-to-top";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Category = lazy(() => import("./pages/Category"));
const Author = lazy(() => import("./pages/Author"));
const Experience = lazy(() => import("./pages/Experience"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense fallback={null}>
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
          </Suspense>
        </motion.div>
      </SmoothScroll>
      <BackToTop />
    </>
  );
}
