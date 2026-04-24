import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// 3D Tilt Card Component for Experience Section
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
      className={`glass-hover transition-all duration-500 hover:z-20 hover:scale-[1.02] ${className}`}
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

const experiences = [
// ... (Data definitions remain exactly the same)
  {
    type: "work",
    title: "Software Engineering Intern",
    company: "Sri Lanka Telecom (SLT)",
    period: "Oct 2024 - Apr 2025",
    description:
      "Developed and deployed the SLT PEOTV Sales Reports & Dashboard — a production MERN application used daily by the Marketing Department. Collaborated with the team for seamless integration and deployment, enhancing data accessibility and decision-making through interactive dashboards, CSV exports, role-based authentication, and automated email alerts.",
    highlights: [
      "Production Deployment",
      "MERN Stack",
      "Role-based Auth",
      "CSV Exports",
      "Email Alerts",
      "Data Analytics",
    ],
  },
  {
    type: "work",
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2023 - Present",
    description:
      "Delivering full-stack web applications for clients across industries. Projects include inventory management systems with WhatsApp integration, hotel management dashboards, and custom RESTful API solutions.",
    highlights: [
      "Client Delivery",
      "Full Stack",
      "WhatsApp API",
      "RESTful APIs",
    ],
  },
];

const education = [
  {
    title: "BSc (Hons) in Information Technology",
    institution: "SLIIT - Sri Lanka Institute of Information Technology",
    period: "June 2022 - Present",
    description:
      "Specializing in Software Engineering with focus on web technologies, scalable systems, cloud-based tools, and database design.",
  },
  {
    title: "GCE Advanced Level — Commerce Stream",
    institution: "Sri Sumangala College, Panadura",
    period: "2019 - 2022",
    description:
      "Economics (A), Business Studies (B), Accounting (B), General English (C). Achieved remarkable proficiency at grade 13 level.",
  },
];

const achievements = [
  "Production-deployed MERN apps at Sri Lanka Telecom",
  "MERN, .NET Core, Angular, Spring Boot expertise",
  "CI/CD pipelines, Azure & JIRA workflows",
  "Champions — SCC The Hundred Cricket Tournament 2023/24",
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header - scrubs in from below
      gsap.fromTo(
        ".exp-header",
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

      // Timeline line growth - already scrub-based, keep it
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 1,
            },
          },
        );
      }

      // Timeline items - alternate from left and right sides
      const items = timelineRef.current?.querySelectorAll(".timeline-item");
      if (items) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { 
              opacity: 0, 
              x: index % 2 === 0 ? -500 : 500, 
              y: 80,
              z: -300, 
              rotateY: index % 2 === 0 ? -25 : 25,
              scale: 0.85,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              rotateY: 0,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
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

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="exp-header text-center mb-20">
            <p className="text-xs font-mono text-blue-400/60 tracking-[0.3em] uppercase mb-4">
              Career Path
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative pl-8 md:pl-12" style={{ perspective: "1200px" }}>
            {/* Animated line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[1px] bg-white/[0.04]">
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(6,182,212), rgb(139,92,246))",
                }}
              />
            </div>

            {/* Work Experience */}
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Briefcase size={14} className="text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  Work
                </h3>
              </div>

              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-item relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-8 md:-left-12 top-6 w-[9px] h-[9px] rounded-full border-2 border-cyan-500/50 bg-black group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all duration-500 z-10" />

                  <TiltCard className="p-6 md:p-8 rounded-2xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-500">
                          {exp.title}
                        </h4>
                        <p className="text-sm text-white/40">{exp.company}</p>
                      </div>
                      <span className="text-[11px] font-mono text-white/25 px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.04]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/35 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] font-medium text-cyan-400/60 bg-cyan-500/[0.05] border border-cyan-500/10 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <GraduationCap size={14} className="text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  Education
                </h3>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item relative group">
                  <div className="absolute -left-8 md:-left-12 top-6 w-[9px] h-[9px] rounded-full border-2 border-violet-500/50 bg-black group-hover:border-violet-400 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-500 z-10" />
                  <TiltCard className="p-6 md:p-8 rounded-2xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {edu.title}
                        </h4>
                        <p className="text-sm text-white/40">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-white/25 px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.04]">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/35 leading-relaxed">
                      {edu.description}
                    </p>
                  </TiltCard>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="timeline-item">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Award size={14} className="text-emerald-400" />
                </div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                  Highlights
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((a, i) => (
                  <TiltCard key={i} className="px-4 py-3 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-white/40">{a}</span>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
