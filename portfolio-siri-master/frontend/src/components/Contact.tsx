import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 100, z: -200, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          z: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 80, z: -200, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          z: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "venukasirimanne1121@gmail.com",
      href: "mailto:venukasirimanne1121@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 129 2336",
      href: "tel:+94771292336",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Panagoda, Sri Lanka",
      href: null,
    },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/Siri200211", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/venuka-sirimanne21-",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="contact-header text-center mb-16">
            <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-4">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-white/30 max-w-lg mx-auto text-sm">
              Have a project in mind or want to collaborate? I'd love to hear
              from you.
            </p>
          </div>

          <div className="contact-content grid md:grid-cols-5 gap-8">
            {/* Contact info side */}
            <div className="md:col-span-2 space-y-4">
              {/* Contact cards */}
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                const Wrapper = info.href ? "a" : "div";
                return (
                  <Wrapper
                    key={idx}
                    {...(info.href ? { href: info.href } : {})}
                    className="block p-5 rounded-2xl glass-hover group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan-500/20 transition-colors duration-500">
                        <Icon
                          size={16}
                          className="text-white/40 group-hover:text-cyan-400 transition-colors duration-500"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-white/20 uppercase">
                          {info.label}
                        </p>
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}

              {/* Socials */}
              <div className="pt-4">
                <p className="text-[10px] font-mono text-white/20 uppercase mb-3 px-1">
                  Socials
                </p>
                <div className="flex gap-2">
                  {socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <MagneticButton
                        key={idx}
                        href={social.href}
                        className="p-3 rounded-xl glass-hover group"
                      >
                        <Icon
                          size={18}
                          className="text-white/30 group-hover:text-white/70 transition-colors"
                        />
                      </MagneticButton>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl glass-hover space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-white/20 uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-white/20 uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors duration-300"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-mono text-white/20 uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <MagneticButton className="w-full relative group px-6 py-4 rounded-xl font-semibold text-sm text-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-500" />
                  <span className="relative flex items-center justify-center gap-2">
                    {sending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </span>
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
