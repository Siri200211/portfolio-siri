export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 relative">
      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[1px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-xs font-black bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                    VS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            Designed, Built & Deployed by{" "}
            <span className="text-gray-400">Venuka Sirimanne</span>
          </p>
          <p className="text-gray-700 text-xs font-mono">
            &copy; {new Date().getFullYear()} &mdash; All rights reserved
          </p>

          {/* Tech stack used */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              "React",
              "TypeScript",
              "GSAP",
              "Three.js",
              "Tailwind",
              "Framer Motion",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] text-gray-600 border border-white/5 rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
