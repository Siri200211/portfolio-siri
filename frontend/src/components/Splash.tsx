import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Delay to show 100%
          return 100;
        }
        return prev + 2; // Increase by 2% every 30ms for ~1.5s, but adjust for 3s
      });
    }, 30); // 30ms * 100 = 3s

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Welcome
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          to My Portfolio
        </motion.p>
        <div className="w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 mb-4">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-gray-400">{progress}%</p>
        </div>
      </div>
    </motion.div>
  );
}