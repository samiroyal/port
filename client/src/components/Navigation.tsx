import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Philosophy" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Proof" },
  { href: "/content", label: "Signal" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300",
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-white/5" 
            : "bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display font-bold text-lg">
              JSB
            </div>
            <span className="font-mono text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
              WEB3X
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === link.href ? "text-white" : "text-muted-foreground"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-px bg-primary"
                  />
                )}
              </Link>
            ))}
            <a 
              href="https://x.com/JSB_Web3X" 
              target="_blank" 
              className="ml-4 px-4 py-2 text-xs font-mono border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-colors flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              CONNECT <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-display font-light",
                    location === link.href ? "text-primary" : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <div className="flex flex-col gap-4">
                <p className="text-xs font-mono text-muted-foreground">CONNECT</p>
                <div className="flex gap-4 text-white">
                  <a href="#" className="hover:text-primary">X / TWITTER</a>
                  <a href="#" className="hover:text-primary">TELEGRAM</a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
