import { Github, Linkedin, Mail, MapPin, Phone, Code2, Database, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const techStack = [
    { icon: Code2, label: 'React', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-cyan-500/10' },
    { icon: Database, label: 'MongoDB', color: 'text-green-400', bg: 'from-green-500/20 to-green-500/10' },
    { icon: Zap, label: 'Node.js', color: 'text-yellow-400', bg: 'from-yellow-500/20 to-yellow-500/10' },
    { icon: Shield, label: 'TypeScript', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-500/10' },
  ];

  const stats = [
    { label: 'Projects Built', value: '10', icon: '🚀' },
    { label: 'GitHub Repos', value: '14+', icon: '💻' },
    { label: 'Languages', value: '6+', icon: '⚡' },
  ];

  const allTechnologies = [
    { name: 'JavaScript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PHP', category: 'Backend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Git', category: 'Tools' },
    { name: 'REST APIs', category: 'Backend' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>

      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delay"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>

      {/* Additional floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-400 rounded-full mix-blend-screen filter blur-2xl opacity-5 animate-pulse"></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      {/* Animated lines */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent opacity-30 blur-sm"></div>
      <div className="absolute top-1/3 right-0 w-1 h-40 bg-gradient-to-b from-blue-500 to-transparent opacity-30 blur-sm"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Avatar with floating elements */}
            <motion.div
              className="flex justify-center md:justify-end relative md:-translate-x-12"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Floating animated cards */}
              <motion.div
                className="absolute -left-12 top-10 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-3xl">💻</div>
              </motion.div>

              <motion.div
                className="absolute -left-16 bottom-16 w-18 h-18 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="text-3xl">⚡</div>
              </motion.div>

              <motion.div
                className="absolute -left-6 -top-8 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-lg flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="text-2xl">🔧</div>
              </motion.div>

              {/* Orbiting circles */}
              <motion.div
                className="absolute inset-0 w-72 h-72 -z-20"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 opacity-60"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 opacity-60"></div>
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-purple-400 rounded-full transform -translate-y-1/2 opacity-60"></div>
              </motion.div>

              <motion.div
                className="absolute inset-0 w-96 h-96 -z-20"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-300 rounded-full transform -translate-x-1/2 opacity-40"></div>
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-blue-300 rounded-full opacity-40"></div>
                <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-purple-300 rounded-full opacity-40"></div>
              </motion.div>

              <div className="relative w-64 h-64">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="text-8xl font-black glow-text animate-color-pulse">VS</div>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

                {/* Glow effect background */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl -z-10 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              className="text-center md:text-left space-y-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h1 className="text-6xl md:text-7xl font-black mb-4 animate-slide-up leading-tight">
                  <span className="glow-text block">Venuka</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text block">Sirimanne</span>
                </h1>

                <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto md:mx-0 mb-8 animate-slide-up animation-delay-200 rounded-full shadow-lg shadow-cyan-500/50"></div>
              </div>

              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-4 animate-slide-up animation-delay-400">
                  Software Developer
                </p>
                <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed max-w-md">
                  Crafting cutting-edge web applications with MERN stack. Building scalable solutions that solve real-world problems with clean, efficient code.
                </p>
              </div>

              {/* Tech stack floating badges */}
              <div>
                <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest font-semibold">Tech Stack</p>
                <div className="flex flex-wrap justify-start gap-3">
                  {techStack.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={idx}
                        className={`group tech-badge bg-gradient-to-br ${tech.bg} border-white/20 hover:border-white/60 hover:shadow-2xl transition-all duration-300`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <Icon className={`inline mr-2 ${tech.color} group-hover:animate-spin`} size={16} />
                        {tech.label}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white overflow-hidden shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/80 transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    <Mail size={20} />
                    Get In Touch
                  </span>
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-white/30 hover:border-cyan-400/60 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 group"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <Code2 size={20} />
                    View Projects
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 my-16 py-12 border-y border-white/10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 rounded-lg bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 group-hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="text-4xl mb-3 animate-bounce">{stat.icon}</div>
                    <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm md:text-base font-semibold">{stat.label}</p>
                    <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact info and social links */}
          <motion.div
            className="text-center space-y-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
              <a href="mailto:venukasirimanne1121@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30">
                <Mail size={18} className="group-hover:animate-bounce" />
                <span className="hidden sm:inline">venukasirimanne1121@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a href="tel:+94771292336" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30">
                <Phone size={18} className="group-hover:animate-bounce" />
                <span>+94 77 129 2336</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 group px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <MapPin size={18} className="text-purple-400" />
                <span>Panagoda, Sri Lanka</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/Siri200211"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/venuka-sirimanne21-"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
                whileHover={{ rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-wave"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
