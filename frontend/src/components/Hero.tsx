import { Github, Linkedin, Mail, MapPin, Phone, Code2, Database, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const techStack = [
    { icon: Code2, label: 'React', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-cyan-500/10' },
    { icon: Database, label: 'MongoDB', color: 'text-green-400', bg: 'from-green-500/20 to-green-500/10' },
    { icon: Zap, label: 'Node.js', color: 'text-yellow-400', bg: 'from-yellow-500/20 to-yellow-500/10' },
    { icon: Shield, label: 'TypeScript', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-500/10' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>

      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delay"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-40 h-40">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="text-5xl font-bold glow-text animate-color-pulse">VS</div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-4 animate-slide-up leading-tight">
              <span className="glow-text block">Venuka</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text block">Sirimanne</span>
            </h1>

            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 animate-slide-up animation-delay-200"></div>

            <p className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-4 animate-slide-up animation-delay-400">
              Software Developer
            </p>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Crafting cutting-edge web applications with MERN stack. Building scalable solutions that solve real-world problems with clean, efficient code.
            </p>

            {/* Tech stack floating badges */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest">Tech Stack</p>
              <div className="flex flex-wrap justify-start gap-3">
                {techStack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={idx}
                      className={`group tech-badge bg-gradient-to-br ${tech.bg} border-white/20 hover:border-white/60 hover:shadow-2xl`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className={`inline mr-2 ${tech.color} group-hover:animate-spin`} size={16} />
                      {tech.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white overflow-hidden shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-white/30 hover:border-white/60 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Code2 size={18} />
                  View Projects
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Contact info and social links */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="mailto:venukasirimanne1121@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group">
              <Mail size={18} className="group-hover:animate-neon-glow" />
              <span>venukasirimanne1121@gmail.com</span>
            </a>
            <a href="tel:+94771292336" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
              <Phone size={18} className="group-hover:animate-neon-glow" />
              <span>+94 77 129 2336</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400 group">
              <MapPin size={18} className="text-purple-400" />
              <span>Panagoda, Sri Lanka</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Siri200211"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/venuka-sirimanne21-"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-wave"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
