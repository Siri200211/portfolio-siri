import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".contact-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
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
      id="contact"
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04]"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.04]"></div>
      </div>
      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <TextReveal
              className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
              scrub
            >
              Get In Touch
            </TextReveal>
            <p className="text-gray-500 text-base">
              Let's discuss how I can contribute to your team
            </p>
          </div>

          {/* Contact cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
            style={{ perspective: "1000px" }}
          >
            <a
              href="mailto:venukasirimanne1121@gmail.com"
              className="contact-card group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-cyan-500/20 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl w-fit mb-3 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow duration-500">
                  <Mail size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-base mb-1 text-cyan-300">
                  Email
                </h3>
                <p className="text-gray-500 text-sm break-all">
                  venukasirimanne1121@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+94771292336"
              className="contact-card group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-green-500/20 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl w-fit mb-3 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Phone size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-base mb-1 text-cyan-300">
                  Mobile
                </h3>
                <p className="text-gray-500 text-sm">+94 77 129 2336</p>
              </div>
            </a>

            <div className="contact-card group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 transition-all duration-700">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl w-fit mb-3 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <MapPin size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-base mb-1 text-cyan-300">
                Location
              </h3>
              <p className="text-gray-500 text-sm">Panagoda, Sri Lanka</p>
            </div>

            <a
              href="https://github.com/Siri200211"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl w-fit mb-3 shadow-[0_0_20px_rgba(100,116,139,0.2)]">
                  <Github size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-base mb-1 text-cyan-300">
                  GitHub
                </h3>
                <p className="text-gray-500 text-sm">github.com/Siri200211</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-all duration-700"
          >
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

            <h3 className="text-xl font-bold mb-8 text-center text-white">
              Send a <span className="text-cyan-400">Message</span>
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/30 transition-all text-white placeholder-gray-600 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/30 transition-all text-white placeholder-gray-600 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/30 transition-all text-white placeholder-gray-600 text-sm"
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/30 transition-all resize-none text-white placeholder-gray-600 text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-semibold text-white transition-all duration-500 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </MagneticButton>
            </form>
          </div>

          {/* Social */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm mb-6">Connect on social</p>
            <div className="flex justify-center gap-4">
              <MagneticButton
                href="https://github.com/Siri200211"
                className="p-4 bg-white/[0.02] border border-white/5 rounded-full hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] group"
              >
                <Github
                  size={24}
                  className="text-gray-600 group-hover:text-cyan-400 transition-colors"
                />
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/venuka-sirimanne21-"
                className="p-4 bg-white/[0.02] border border-white/5 rounded-full hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_25px_rgba(96,165,250,0.1)] group"
              >
                <Linkedin
                  size={24}
                  className="text-gray-600 group-hover:text-blue-400 transition-colors"
                />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
