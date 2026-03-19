import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Layers,
  Wrench,
  Shield,
  Star,
  Target,
  Zap,
} from "lucide-react";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);

  const allSkills = [
    {
      name: "JavaScript",
      category: "languages",
      color: "from-yellow-500 to-yellow-600",
      icon: "JS",
    },
    {
      name: "TypeScript",
      category: "languages",
      color: "from-blue-500 to-blue-600",
      icon: "TS",
    },
    {
      name: "Java",
      category: "languages",
      color: "from-orange-600 to-orange-700",
      icon: "☕",
    },
    {
      name: "C#",
      category: "languages",
      color: "from-violet-600 to-violet-700",
      icon: "C#",
    },
    {
      name: "SQL",
      category: "languages",
      color: "from-red-500 to-red-600",
      icon: "📊",
    },
    {
      name: "PHP",
      category: "languages",
      color: "from-indigo-600 to-indigo-700",
      icon: "🐘",
    },
    {
      name: "React.js",
      category: "frontend",
      color: "from-cyan-500 to-cyan-600",
      icon: "⚛️",
    },
    {
      name: "Angular",
      category: "frontend",
      color: "from-red-600 to-rose-700",
      icon: "🅰️",
    },
    {
      name: "Next.js",
      category: "frontend",
      color: "from-slate-600 to-slate-700",
      icon: "▲",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      color: "from-cyan-400 to-cyan-500",
      icon: "🌊",
    },
    {
      name: "HTML",
      category: "frontend",
      color: "from-orange-500 to-orange-600",
      icon: "🏷️",
    },
    {
      name: "CSS",
      category: "frontend",
      color: "from-blue-400 to-blue-500",
      icon: "🎨",
    },
    {
      name: "Node.js",
      category: "backend",
      color: "from-green-500 to-green-600",
      icon: "⬢",
    },
    {
      name: ".NET Core",
      category: "backend",
      color: "from-indigo-600 to-violet-700",
      icon: ".NET",
    },
    {
      name: "Spring Boot",
      category: "backend",
      color: "from-emerald-600 to-lime-700",
      icon: "🍃",
    },
    {
      name: "Express.js",
      category: "backend",
      color: "from-gray-600 to-gray-700",
      icon: "Ex",
    },
    {
      name: "REST APIs",
      category: "backend",
      color: "from-purple-500 to-purple-600",
      icon: "🔌",
    },
    {
      name: "MongoDB",
      category: "database",
      color: "from-green-600 to-green-700",
      icon: "🍃",
    },
    {
      name: "MySQL",
      category: "database",
      color: "from-blue-600 to-blue-700",
      icon: "🗄️",
    },
    {
      name: "SQL Server",
      category: "database",
      color: "from-red-600 to-red-700",
      icon: "🖥️",
    },
    {
      name: "Git",
      category: "tools",
      color: "from-orange-600 to-orange-700",
      icon: "🔀",
    },
    {
      name: "GitHub",
      category: "tools",
      color: "from-slate-700 to-slate-800",
      icon: "🐙",
    },
    {
      name: "Postman",
      category: "tools",
      color: "from-orange-500 to-orange-600",
      icon: "📮",
    },
    {
      name: "AWS",
      category: "tools",
      color: "from-orange-600 to-orange-700",
      icon: "☁️",
    },
    {
      name: "Auth0",
      category: "tools",
      color: "from-red-500 to-red-600",
      icon: "🔐",
    },
    {
      name: "Azure",
      category: "tools",
      color: "from-sky-500 to-blue-600",
      icon: "☁️",
    },
    {
      name: "Flutter",
      category: "mobile",
      color: "from-sky-400 to-sky-500",
      icon: "📱",
    },
    {
      name: "IoT",
      category: "mobile",
      color: "from-purple-600 to-purple-700",
      icon: "🔌",
    },
  ];

  const expertiseAreas = [
    {
      icon: <Code2 size={36} />,
      title: "Full Stack Web Development",
      description:
        "Building complete web applications using modern JavaScript and enterprise frameworks",
      skills: [
        "React.js",
        "Angular",
        "Node.js",
        ".NET Core",
        "Spring Boot",
        "REST APIs",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Database size={36} />,
      title: "Database Design & Management",
      description:
        "Designing and managing relational and NoSQL databases with efficient schemas",
      skills: ["MongoDB", "MySQL", "SQL Server", "SQL Queries"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Layers size={36} />,
      title: "Frontend Development",
      description:
        "Creating modern, responsive, and interactive user interfaces",
      skills: ["React.js", "Angular", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Wrench size={36} />,
      title: "Mobile & IoT Development",
      description:
        "Developing cross-platform mobile applications and IoT solutions",
      skills: ["Flutter", "IoT Integration", "Mobile Apps"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield size={36} />,
      title: "Authentication & Security",
      description:
        "Implementing secure authentication and access control solutions",
      skills: ["Auth0", "JWT Authentication", "Role-Based Access Control"],
      color: "from-red-500 to-pink-500",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const categories = [
    { id: "all", label: "All", icon: "⭐" },
    { id: "languages", label: "Languages", icon: "📝" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "database", label: "Database", icon: "🗄️" },
    { id: "tools", label: "Tools", icon: "🛠️" },
    { id: "mobile", label: "Mobile", icon: "📱" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill balls on scroll
      if (skillsGridRef.current) {
        const balls = skillsGridRef.current.querySelectorAll(".skill-ball");
        gsap.fromTo(
          balls,
          { opacity: 0, scale: 0, y: 80, rotateZ: -20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateZ: 0,
            stagger: { amount: 0.8, from: "random" },
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Expertise cards with 3D reveal
      if (expertiseRef.current) {
        const cards = expertiseRef.current.querySelectorAll(".expertise-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              rotateY: i % 2 === 0 ? -30 : 30,
              x: i % 2 === 0 ? -100 : 100,
            },
            {
              opacity: 1,
              rotateY: 0,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
      </div>

      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-20">
            <TextReveal
              className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text"
              scrub
            >
              Technical Arsenal
            </TextReveal>
            <div className="h-[2px] w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              A comprehensive ecosystem of modern technologies I leverage to
              architect scalable solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-500 border flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    : "bg-white/[0.02] text-gray-500 border-white/5 hover:border-white/20 hover:text-gray-300"
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill Orbs */}
          <div ref={skillsGridRef} className="mb-24">
            <div
              className="flex flex-wrap justify-center gap-5 items-center"
              style={{ perspective: "1200px" }}
            >
              {filteredSkills.map((skill, idx) => (
                <div
                  key={`${skill.name}-${idx}`}
                  className="skill-ball group relative cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 scale-150"></div>

                  {/* Ball */}
                  <div
                    className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-white transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 border border-white/20 group-hover:border-white/40 overflow-hidden bg-gradient-to-br ${skill.color}`}
                    style={{
                      boxShadow:
                        "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    {/* Shine */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full"></div>

                    <div className="relative z-10 text-center">
                      <div className="text-xl md:text-2xl mb-0.5">
                        {skill.icon}
                      </div>
                      <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider opacity-90">
                        {skill.name.length > 8
                          ? skill.name.substring(0, 7) + "."
                          : skill.name}
                      </div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 whitespace-nowrap bg-black/90 px-3 py-1.5 rounded-lg text-xs border border-white/20 pointer-events-none backdrop-blur-sm text-cyan-300 font-medium">
                    {skill.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div ref={expertiseRef} className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/90">
              Areas of{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                Expertise
              </span>
            </h3>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              style={{ perspective: "1200px" }}
            >
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="expertise-card group h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative h-full bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 group-hover:border-white/20 transition-all duration-700 group-hover:bg-white/[0.04] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.05)] overflow-hidden">
                    {/* Gradient accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    ></div>

                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} text-white mb-5 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                    >
                      {area.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-500">
                      {area.title}
                    </h3>

                    <p className="text-gray-500 mb-5 text-sm leading-relaxed">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="px-3 py-1 bg-white/[0.03] hover:bg-white/[0.08] rounded-lg text-xs text-gray-400 hover:text-cyan-300 font-medium transition-all duration-300 border border-white/5 hover:border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 pt-16 border-t border-white/5">
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  icon: <Star size={28} />,
                  value: "22",
                  label: "Technologies",
                },
                { icon: <Target size={28} />, value: "14", label: "Projects" },
                { icon: <Zap size={28} />, value: "7", label: "Categories" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="flex justify-center mb-4 text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-500">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm font-medium group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
