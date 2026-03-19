import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["skills", "projects", "experience", "about", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[1px] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow duration-500">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-xs font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                    VS
                  </span>
                </div>
              </div>
            </div>
            <span className="hidden sm:inline text-sm font-bold text-white/80 group-hover:text-white transition-colors">
              Venuka
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                )}
              </a>
            ))}
            <MagneticButton
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-white/[0.05] border border-white/10 hover:border-cyan-500/40 rounded-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              Hire Me
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 animate-slide-down">
          <div className="container mx-auto px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-400 hover:text-cyan-400 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-white/[0.05] border border-white/10 rounded-lg font-semibold transition-all duration-300 text-center text-white hover:border-cyan-500/30 mt-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
