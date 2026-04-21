import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

// 3D Holographic ring around avatar
function HolographicRings() {
  const group = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.sin(t * 0.5) * 0.3 + 0.5;
      ring1Ref.current.rotation.z = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.cos(t * 0.3) * 0.4 + 0.8;
      ring2Ref.current.rotation.z = -t * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.1;
      ring3Ref.current.rotation.x = Math.sin(t * 0.4) * 0.2 + 1.2;
    }
    if (group.current) {
      group.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2, 0.015, 16, 100]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.3, 0.01, 16, 100]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.6, 0.008, 16, 100]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Floating data particles around profile
function DataParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#06b6d4");
    const violet = new THREE.Color("#8b5cf6");

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2.5 + Math.random() * 1.5;
      pos[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
      pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
      pos[i * 3 + 2] = Math.cos(phi) * radius;

      const mixFactor = Math.random();
      const color = cyan.clone().lerp(violet, mixFactor);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <HolographicRings />
      <DataParticles />
    </>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "6+", label: "Projects" },
    { value: "6", label: "Languages" },
    { value: "20+", label: "Repositories" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4 },
        0.2,
      )
        .fromTo(
          headingRef.current?.querySelectorAll(".word") || [],
          { opacity: 0, y: 120, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.08, duration: 1.2 },
          0.5,
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          1.0,
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.8 },
          1.2,
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.8 },
          1.5,
        );

      // Parallax on scroll
      gsap.to(avatarRef.current, {
        y: -80,
        opacity: 0.3,
        scale: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(headingRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Floating orbs animation
      if (orbsRef.current) {
        const orbs = orbsRef.current.querySelectorAll(".orb");
        orbs.forEach((orb, i) => {
          gsap.to(orb, {
            y: `${20 + i * 10}`,
            x: `${10 - i * 8}`,
            rotation: 360,
            duration: 15 + i * 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(2,2,8)] via-[rgb(5,5,15)] to-[rgb(8,8,18)]" />

        {/* Aurora orbs */}
        <div ref={orbsRef} className="absolute inset-0 overflow-hidden">
          <div className="orb absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
          <div className="orb absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[120px]" />
          <div className="orb absolute bottom-[10%] left-[40%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.02] blur-[150px]" />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* 3D Avatar with holographic rings */}
          <div ref={avatarRef} className="relative mb-14 group">
            <div className="relative w-44 h-44 md:w-56 md:h-56">
              {/* 3D Canvas for rings */}
              <div className="absolute -inset-16 pointer-events-none">
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 45 }}
                  dpr={[1, 2]}
                  gl={{ antialias: true, alpha: true }}
                >
                  <HeroScene />
                </Canvas>
              </div>

              {/* Morphing glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 rounded-full blur-3xl animate-morph opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />

              {/* Hexagonal frame lines */}
              <svg
                className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] animate-spin-slower opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                viewBox="0 0 200 200"
              >
                <polygon
                  points="100,10 178,55 178,145 100,190 22,145 22,55"
                  fill="none"
                  stroke="url(#hex-gradient)"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient
                    id="hex-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Avatar image with holographic overlay */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.08] group-hover:border-white/20 transition-all duration-700">
                <img
                  src="/images/projects/ME.png"
                  alt="Venuka Sirimanne"
                  className="w-full h-full object-cover scale-110 group-hover:scale-[1.15] transition-transform duration-700"
                />
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-violet-900/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

                {/* Scan line effect */}
                <div
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6,182,212,0.1) 3px, rgba(6,182,212,0.1) 4px)",
                  }}
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-black/90 border border-cyan-500/20 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-glow" />
                <span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-wider">
                  Available
                </span>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-4 h-4 border-l border-t border-cyan-500/30 rounded-tl-sm" />
              <div className="absolute -top-3 -right-3 w-4 h-4 border-r border-t border-cyan-500/30 rounded-tr-sm" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 border-l border-b border-violet-500/30 rounded-bl-sm" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-r border-b border-violet-500/30 rounded-br-sm" />
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headingRef}
            className="mb-6"
            style={{ perspective: "800px" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.85]">
              <span className="word inline-block text-white">Venuka</span>{" "}
              <span className="word inline-block text-gradient">Sirimanne</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-10 space-y-3">
            <p className="text-lg md:text-xl text-white/40 font-light max-w-2xl">
              Software Engineering undergraduate building scalable web apps
              across
              <span className="text-cyan-400/80"> React</span>,
              <span className="text-blue-400/80"> .NET</span>,
              <span className="text-violet-400/80"> Angular</span> &amp;
              <span className="text-emerald-400/80"> Spring Boot</span>
            </p>
            <p className="text-sm font-mono text-white/20 tracking-wider">
              &lt; Based in Sri Lanka • Open to Opportunities /&gt;
            </p>
          </div>

          {/* CTA buttons */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <MagneticButton
              href="#contact"
              className="group relative px-8 py-4 rounded-2xl font-semibold text-sm text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[1px] bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-500" />
              <span className="relative flex items-center gap-2">
                <Mail size={16} />
                Get In Touch
              </span>
            </MagneticButton>

            <MagneticButton
              href="#projects"
              className="px-8 py-4 rounded-2xl font-semibold text-sm text-white/80 glass-hover hover:text-white"
            >
              View Projects
            </MagneticButton>

            <div className="flex items-center gap-2 ml-2">
              <MagneticButton
                href="https://github.com/Siri200211"
                className="p-3 rounded-xl glass-hover group"
              >
                <Github
                  size={18}
                  className="text-white/40 group-hover:text-white transition-colors duration-300"
                />
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/venuka-sirimanne21-"
                className="p-3 rounded-xl glass-hover group"
              >
                <Linkedin
                  size={18}
                  className="text-white/40 group-hover:text-white transition-colors duration-300"
                />
              </MagneticButton>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex items-center gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group relative">
                {/* Glow behind stat */}
                <div className="absolute -inset-4 bg-cyan-500/[0.03] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="relative text-3xl md:text-4xl font-black text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="relative text-xs font-mono text-white/30 uppercase tracking-wider group-hover:text-white/50 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown size={14} className="text-white/20 animate-bounce" />
      </div>
    </section>
  );
}
