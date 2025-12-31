import { Briefcase, GraduationCap, Award, Trophy } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="group glass-effect-dark rounded-2xl p-8 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Work Experience</h3>
              </div>

              <div className="border-l-4 border-cyan-400/50 pl-6 py-4">
                <h4 className="text-xl font-bold text-white mb-2">
                  Sri Lanka Telecom
                </h4>
                <p className="text-cyan-300 font-semibold mb-3">Intern Software Developer</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2 hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Developed and implemented the SLT PEOTV Sales Reports and Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Collaborated with the team to ensure seamless integration and deployment</span>
                  </li>
                  <li className="flex items-start gap-2 hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Enhanced data accessibility and decision-making for the marketing team</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group glass-effect-dark rounded-2xl p-8 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-green-400/50 pl-6 py-2 hover:border-green-400 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-white mb-1">
                    BSc (Hons) in Information Technology
                  </h4>
                  <p className="text-green-400 font-semibold mb-2">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <p className="text-gray-400">June 2022 - Present</p>
                </div>

                <div className="border-l-4 border-green-400/50 pl-6 py-2 hover:border-green-400 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-white mb-1">
                    GCE Advanced Level
                  </h4>
                  <p className="text-green-400 font-semibold mb-2">
                    Sri Sumangala College, Panadura
                  </p>
                  <p className="text-gray-400 mb-2">2019 - 2022</p>
                  <p className="text-sm text-gray-500">
                    Economics - A, Business Studies - B, Accounting - B, General English - C
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect-dark rounded-2xl p-8 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                  <Trophy size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-white/5 hover:border-white/20">
                  <Award size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Man of the Match</p>
                    <p className="text-sm text-gray-400">Panadura Cricket Club Tournament 2017</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-white/5 hover:border-white/20">
                  <Award size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Remarkable Proficiency Level</p>
                    <p className="text-sm text-gray-400">Grade 13 Commerce Stream (2019)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-white/5 hover:border-white/20">
                  <Award size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Champions</p>
                    <p className="text-sm text-gray-400">SCC The Hundred Cricket Tournament (2023-2024)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect-dark rounded-2xl p-8 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl text-white">
                  <Trophy size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Extracurricular</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-white/5 hover:border-white/20">
                  <span className="text-2xl">🏏</span>
                  <div>
                    <p className="font-semibold text-white">Premier's Cricket Club Koswatta</p>
                    <p className="text-sm text-gray-400">2022 - Present</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-white/5 hover:border-white/20">
                  <span className="text-2xl">🏏</span>
                  <div>
                    <p className="font-semibold text-white">SLIIT Campus Cricket Team</p>
                    <p className="text-sm text-gray-400">2022 - Present</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 border border-white/5 hover:border-white/20">
                  <span className="text-2xl">🏏</span>
                  <div>
                    <p className="font-semibold text-white">Panadura Cricket Club</p>
                    <p className="text-sm text-gray-400">2015 - 2017</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
