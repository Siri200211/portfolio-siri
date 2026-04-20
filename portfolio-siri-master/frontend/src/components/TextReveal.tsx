import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  scrub?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  scrub = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    const animConfig = {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.02,
      duration: 0.6,
      ease: "expo.out",
    };

    if (scrub) {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 30, rotateX: -60 },
        {
          ...animConfig,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );
    } else {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 30, rotateX: -60 },
        { ...animConfig, delay },
      );
    }
  }, [delay, scrub]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ perspective: "600px" }}
    >
      {children.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ opacity: 0, transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
