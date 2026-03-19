import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Weather Comfort Analytics",
      period: "Jan 2026",
      description:
        "Responsive Weather Comfort Analytics Dashboard with React, secure Auth0 authentication, and real-time weather data visualization.",
      highlights: [
        "React Dashboard",
        "Auth0 Authentication",
        "Weather Data Visualization",
        "Comfort Score Calculation",
        "Dark/Light Theme",
      ],
      tech: ["React", "Auth0", "JavaScript", "Charts", "API Integration"],
      images: [
        "/images/projects/weather1.png",
        "/images/projects/weather2.png",
      ],
      gradient: "from-cyan-500/10 to-blue-500/10",
      accent: "cyan",
    },
    {
      title: "Hotel Stock Management",
      period: "Mar - May 2025",
      description:
        "AI-powered MERN system with WhatsApp integration for automated inventory tracking, featuring Sinhala language support.",
      highlights: [
        "AI Inventory Automation",
        "WhatsApp Integration",
        "Sinhala Support",
        "Real-time Monitoring",
      ],
      tech: ["MongoDB", "React", "Node.js", "Express.js", "AI"],
      images: [],
      gradient: "from-purple-500/10 to-pink-500/10",
      accent: "purple",
    },
    {
      title: "SLT PEOTV Sales Dashboard",
      period: "Jan - Feb 2025",
      description:
        "Production-ready MERN application for PEOtv sales analytics. Currently used by Marketing Department at Sri Lanka Telecom.",
      highlights: [
        "Production Deployment",
        "Interactive Dashboards",
        "Automated Alerts",
        "Role-Based Access",
        "CSV Management",
      ],
      tech: ["MongoDB", "React", "Node.js", "Express.js"],
      images: [
        "/images/projects/peotv-sales-dashboard.png",
        "/images/projects/peotv-sales-daily-report.png",
      ],
      gradient: "from-blue-500/10 to-indigo-500/10",
      accent: "blue",
    },
    {
      title: "SLT PEOTV Faults Analysis",
      period: "Oct - Dec 2024",
      description:
        "MERN stack application for PEO TV fault management with comprehensive analytics, heat maps, and real-time tracking.",
      highlights: [
        "Analytical Dashboard",
        "Heat Maps",
        "Real-time Tracking",
        "Role-Based Access",
      ],
      tech: ["MongoDB", "React", "Node.js", "Express.js"],
      images: ["/images/projects/peotv-faults-analysis.png"],
      gradient: "from-green-500/10 to-emerald-500/10",
      accent: "green",
    },
    {
      title: "Employee Management System",
      period: "Mar - May 2024",
      description:
        "Transportation management system with shuttle service scheduling for employee and lecturer commutes.",
      highlights: [
        "Shuttle Scheduling",
        "Admin Dashboard",
        "Booking System",
        "Commute Management",
      ],
      tech: ["MongoDB", "React", "Node.js", "Express.js"],
      images: [],
      gradient: "from-orange-500/10 to-red-500/10",
      accent: "orange",
    },
    {
      title: "Life Insurance System",
      period: "Mar - May 2023",
      description:
        "Comprehensive life insurance management with secure authentication and role-based access control.",
      highlights: [
        "Secure Auth",
        "Admin Panel",
        "Policy Management",
        "User Handling",
      ],
      tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
      images: [],
      gradient: "from-rose-500/10 to-pink-500/10",
      accent: "rose",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll for project cards
      if (horizontalRef.current && cardsRef.current) {
        const cards = cardsRef.current;
        const totalWidth = cards.scrollWidth - window.innerWidth + 200;

        gsap.to(cards, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative bg-black">
      {/* Header */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center">
            <TextReveal
              className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text"
              scrub
            >
              Featured Projects
            </TextReveal>
            <p className="text-gray-500 text-lg mb-2">
              Scroll horizontally through my work
            </p>
            <p className="text-gray-600 text-sm">
              <span className="text-cyan-400 font-mono">{projects.length}</span>{" "}
              featured projects &mdash;{" "}
              <span className="text-cyan-400 font-mono">14+</span> total on
              GitHub
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>

        <div
          ref={cardsRef}
          className="flex gap-8 px-[10vw] py-10 items-stretch"
          style={{ width: "max-content" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group w-[80vw] md:w-[50vw] lg:w-[40vw] flex-shrink-0"
            >
              <div
                className={`relative h-full rounded-3xl p-8 md:p-10 border border-white/5 group-hover:border-white/15 transition-all duration-700 bg-gradient-to-br ${project.gradient} backdrop-blur-sm overflow-hidden group-hover:shadow-[0_0_80px_rgba(6,182,212,0.05)]`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Project number */}
                <div className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Period badge */}
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <Calendar size={14} className="text-cyan-500" />
                  <span className="text-xs font-mono tracking-wider">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500">
                  {project.title}
                </h3>

                {/* Images */}
                {project.images.length > 0 && (
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    {project.images.slice(0, 2).map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="rounded-xl overflow-hidden border border-white/5 group-hover:border-white/15 transition-all duration-500"
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {project.highlights.slice(0, 4).map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-500 group-hover:text-gray-400 transition-colors text-sm"
                    >
                      <ExternalLink
                        size={12}
                        className="text-cyan-500/60 flex-shrink-0"
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/[0.03] text-gray-400 rounded-lg text-xs font-medium border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* GitHub CTA card */}
          <div className="w-[80vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0 flex items-center">
            <div className="relative w-full rounded-3xl p-10 border border-white/5 hover:border-cyan-500/30 transition-all duration-700 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 text-center group cursor-pointer">
              <div className="text-5xl mb-6">🐙</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                See All Projects
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                14+ projects & 20+ repositories
              </p>
              <a
                href="https://github.com/Siri200211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl text-cyan-300 font-medium text-sm hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                Explore GitHub
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="py-8 text-center">
        <p className="text-gray-600 text-xs font-mono tracking-wider animate-pulse">
          ↕ KEEP SCROLLING
        </p>
      </div>
    </section>
  );
}
