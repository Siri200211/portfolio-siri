import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = ["skills", "projects", "experience", "about", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 2.5 },
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "py-3" : "py-5"
      }`}
      style={{ opacity: 0 }}
    >
      <div className="container mx-auto px-6">
        <div
          className={`relative flex items-center justify-between max-w-4xl mx-auto px-6 py-3 rounded-2xl transition-all duration-700 ${
            isScrolled
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="relative group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow duration-500">
              <span className="text-[10px] font-black text-white">VS</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 relative">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    ref={indicatorRef}
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 text-[12px] font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow duration-500"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6"
          >
            <div className="glass rounded-2xl p-4 space-y-1 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 mt-2 text-sm text-center font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
