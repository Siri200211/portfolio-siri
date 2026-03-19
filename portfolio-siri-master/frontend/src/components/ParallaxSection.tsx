import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const yValue = direction === "up" ? -100 * speed : 100 * speed;

    gsap.to(section, {
      y: yValue,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
