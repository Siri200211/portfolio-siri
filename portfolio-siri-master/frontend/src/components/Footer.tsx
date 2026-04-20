import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-white/[0.03]">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Logo + credit */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <span className="text-[10px] font-black text-white">VS</span>
              </div>
              <div>
                <p className="text-sm text-white/60 font-semibold">
                  Venuka Sirimanne
                </p>
                <p className="text-[10px] text-white/20 font-mono">
                  Full Stack Software Engineer
                </p>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-xl glass-hover hover:border-cyan-500/20 transition-all duration-500"
            >
              <span className="text-[11px] font-mono text-white/30 group-hover:text-white/50 transition-colors uppercase tracking-wider">
                Back to top
              </span>
              <ArrowUp
                size={14}
                className="text-white/30 group-hover:text-cyan-400 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.04] mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/20 font-mono flex items-center gap-1.5">
              Built with <Heart size={10} className="text-rose-400/50" /> using
              React, Three.js & Framer Motion
            </p>
            <p className="text-[11px] text-white/15 font-mono">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
