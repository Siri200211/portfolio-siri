import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Splash from './components/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <Splash key="splash" onComplete={handleSplashComplete} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black"
        >
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <About />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
