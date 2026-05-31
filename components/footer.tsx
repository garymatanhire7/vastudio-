"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo & Copyright */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-mono text-sm font-medium tracking-widest text-foreground uppercase"
            >
              Vector<span className="text-muted-foreground">/</span>Archive
            </a>
            <p className="mt-2 flex items-center justify-center gap-1 font-mono text-xs text-muted-foreground sm:justify-start">
              Warsaw, PL
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Home", "About", "Portfolio", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vector Archive / Gary Matanhire
          </p>
        </div>
      </div>
    </footer>
  );
}
