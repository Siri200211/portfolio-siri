import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Skill {
  name: string;
  category: string;
  color: string;
  icon: string;
  level: "expert" | "advanced" | "proficient";
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    color: "#61dafb",
    icon: "⚛",
    level: "expert",
  },
  {
    name: "Angular",
    category: "Frontend",
    color: "#dd0031",
    icon: "🅰",
    level: "advanced",
  },
  {
    name: "Next.js",
    category: "Frontend",
    color: "#ffffff",
    icon: "▲",
    level: "advanced",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    color: "#06b6d4",
    icon: "🌊",
    level: "expert",
  },
  {
    name: "HTML",
    category: "Frontend",
    color: "#e34f26",
    icon: "H",
    level: "expert",
  },
  {
    name: "CSS",
    category: "Frontend",
    color: "#1572b6",
    icon: "C",
    level: "expert",
  },
  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    color: "#f7df1e",
    icon: "JS",
    level: "expert",
  },
  {
    name: "TypeScript",
    category: "Languages",
    color: "#3178c6",
    icon: "TS",
    level: "expert",
  },
  {
    name: "Java",
    category: "Languages",
    color: "#ed8b00",
    icon: "☕",
    level: "advanced",
  },
  {
    name: "C#",
    category: "Languages",
    color: "#9b4dca",
    icon: "C#",
    level: "advanced",
  },
  {
    name: "SQL",
    category: "Languages",
    color: "#f0931c",
    icon: "SQL",
    level: "advanced",
  },
  {
    name: "PHP",
    category: "Languages",
    color: "#777bb4",
    icon: "PHP",
    level: "proficient",
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    color: "#339933",
    icon: "⬢",
    level: "expert",
  },
  {
    name: "Express.js",
    category: "Backend",
    color: "#ffffff",
    icon: "Ex",
    level: "expert",
  },
  {
    name: ".NET Core",
    category: "Backend",
    color: "#512bd4",
    icon: ".N",
    level: "advanced",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    color: "#6db33f",
    icon: "🍃",
    level: "advanced",
  },
  // Database
  {
    name: "MongoDB",
    category: "Database",
    color: "#47a248",
    icon: "🍃",
    level: "expert",
  },
  {
    name: "MySQL",
    category: "Database",
    color: "#4479a1",
    icon: "🐬",
    level: "advanced",
  },
  {
    name: "MS SQL",
    category: "Database",
    color: "#cc2927",
    icon: "SQL",
    level: "advanced",
  },
  // Tools
  {
    name: "Git",
    category: "Tools",
    color: "#f05032",
    icon: "⑂",
    level: "expert",
  },
  {
    name: "GitHub",
    category: "Tools",
    color: "#ffffff",
    icon: "⑃",
    level: "expert",
  },
  {
    name: "Postman",
    category: "Tools",
    color: "#ff6c37",
    icon: "PM",
    level: "expert",
  },
  {
    name: "Azure",
    category: "Tools",
    color: "#0089d6",
    icon: "Az",
    level: "proficient",
  },
  {
    name: "AWS",
    category: "Tools",
    color: "#ff9900",
    icon: "☁",
    level: "proficient",
  },
  {
    name: "CI/CD",
    category: "Tools",
    color: "#10b981",
    icon: "⟳",
    level: "proficient",
  },
  {
    name: "JIRA",
    category: "Tools",
    color: "#0052cc",
    icon: "J",
    level: "proficient",
  },
  // Mobile
  {
    name: "Flutter",
    category: "Mobile",
    color: "#54c5f8",
    icon: "F",
    level: "advanced",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Tools",
  "Mobile",
];

// Infinite scrolling marquee row
function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: Skill[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[rgb(2,2,8)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[rgb(2,2,8)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x:
            direction === "left"
              ? [0, -(items.length * 200)]
              : [-(items.length * 200), 0],
        }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="relative flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 group/card cursor-default min-w-[180px]"
          >
            {/* Glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: `inset 0 0 40px ${skill.color}08, 0 0 30px ${skill.color}06`,
              }}
            />
            <div
              className="relative w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
              style={{
                background: `${skill.color}12`,
                border: `1px solid ${skill.color}25`,
              }}
            >
              <span style={{ filter: `drop-shadow(0 0 3px ${skill.color})` }}>
                {skill.icon}
              </span>
            </div>
            <div className="relative">
              <p className="text-sm font-semibold text-white/80 group-hover/card:text-white transition-colors">
                {skill.name}
              </p>
              <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider">
                {skill.category}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Premium skill card for bento grid
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, z: -200, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, z: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: "backOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, ${skill.color}40, transparent 40%, transparent 60%, ${skill.color}30)`,
        }}
      />

      <div className="relative h-full p-5 rounded-2xl bg-[rgb(8,8,14)] border border-white/[0.04] group-hover:border-transparent transition-all duration-500 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] transition-opacity duration-700"
          style={{ background: skill.color, opacity: isHovered ? 0.08 : 0.02 }}
        />

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${skill.color}15, transparent 70%)`,
          }}
        />

        <div className="relative flex flex-col h-full">
          {/* Icon */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg transition-all duration-500 group-hover:scale-110"
              style={{
                background: `${skill.color}10`,
                border: `1px solid ${skill.color}20`,
                boxShadow: isHovered ? `0 0 25px ${skill.color}20` : "none",
              }}
            >
              <span
                style={{
                  filter: isHovered
                    ? `drop-shadow(0 0 6px ${skill.color})`
                    : "none",
                }}
              >
                {skill.icon}
              </span>
            </div>
            <div
              className={`px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-wider ${skill.level === "expert"
                  ? "text-emerald-400/60 bg-emerald-500/[0.08] border border-emerald-500/10"
                  : skill.level === "advanced"
                    ? "text-cyan-400/60 bg-cyan-500/[0.08] border border-cyan-500/10"
                    : "text-white/30 bg-white/[0.04] border border-white/[0.06]"
                }`}
            >
              {skill.level}
            </div>
          </div>

          {/* Name & category */}
          <h4 className="text-base font-bold text-white/90 group-hover:text-white transition-colors mb-1">
            {skill.name}
          </h4>
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-wider mt-auto">
            {skill.category}
          </p>

          {/* Animated underline on hover */}
          <motion.div
            className="absolute bottom-0 left-5 right-5 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${skill.color}40, transparent)`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Category stat pill
function CategoryStat({
  category,
  count,
  color,
}: {
  category: string;
  count: number;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500 cursor-default"
    >
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
      />
      <span className="text-xs font-medium text-white/60">{category}</span>
      <span className="text-xs font-mono text-white/25 ml-auto">{count}</span>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  // Split skills into rows for marquee
  const row1 = skills.slice(0, 10);
  const row2 = skills.slice(10, 20);

  const categoryColors: Record<string, string> = {
    Frontend: "#06b6d4",
    Backend: "#10b981",
    Languages: "#f59e0b",
    Database: "#8b5cf6",
    Tools: "#3b82f6",
    Mobile: "#ec4899",
  };

  const categoryCounts = categories.slice(1).map((cat) => ({
    category: cat,
    count: skills.filter((s) => s.category === cat).length,
    color: categoryColors[cat] || "#ffffff",
  }));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-cyan-500/[0.015] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[500px] bg-violet-500/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6" style={{ perspective: "1000px" }}>
          <motion.div
            initial={{ opacity: 0, y: 100, z: -300, rotateX: 20 }}
            animate={isInView ? { opacity: 1, y: 0, z: 0, rotateX: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center mb-16 transform-style-3d"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
              <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
                Technical Arsenal
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[0.95]">
              Mastery in
              <br />
              <span className="text-gradient">Modern Tech</span>
            </h2>
            <p className="text-white/30 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              A curated collection of technologies I use to build
              production-grade, scalable applications across the full stack.
            </p>
          </motion.div>
        </div>

        {/* Marquee section - full width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20"
        >
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={40} />
        </motion.div>

        {/* Category stats */}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mb-12"
          >
            {categoryCounts.map((stat) => (
              <CategoryStat key={stat.category} {...stat} />
            ))}
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 text-xs font-medium rounded-xl transition-all duration-500 ${activeCategory === cat
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                  }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="skillTab"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>

          {/* Skill cards grid */}
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {filteredSkills.map((skill, idx) => (
                  <SkillCard key={skill.name} skill={skill} index={idx} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl bg-white/[0.015] border border-white/[0.04] backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-2">
                  Overall Expertise
                </p>
                <p className="text-lg font-semibold text-white/70">
                  Full Stack Engineer with{" "}
                  <span className="text-gradient font-bold">2+ years</span> of
                  hands-on experience
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-black text-gradient">
                    {skills.length}
                  </p>
                  <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider mt-1">
                    Technologies
                  </p>
                </div>
                <div className="w-[1px] h-10 bg-white/[0.06]" />
                <div className="text-center">
                  <p className="text-3xl font-black text-gradient">
                    {categories.length - 1}
                  </p>
                  <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider mt-1">
                    Domains
                  </p>
                </div>
                <div className="w-[1px] h-10 bg-white/[0.06]" />
                <div className="text-center">
                  <p className="text-3xl font-black text-gradient">14+</p>
                  <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider mt-1">
                    Projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
