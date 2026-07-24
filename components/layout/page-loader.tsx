import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/data";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-7"
          >
            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute inset-0 rounded-2xl border-2 border-accent/25" />
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-accent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
              />
              <span className="font-heading text-xl font-bold text-accent">
                {SITE.initials}
              </span>
            </div>
            <div className="h-0.5 w-36 overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-accent"
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
