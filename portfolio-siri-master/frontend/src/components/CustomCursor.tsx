import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnterLink = () => setIsHovering(true);
    const handleMouseLeaveLink = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .cursor-hover',
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    // Use MutationObserver for dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .cursor-hover',
      );
      newElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterLink);
        el.addEventListener("mouseleave", handleMouseLeaveLink);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink);
        el.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-difference ${
          isHovering ? "scale-150" : isClicking ? "scale-75" : "scale-100"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-cyan-400 transition-all duration-300 ${
            isHovering ? "bg-cyan-400/20 border-white" : ""
          } ${isClicking ? "bg-cyan-400/40" : ""}`}
        />
      </div>
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`w-2 h-2 rounded-full bg-white transition-all duration-200 ${
            isHovering ? "scale-0" : "scale-100"
          }`}
        />
      </div>
    </>
  );
}
