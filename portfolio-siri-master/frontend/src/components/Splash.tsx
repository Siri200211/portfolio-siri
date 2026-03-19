import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic line animations
    if (linesRef.current) {
      const lines = linesRef.current.querySelectorAll(".scan-line");
      gsap.fromTo(
        lines,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power4.out",
          delay: 0.2,
        },
      );
    }

    // Glitch effect on text
    if (glitchRef.current) {
      const tl = gsap.timeline({ repeat: 2, delay: 1.5 });
      tl.to(glitchRef.current, { x: -3, duration: 0.05 })
        .to(glitchRef.current, { x: 3, duration: 0.05 })
        .to(glitchRef.current, { x: -1, duration: 0.05 })
        .to(glitchRef.current, { x: 0, duration: 0.05 });
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        // Variable speed for dramatic effect
        const increment = prev < 30 ? 3 : prev < 70 ? 2 : prev < 90 ? 1 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 4s linear infinite",
          }}
        />
      </div>

      {/* Scan lines */}
      <div ref={linesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{ top: `${20 + i * 15}%`, transformOrigin: "left" }}
          />
        ))}
      </div>

      {/* Rotating outer ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 translate-y-1/2" />
      </motion.div>

      {/* Inner rotating ring */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-purple-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-cyan-400 rounded-full translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        <motion.div
          ref={glitchRef}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              VS
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-sm md:text-base text-cyan-400/80 font-mono tracking-[0.3em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Initializing Portfolio
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-64 md:w-80 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            {/* Glow effect on progress tip */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-md"
              style={{
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-xs font-mono text-slate-500">
              LOADING ASSETS
            </span>
            <span className="text-xs font-mono text-cyan-400">{progress}%</span>
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30" />
    </motion.div>
  );
}
