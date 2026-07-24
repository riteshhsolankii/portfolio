import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiSearch,
  FiX,
  FiFileText,
  FiFolder,
  FiUser,
  FiHome,
  FiCornerDownLeft,
} from "react-icons/fi";
import { BLOG_POSTS } from "@/lib/data";

type PageItem = { title: string; to: string; icon: typeof FiHome };

const PAGES: PageItem[] = [
  { title: "Home", to: "/", icon: FiHome },
  { title: "Projects", to: "/projects", icon: FiFolder },
  { title: "Blog", to: "/blog", icon: FiFileText },
  { title: "Author", to: "/author", icon: FiUser },
];

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const term = q.trim().toLowerCase();
  const { posts, pages } = useMemo(() => {
    const posts = BLOG_POSTS.filter(
      (p) =>
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term))
    );
    const pages = PAGES.filter((p) => !term || p.title.toLowerCase().includes(term));
    return { posts, pages };
  }, [term]);

  const empty = posts.length === 0 && pages.length === 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[9000] flex items-start justify-center bg-background/60 px-4 pt-[15vh] backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass w-full max-w-xl overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-5">
              <FiSearch className="shrink-0 text-foreground/40" size={18} />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles and pages..."
                className="w-full bg-transparent py-4 text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="shrink-0 rounded-lg p-1.5 text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2">
              {empty && (
                <p className="px-4 py-10 text-center text-sm text-foreground/50">
                  No results for &ldquo;{q}&rdquo;
                </p>
              )}

              {pages.length > 0 && (
                <div className="mb-1">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    Pages
                  </p>
                  {pages.map(({ title, to, icon: Icon }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/5"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 text-foreground/60 group-hover:text-accent">
                        <Icon size={16} />
                      </span>
                      <span className="flex-1 text-sm text-foreground/80 group-hover:text-foreground">
                        {title}
                      </span>
                      <FiCornerDownLeft
                        className="text-foreground/0 group-hover:text-foreground/40"
                        size={14}
                      />
                    </Link>
                  ))}
                </div>
              )}

              {posts.length > 0 && (
                <div>
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    Articles
                  </p>
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/5"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-lg">
                        {post.emoji}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm text-foreground/80 group-hover:text-foreground">
                          {post.title}
                        </span>
                        <span className="block text-xs text-foreground/40">
                          {post.category}
                        </span>
                      </span>
                      <FiCornerDownLeft
                        className="text-foreground/0 group-hover:text-foreground/40"
                        size={14}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
