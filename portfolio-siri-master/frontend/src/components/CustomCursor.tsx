import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleHoverEnter = () => setIsHovering(true);
    const handleHoverLeave = () => setIsHovering(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, [role='button'], .glass-hover",
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverEnter);
        el.addEventListener("mouseleave", handleHoverLeave);
      });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        scale: isHovering ? 1.8 : 1,
        opacity: isHovering ? 0.6 : 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: isHovering ? 0.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovering]);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white z-[10000] pointer-events-none mix-blend-difference"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/30 z-[10000] pointer-events-none mix-blend-difference"
      />
    </>
  );
}
