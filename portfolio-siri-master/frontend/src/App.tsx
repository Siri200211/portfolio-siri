import { useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Scene3D from "./components/Scene3D";

// Cinematic page entrance
const pageEntrance = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 40,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      staggerChildren: 0.12,
    },
  },
};

// ... [Keep pageEntrance]

function ScrollSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 3D "Fly Through" effect
  // scale: Starts pushed back, normalizes, pushes forward on exit
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 1.1]);
  
  // rotateX: Tilts back when entering, flat in center, tilts forward when exiting
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["15deg", "0deg", "0deg", "-15deg"]);
  
  // z: Physically pushes into the screen on edges
  const z = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-400, 0, 0, 200]);
  
  // filter: deep blur entry and exit
  const filter = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]
  );
  
  // opacity: fade in and fade out smoothly
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  
  // y: stronger parallax
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div className="w-full" style={{ perspective: "2000px" }}>
      <motion.section
        ref={ref}
        style={{ 
          scale, 
          rotateX, 
          z, 
          filter, 
          opacity, 
          y,
          transformStyle: "preserve-3d" 
        }}
        className={className}
      >
        {children}
      </motion.section>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* Custom cursor - desktop only */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <motion.div
            key="main"
            variants={pageEntrance}
            initial="hidden"
            animate="visible"
          >
            <SmoothScroll>
              {/* Ambient 3D Background */}
              <Scene3D />

              {/* Subtle noise texture */}
              <div className="noise-overlay" />

              {/* Main content */}
              <div className="relative z-[2]">
                <Navbar />
                <Hero />

                {/* Divider */}
                <div className="relative h-px mx-auto max-w-5xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                </div>

                <ScrollSection>
                  <Skills />
                </ScrollSection>

                <div className="relative h-px mx-auto max-w-5xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                </div>

                <ScrollSection>
                  <Projects />
                </ScrollSection>

                <ScrollSection>
                  <Experience />
                </ScrollSection>

                <ScrollSection>
                  <About />
                </ScrollSection>

                <div className="relative h-px mx-auto max-w-5xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                </div>

                <ScrollSection>
                  <Contact />
                </ScrollSection>

                <Footer />
              </div>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
