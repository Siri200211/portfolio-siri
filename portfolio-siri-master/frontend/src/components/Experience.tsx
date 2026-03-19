import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Award, Trophy } from "lucide-react";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items reveal
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".timeline-item");
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: i % 2 === 0 ? -80 : 80,
              rotateY: i % 2 === 0 ? -10 : 10,
            },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        // Animate the timeline line growing
        const line = timelineRef.current.querySelector(".timeline-line");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 70%",
                end: "bottom 30%",
                scrub: 1,
              },
            },
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04]"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04]"></div>
      </div>
      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <TextReveal
              className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
              scrub
            >
              Experience & Education
            </TextReveal>
          </div>

          <div
            ref={timelineRef}
            className="relative"
            style={{ perspective: "1200px" }}
          >
            {/* Timeline line */}
            <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-purple-500/50 -translate-x-1/2 origin-top"></div>

            <div className="space-y-16">
              {/* Work Experience */}
              <div className="timeline-item grid md:grid-cols-2 gap-8 items-start">
                <div className="md:text-right">
                  <div className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-500/20 transition-all duration-700 group w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Briefcase size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Work Experience
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[calc(50%+6px)] top-8 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/15 transition-all duration-700">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Sri Lanka Telecom
                    </h4>
                    <p className="text-cyan-400 font-medium text-sm mb-4">
                      Intern Software Developer
                    </p>
                    <ul className="space-y-3 text-gray-400 text-sm">
                      <li className="flex items-start gap-2 hover:text-gray-300 transition-colors">
                        <span className="text-cyan-500 mt-1 text-xs">▸</span>
                        Developed SLT PEOTV Sales Reports and Dashboard
                      </li>
                      <li className="flex items-start gap-2 hover:text-gray-300 transition-colors">
                        <span className="text-cyan-500 mt-1 text-xs">▸</span>
                        Collaborated for seamless integration and deployment
                      </li>
                      <li className="flex items-start gap-2 hover:text-gray-300 transition-colors">
                        <span className="text-cyan-500 mt-1 text-xs">▸</span>
                        Enhanced data accessibility for marketing team
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="timeline-item grid md:grid-cols-2 gap-8 items-start">
                <div className="md:col-start-2">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/15 transition-all duration-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Education
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="pl-4 border-l-2 border-green-500/30 hover:border-green-400 transition-colors duration-500">
                        <h4 className="text-lg font-bold text-white mb-1">
                          BSc (Hons) in IT
                        </h4>
                        <p className="text-green-400 text-sm font-medium mb-1">
                          SLIIT
                        </p>
                        <p className="text-gray-600 text-xs font-mono">
                          June 2022 - Present
                        </p>
                      </div>

                      <div className="pl-4 border-l-2 border-green-500/30 hover:border-green-400 transition-colors duration-500">
                        <h4 className="text-lg font-bold text-white mb-1">
                          GCE Advanced Level
                        </h4>
                        <p className="text-green-400 text-sm font-medium mb-1">
                          Sri Sumangala College
                        </p>
                        <p className="text-gray-600 text-xs font-mono mb-1">
                          2019 - 2022
                        </p>
                        <p className="text-gray-600 text-xs">
                          Economics A | Business Studies B | Accounting B
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="timeline-item grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/15 transition-all duration-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        <Trophy size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Achievements
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          title: "Man of the Match",
                          sub: "Panadura Cricket Club 2017",
                        },
                        {
                          title: "Remarkable Proficiency Level",
                          sub: "Grade 13 Commerce (2019)",
                        },
                        {
                          title: "Champions",
                          sub: "SCC The Hundred Cricket (2023-2024)",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-orange-500/20 transition-all duration-500"
                        >
                          <Award
                            size={16}
                            className="text-orange-400 mt-0.5 flex-shrink-0"
                          />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/15 transition-all duration-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl text-white shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                        <Trophy size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Extracurricular
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          emoji: "🏏",
                          title: "Premier's Cricket Club Koswatta",
                          sub: "2022 - Present",
                        },
                        {
                          emoji: "🏏",
                          title: "SLIIT Campus Cricket Team",
                          sub: "2022 - Present",
                        },
                        {
                          emoji: "🎥",
                          title: "Videography (Camera & Drone)",
                          sub: "2025 - Present",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-pink-500/20 transition-all duration-500"
                        >
                          <span className="text-lg">{item.emoji}</span>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
