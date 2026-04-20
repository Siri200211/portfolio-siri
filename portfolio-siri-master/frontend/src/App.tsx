import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const sectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function ScrollSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        ...sectionVariants,
        visible: {
          ...sectionVariants.visible,
          transition: {
            ...sectionVariants.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
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

                <ScrollSection delay={0.1}>
                  <Projects />
                </ScrollSection>

                <ScrollSection delay={0.1}>
                  <Experience />
                </ScrollSection>

                <ScrollSection delay={0.1}>
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
