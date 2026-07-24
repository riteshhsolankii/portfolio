import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Seo from "@/components/seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <Navbar />
      <main
        id="main"
        className="flex min-h-screen flex-col items-center justify-center px-[15px] text-center"
      >
        <p className="font-heading text-7xl font-extrabold text-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-3 max-w-md text-foreground/60">
          The page you&apos;re looking for may have been moved or never existed.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-heading text-sm font-semibold text-accent-foreground shadow-glow-accent transition hover:brightness-110"
        >
          <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
