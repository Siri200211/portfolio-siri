import { Code2, Database, Layers, Wrench } from 'lucide-react';

export default function Skills() {
  const allSkills = [
    { name: "JavaScript", color: "from-yellow-500 to-yellow-600", icon: "JS", glow: "yellow" },
    { name: "React", color: "from-cyan-500 to-cyan-600", icon: "⚛️", glow: "cyan" },
    { name: "TypeScript", color: "from-blue-500 to-blue-600", icon: "TS", glow: "blue" },
    { name: "Node.js", color: "from-green-500 to-green-600", icon: "⬢", glow: "green" },
    { name: "MongoDB", color: "from-green-600 to-green-700", icon: "🍃", glow: "green" },
    { name: "Express.js", color: "from-gray-600 to-gray-700", icon: "Ex", glow: "gray" },
    { name: "MySQL", color: "from-blue-600 to-blue-700", icon: "🗄️", glow: "blue" },
    { name: "HTML5", color: "from-orange-500 to-orange-600", icon: "🏷️", glow: "orange" },
    { name: "CSS3", color: "from-blue-400 to-blue-500", icon: "🎨", glow: "blue" },
    { name: "Tailwind", color: "from-cyan-400 to-cyan-500", icon: "🌊", glow: "cyan" },
    { name: "Git", color: "from-orange-600 to-orange-700", icon: "🔀", glow: "orange" },
    { name: "REST APIs", color: "from-purple-500 to-purple-600", icon: "🔌", glow: "purple" },
    { name: "SQL", color: "from-red-500 to-red-600", icon: "📊", glow: "red" },
    { name: "Java", color: "from-orange-600 to-orange-700", icon: "☕", glow: "orange" },
  ];

  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "SQL", "PHP"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Layers size={32} />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database size={32} />,
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "SQL Server"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Wrench size={32} />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "AWS (basic)"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const glowColorMap = {
    yellow: 'shadow-yellow-500/50',
    cyan: 'shadow-cyan-500/50',
    blue: 'shadow-blue-500/50',
    green: 'shadow-green-500/50',
    orange: 'shadow-orange-500/50',
    purple: 'shadow-purple-500/50',
    gray: 'shadow-gray-500/50',
    red: 'shadow-red-500/50',
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 glow-text animate-slide-up">
              Technical Skills
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 animate-slide-up animation-delay-200"></div>
            <p className="text-gray-400 text-lg animate-slide-up animation-delay-400">
              Technologies I've mastered and actively use
            </p>
          </div>

          {/* 3D Popping balls section */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {allSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`group relative animate-pop-bounce hover:animate-floating-3d`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {/* Glow background */}
                  <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                    style={{
                      background: `radial-gradient(circle, currentColor 0%, transparent 70%)`,
                    }}>
                  </div>

                  {/* Ball */}
                  <div
                    className={`relative w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl border border-white/30 backdrop-blur-xl overflow-hidden`}
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      '--tw-gradient-from': skill.color.split(' ')[1],
                      '--tw-gradient-to': skill.color.split(' ')[3],
                      boxShadow: `0 0 30px var(--tw-shadow-color)`,
                    } as any}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className="text-2xl mb-1">{skill.icon}</div>
                      <div className="text-xs font-bold uppercase tracking-wider">{skill.name.substring(0, 6)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative h-full animate-slide-up"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(34, 211, 238, 0.3))`
                  }}>
                </div>

                {/* Main card */}
                <div
                  className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/10 group-hover:border-white/30"
                  style={{
                    transform: 'translateZ(0px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-cyan-500/50 rounded-lg text-gray-200 font-medium transition-all duration-300 border border-white/10 hover:border-white/30 backdrop-blur-sm"
                        style={{
                          animationDelay: `${skillIndex * 50}ms`
                        }}
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
      </div>
    </section>
  );
}
