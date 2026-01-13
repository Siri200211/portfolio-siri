import { Code2, Database, Layers, Wrench, Star, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const allSkills = [
    // Languages
    { name: "JavaScript", category: "languages", color: "from-yellow-500 to-yellow-600", icon: "JS", glow: "yellow" },
    { name: "TypeScript", category: "languages", color: "from-blue-500 to-blue-600", icon: "TS", glow: "blue" },
    { name: "Java", category: "languages", color: "from-orange-600 to-orange-700", icon: "☕", glow: "orange" },
    { name: "SQL", category: "languages", color: "from-red-500 to-red-600", icon: "📊", glow: "red" },
    { name: "PHP", category: "languages", color: "from-indigo-600 to-indigo-700", icon: "🐘", glow: "indigo" },
    
    // Frontend
    { name: "React.js", category: "frontend", color: "from-cyan-500 to-cyan-600", icon: "⚛️", glow: "cyan" },
    { name: "Next.js", category: "frontend", color: "from-slate-600 to-slate-700", icon: "▲", glow: "gray" },
    { name: "Tailwind CSS", category: "frontend", color: "from-cyan-400 to-cyan-500", icon: "🌊", glow: "cyan" },
    { name: "HTML", category: "frontend", color: "from-orange-500 to-orange-600", icon: "🏷️", glow: "orange" },
    { name: "CSS", category: "frontend", color: "from-blue-400 to-blue-500", icon: "🎨", glow: "blue" },
    
    // Backend
    { name: "Node.js", category: "backend", color: "from-green-500 to-green-600", icon: "⬢", glow: "green" },
    { name: "Express.js", category: "backend", color: "from-gray-600 to-gray-700", icon: "Ex", glow: "gray" },
    { name: "REST APIs", category: "backend", color: "from-purple-500 to-purple-600", icon: "🔌", glow: "purple" },
    
    // Databases
    { name: "MongoDB", category: "database", color: "from-green-600 to-green-700", icon: "🍃", glow: "green" },
    { name: "MySQL", category: "database", color: "from-blue-600 to-blue-700", icon: "🗄️", glow: "blue" },
    { name: "SQL Server", category: "database", color: "from-red-600 to-red-700", icon: "🖥️", glow: "red" },
    
    // Tools & Platforms
    { name: "Git", category: "tools", color: "from-orange-600 to-orange-700", icon: "🔀", glow: "orange" },
    { name: "GitHub", category: "tools", color: "from-slate-700 to-slate-800", icon: "🐙", glow: "gray" },
    { name: "Postman", category: "tools", color: "from-orange-500 to-orange-600", icon: "📮", glow: "orange" },
    { name: "AWS", category: "tools", color: "from-orange-600 to-orange-700", icon: "☁️", glow: "orange" },
    
    // Mobile & IoT
    { name: "Flutter", category: "mobile", color: "from-sky-400 to-sky-500", icon: "📱", glow: "sky" },
    { name: "IoT", category: "mobile", color: "from-purple-600 to-purple-700", icon: "🔌", glow: "purple" },
  ];

  const expertiseAreas = [
    {
      icon: <Code2 size={40} />,
      title: "Full Stack Web Development",
      description: "Building complete web applications from frontend to backend using modern MERN stack technologies",
      skills: ["React.js", "Node.js", "Express.js", "REST APIs", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database size={40} />,
      title: "Database Design & Management",
      description: "Designing and managing relational and NoSQL databases with efficient schemas",
      skills: ["MongoDB", "MySQL", "SQL Server", "SQL Queries"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Layers size={40} />,
      title: "Frontend Development",
      description: "Creating modern, responsive, and interactive user interfaces with React and Tailwind CSS",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Wrench size={40} />,
      title: "Mobile & IoT Development",
      description: "Developing cross-platform mobile applications and IoT solutions",
      skills: ["Flutter", "IoT Integration", "Mobile Apps"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Skills', icon: '⭐' },
    { id: 'languages', label: 'Languages', icon: '📝' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'mobile', label: 'Mobile & IoT', icon: '📱' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text">
              Technical Skills & Expertise
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full shadow-lg shadow-cyan-500/50"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I actively use to build scalable, efficient solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400/60 shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800/50 text-gray-300 border-white/20 hover:border-cyan-400/40 hover:bg-slate-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Interactive Skill Balls */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="group relative"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, rotateY: 10 }}
                >
                  {/* Glow background */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30"></div>

                  {/* Ball */}
                  <div
                    className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 transform group-hover:shadow-2xl border border-white/30 backdrop-blur-xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      '--tw-gradient-from': skill.color.split(' ')[1],
                      '--tw-gradient-to': skill.color.split(' ')[3],
                      boxShadow: `0 0 30px rgba(0, 0, 0, 0.5)`,
                    } as any}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className="text-2xl mb-1">{skill.icon}</div>
                      <div className="text-xs font-bold uppercase tracking-wider">{skill.name.substring(0, 8)}</div>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-slate-900 px-3 py-1 rounded text-sm border border-white/20">
                      {skill.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="group relative h-full"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Glow effect background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border border-white/10 group-hover:border-white/30 h-full flex flex-col">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${area.color} text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 w-fit`}>
                      {area.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {area.title}
                    </h3>

                    <p className="text-gray-400 mb-6 flex-grow">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-cyan-500/50 rounded-lg text-sm text-gray-200 font-medium transition-all duration-300 border border-white/10 hover:border-white/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div 
            className="mt-20 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {[
                { icon: <Star size={32} />, value: '21', label: 'Technologies' },
                { icon: <Target size={32} />, value: '10', label: 'Projects' },
                { icon: <Zap size={32} />, value: '6', label: 'Categories' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
