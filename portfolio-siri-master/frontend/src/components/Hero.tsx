import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Database,
  Zap,
  Shield,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  const techStack = [
    {
      icon: Code2,
      label: "React",
      color: "text-cyan-400",
      bg: "from-cyan-500/20 to-cyan-500/5",
    },
    {
      icon: Database,
      label: "Angular",
      color: "text-red-400",
      bg: "from-red-500/20 to-red-500/5",
    },
    {
      icon: Zap,
      label: "Node.js",
      color: "text-yellow-400",
      bg: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      icon: Shield,
      label: ".NET Core",
      color: "text-indigo-300",
      bg: "from-indigo-500/20 to-violet-500/5",
    },
    {
      icon: Zap,
      label: "Spring Boot",
      color: "text-emerald-300",
      bg: "from-emerald-500/20 to-lime-500/5",
    },
  ];

  const stats = [
    { label: "Projects Built", value: "14", icon: "🚀" },
    { label: "GitHub Repos", value: "20+", icon: "💻" },
    { label: "Languages", value: "6+", icon: "⚡" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.5, rotateY: -90 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5,
        },
      );

      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".hero-animate");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            delay: 0.8,
          },
        );
      }

      if (techRef.current) {
        const badges = techRef.current.querySelectorAll(".tech-item");
        gsap.fromTo(
          badges,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 1.5,
          },
        );
      }

      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll(".stat-card");
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            delay: 2,
          },
        );
      }

      gsap.to(avatarRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      if (orbRef.current) {
        gsap.to(orbRef.current, {
          rotation: 360,
          duration: 30,
          repeat: -1,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] animate-float-delay"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      </div>

      {/* Perspective grid floor */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-[60vh]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.03) 100%)",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom",
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute inset-0 noise-overlay opacity-[0.03]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Avatar */}
            <div
              ref={avatarRef}
              className="flex justify-center md:justify-end relative"
              style={{ perspective: "1000px" }}
            >
              <div
                ref={orbRef}
                className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-cyan-500/10"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              </div>

              <div className="relative w-64 h-64 md:w-72 md:h-72 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[2px] animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/projects/ME.png"
                      alt="Venuka Sirimanne"
                      className="w-full h-full rounded-full object-cover saturate-110 scale-125 group-hover:scale-[1.3] transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl -z-10 group-hover:bg-cyan-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl -z-10 animate-pulse"></div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/80 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-xs font-mono text-cyan-300">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-12 w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-floating-3d">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -right-4 top-20 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm animate-floating-3d animation-delay-1000">
                <span className="text-xl">🔧</span>
              </div>
              <div className="absolute -left-4 bottom-20 w-12 h-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-full flex items-center justify-center backdrop-blur-sm animate-floating-3d animation-delay-600">
                <span className="text-xl">⚡</span>
              </div>
            </div>

            {/* Content */}
            <div
              ref={contentRef}
              className="text-center md:text-left space-y-8"
              style={{ perspective: "1000px" }}
            >
              <div className="hero-animate">
                <span className="text-sm font-mono text-cyan-400/80 tracking-[0.2em] uppercase mb-4 inline-block border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-500/5">
                  &lt;Full Stack Developer /&gt;
                </span>
              </div>

              <div className="hero-animate">
                <TextReveal
                  className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white"
                  delay={1}
                >
                  Venuka
                </TextReveal>
                <TextReveal
                  className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text leading-[0.9] tracking-tight"
                  delay={1.2}
                >
                  Sirimanne
                </TextReveal>
              </div>

              <div className="hero-animate">
                <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-500 md:mx-0 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              </div>

              <p className="hero-animate text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                Crafting cutting-edge web applications across{" "}
                <span className="text-cyan-300">MERN</span>,{" "}
                <span className="text-blue-300">.NET Core</span>,{" "}
                <span className="text-red-300">Angular</span>, and{" "}
                <span className="text-green-300">Spring Boot</span> ecosystems.
              </p>

              <div ref={techRef} className="hero-animate">
                <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-[0.2em]">
                  Primary Stack
                </p>
                <div className="flex flex-wrap justify-start gap-3">
                  {techStack.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className={`tech-item group px-4 py-2 rounded-xl font-medium text-sm backdrop-blur-sm border border-white/10 bg-gradient-to-br ${tech.bg} hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer`}
                      >
                        <Icon
                          className={`inline mr-2 ${tech.color}`}
                          size={14}
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {tech.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hero-animate flex flex-wrap gap-4 pt-4">
                <MagneticButton
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    <Mail size={18} />
                    Get In Touch
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="#projects"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan-400/50 rounded-xl font-bold text-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group"
                >
                  <span className="flex items-center gap-2">
                    <Code2
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                    View Projects
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-4 md:gap-8 my-16 py-12 border-y border-white/5"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card text-center group cursor-pointer"
              >
                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500 group-hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact + Social */}
          <div className="text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="mailto:venukasirimanne1121@gmail.com"
                className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">
                  venukasirimanne1121@gmail.com
                </span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="tel:+94771292336"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-blue-500/5 border border-transparent hover:border-blue-500/20"
              >
                <Phone size={16} />
                <span>+94 77 129 2336</span>
              </a>
              <div className="flex items-center gap-2 text-gray-500 px-4 py-2 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <MapPin size={16} className="text-purple-400" />
                <span>Panagoda, Sri Lanka</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <MagneticButton
                href="https://github.com/Siri200211"
                className="p-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] group"
              >
                <Github
                  size={22}
                  className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                />
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/venuka-sirimanne21-"
                className="p-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] group"
              >
                <Linkedin
                  size={22}
                  className="text-gray-500 group-hover:text-blue-400 transition-colors"
                />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
              Scroll
            </span>
            <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center">
              <div className="w-0.5 h-2 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-1.5 animate-wave"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
