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
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll(".char");

    if (scrub) {
      gsap.fromTo(
        chars,
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );
    } else {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, scrub]);

  const words = children.split(" ");

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden`}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className="char inline-block"
              style={{ transformOrigin: "bottom center" }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
