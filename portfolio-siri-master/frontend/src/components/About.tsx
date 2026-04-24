import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, Code2, Coffee } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// 3D Tilt Card Component for About Section
function TiltCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className={`about-card glass-hover transition-all duration-500 hover:z-20 hover:scale-[1.02] ${className}`}
    >
      <div
        className="w-full h-full"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scrubs in from below
      gsap.fromTo(
        ".about-header",
        { opacity: 0, y: 150, z: -400, rotateX: 25, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          z: 0,
          rotateX: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      if (contentRef.current) {
        const cards = contentRef.current.querySelectorAll(".about-card");
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              x: index % 2 === 0 ? -500 : 500, 
              y: 60,
              z: -400, 
              scale: 0.85, 
              rotateY: index % 2 === 0 ? -20 : 20,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              scale: 1,
              rotateY: 0,
              ease: "power2.out",
              scrollTrigger: { 
                trigger: card, 
                start: "top 95%",
                end: "top 55%",
                scrub: 1.5,
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const infoCards = [
    {
      icon: MapPin,
      label: "Location",
      value: "Panagoda, Sri Lanka",
      color: "#06b6d4",
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "2+ Years Building",
      color: "#8b5cf6",
    },
    { icon: Code2, label: "Focus", value: "Full Stack Dev", color: "#3b82f6" },
    {
      icon: Coffee,
      label: "Passion",
      value: "Clean Architecture",
      color: "#f59e0b",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="about-header text-center mb-16">
            <p className="text-xs font-mono text-emerald-400/60 tracking-[0.3em] uppercase mb-4">
              Who I Am
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div ref={contentRef} className="grid md:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
            {/* Main bio - spans 2 cols */}
            <TiltCard className="md:col-span-2 p-8 md:p-10 rounded-3xl">
              <div className="space-y-5">
                <p className="text-white/50 leading-relaxed">
                  I'm a{" "}
                  <span className="text-white font-medium">
                    Full Stack Software Engineer
                  </span>{" "}
                  based in Sri Lanka, currently pursuing my BSc in Information
                  Technology at SLIIT. I specialize in building scalable, secure
                  web applications and RESTful APIs that solve real business
                  problems.
                </p>
                <p className="text-white/40 leading-relaxed text-sm">
                  My experience spans enterprise-level production deployments at
                  Sri Lanka Telecom, where I built analytics dashboards and
                  fault management systems used by the Marketing Department. I'm
                  passionate about clean architecture, backend engineering, and
                  data-driven interfaces.
                </p>
                <p className="text-white/40 leading-relaxed text-sm">
                  I work across the full stack — React, Angular, and Next.js
                  frontends; Node.js, .NET Core, and Spring Boot backends; with
                  MongoDB, MySQL, and MS SQL databases. Experienced with CI/CD
                  pipelines, Azure, JIRA, and Agile workflows.
                </p>
              </div>
            </TiltCard>

            {/* Quick info cards */}
            <div className="space-y-3">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <TiltCard key={idx} className="p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${card.color}10` }}
                      >
                        <Icon size={16} style={{ color: card.color }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-white/25 uppercase">
                          {card.label}
                        </p>
                        <p className="text-sm font-medium text-white/70">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            {/* Philosophy card */}
            <TiltCard className="md:col-span-3 p-8 rounded-3xl">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-mono text-white/20 mb-2">
                    PHILOSOPHY
                  </p>
                  <p className="text-lg font-semibold text-white/70 italic">
                    "Write code that solves problems, not code that creates
                    them."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-black text-gradient">14+</p>
                    <p className="text-[10px] text-white/25">Projects</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/[0.06]" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-gradient">6</p>
                    <p className="text-[10px] text-white/25">Languages</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/[0.06]" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-gradient">4</p>
                    <p className="text-[10px] text-white/25">Frameworks</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
