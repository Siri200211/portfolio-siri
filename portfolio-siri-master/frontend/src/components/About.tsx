import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image 3D reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, rotateY: -40, x: -100 },
        {
          opacity: 1,
          rotateY: 0,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // Content reveal
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".about-reveal");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
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
      id="about"
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04]"></div>
      </div>
      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <TextReveal
              className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text"
              scrub
            >
              About Me
            </TextReveal>
            <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-16 items-center"
            style={{ perspective: "1200px" }}
          >
            {/* Photo */}
            <div
              ref={imageRef}
              className="flex justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 group">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[2px] animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <div className="text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-700">
                      VS
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl -z-10"></div>

                {/* Corner accents */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/50"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/50"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50"></div>
              </div>
            </div>

            {/* Details */}
            <div ref={contentRef} className="space-y-6">
              <h3 className="about-reveal text-3xl font-bold text-white">
                Venuka Sirimanne
              </h3>

              <p className="about-reveal text-gray-400 leading-relaxed text-sm md:text-base">
                Software Engineering undergraduate with hands-on experience in
                both MERN stack and enterprise technologies including Angular,
                .NET, and MS SQL. Skilled in building scalable, secure web
                applications, RESTful APIs, and data-driven dashboards using
                modern frontend frameworks and clean architecture principles.
              </p>

              <p className="about-reveal text-gray-500 leading-relaxed text-sm">
                Proficient across JavaScript, TypeScript, and C#, with strong
                experience in full-stack development, database design, and
                cloud-based tools. Demonstrates strong problem-solving ability
                through real-world and academic projects with a focus on backend
                engineering.
              </p>

              <div className="about-reveal space-y-3 py-4">
                <div className="flex items-center text-gray-400 hover:text-cyan-300 transition-colors duration-300 group">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300 group">
                  <Mail className="w-4 h-4 mr-3 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">venukasirimanne1121@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-purple-300 transition-colors duration-300 group">
                  <Phone className="w-4 h-4 mr-3 text-purple-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+94 77 129 2336</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="about-reveal flex gap-4 pt-4">
                <a
                  href="https://github.com/Siri200211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group"
                >
                  <Github className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/venuka-sirimanne21-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/[0.03] border border-white/10 hover:border-blue-500/50 rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(96,165,250,0.15)] group"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="mailto:venukasirimanne1121@gmail.com"
                  className="p-3 bg-white/[0.03] border border-white/10 hover:border-purple-500/50 rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group"
                >
                  <Mail className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
