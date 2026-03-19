import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  href,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  if (href) {
    return (
      <a href={href} ref={buttonRef} className={`inline-block ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      ref={buttonRef}
      className={`inline-block ${className}`}
    >
      {children}
    </button>
  );
}
