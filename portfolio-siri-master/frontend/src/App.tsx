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

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {/* Custom cursor - only on desktop */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={handleSplashComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="min-h-screen bg-black relative"
          >
            <SmoothScroll>
              {/* 3D Background Scene */}
              <Scene3D />

              {/* Noise grain overlay */}
              <div className="fixed inset-0 pointer-events-none z-[1] noise-overlay opacity-[0.015]"></div>

              {/* Main content */}
              <div className="relative z-[2]">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <About />
                <Contact />
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
