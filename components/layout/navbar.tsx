import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import SearchModal from "@/components/search/search-modal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-[100] flex justify-center px-[15px] pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-[1440px] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
          scrolled ? "bg-background/70 backdrop-blur-xl" : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 font-heading text-lg font-bold text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground text-sm shadow-glow-accent">
            {SITE.initials}
          </span>
          <span className="hidden sm:inline">Ritesh</span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <FiSearch size={17} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="liquid-glass absolute inset-x-[15px] top-20 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </motion.header>
  );
}
