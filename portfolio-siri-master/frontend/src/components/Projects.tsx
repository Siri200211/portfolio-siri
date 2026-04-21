import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Weather Comfort Analytics",
    period: "Jan 2026",
    description:
      "Responsive Weather Comfort Analytics Dashboard with React, Auth0 authentication, and real-time weather data visualization with comfort score calculations.",
    tech: ["React", "Auth0", "JavaScript", "Charts", "REST API"],
    images: ["/images/projects/weather1.png", "/images/projects/weather2.png"],
    color: "#06b6d4",
    featured: true,
  },
  {
    title: "Hotel Stock Management",
    period: "Mar - May 2025",
    description:
      "MERN system with WhatsApp integration for automated inventory tracking, featuring Sinhala language support, real-time monitoring, and sustainable resource management. AI bot developed to automate stock workflows.",
    tech: ["MongoDB", "React", "Node.js", "Express.js", "WhatsApp API"],
    images: [],
    color: "#8b5cf6",
    featured: true,
  },
  {
    title: "SLT PEOTV Sales Dashboard",
    period: "Jan - Feb 2025",
    description:
      "Production-ready MERN app for PEOtv sales analytics. Currently deployed and used by Marketing Department at Sri Lanka Telecom.",
    tech: ["MongoDB", "React", "Node.js", "Express.js"],
    images: [
      "/images/projects/peotv-sales-dashboard.png",
      "/images/projects/peotv-sales-daily-report.png",
    ],
    color: "#3b82f6",
    featured: true,
  },
  {
    title: "SLT PEOTV Faults Analysis",
    period: "Oct - Dec 2024",
    description:
      "MERN stack application for PEO TV fault management with comprehensive analytics, heat maps, and real-time fault tracking.",
    tech: ["MongoDB", "React", "Node.js", "Express.js"],
    images: ["/images/projects/peotv-faults-analysis.png"],
    color: "#10b981",
    featured: false,
  },
  {
    title: "Employee Management System",
    period: "Mar - May 2024",
    description:
      "Transportation management system with shuttle service scheduling for employee and lecturer commutes.",
    tech: ["MongoDB", "React", "Node.js", "Express.js"],
    images: [],
    color: "#f97316",
    featured: false,
  },
  {
    title: "Life Insurance System",
    period: "Mar - May 2023",
    description:
      "Comprehensive life insurance management with secure authentication and role-based access control.",
    tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    images: [],
    color: "#ec4899",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateX: -5 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.12,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="project-header text-center mb-20">
            <p className="text-xs font-mono text-violet-400/60 tracking-[0.3em] uppercase mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-white/30 max-w-lg mx-auto text-sm">
              Production-grade applications built with modern technologies
            </p>
          </div>

          {/* Featured projects - large cards */}
          <div ref={cardsRef} className="space-y-6">
            {projects
              .filter((p) => p.featured)
              .map((project, idx) => (
                <div
                  key={idx}
                  className="project-card group relative rounded-3xl glass-hover overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative p-8 md:p-12">
                    {/* Accent gradient */}
                    <div
                      className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700"
                      style={{ background: project.color }}
                    />

                    <div className="relative grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: project.color,
                              boxShadow: `0 0 8px ${project.color}`,
                            }}
                          />
                          <span className="text-xs font-mono text-white/30">
                            {project.period}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all duration-500">
                          {project.title}
                        </h3>

                        <p className="text-white/40 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-[11px] font-medium text-white/50 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-white/20 hover:text-white/70 transition-all duration-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                          <button className="flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors group/btn">
                            <ArrowUpRight
                              size={14}
                              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                            />
                            View Details
                          </button>
                        </div>
                      </div>

                      {/* Image preview */}
                      <div className="relative">
                        {project.images.length > 0 ? (
                          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-700">
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="w-full h-48 md:h-64 object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          </div>
                        ) : (
                          <div className="relative h-48 md:h-64 rounded-2xl border border-white/[0.04] bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center">
                            <div className="text-center">
                              <div
                                className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                                style={{ background: `${project.color}15` }}
                              >
                                <ExternalLink
                                  size={20}
                                  style={{ color: project.color }}
                                />
                              </div>
                              <p className="text-xs text-white/20 font-mono">
                                In Development
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* Smaller project cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, idx) => (
                  <div
                    key={idx}
                    className="project-card group p-6 rounded-2xl glass-hover"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: project.color }}
                      />
                      <span className="text-[10px] font-mono text-white/25">
                        {project.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white/80 group-hover:text-white transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs text-white/30 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] text-white/30 bg-white/[0.03] border border-white/[0.04] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* GitHub CTA */}
            <div className="text-center pt-12">
              <a
                href="https://github.com/Siri200211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 glass-hover rounded-xl text-sm font-medium text-white/50 hover:text-white transition-colors group"
              >
                <Github
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                See all 20+ repositories on GitHub
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
