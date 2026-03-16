
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-slate-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mb-12"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-sky-600 rounded-3xl flex items-center justify-center font-black text-3xl md:text-5xl text-white shadow-[0_0_50px_rgba(2,132,199,0.2)] border border-sky-400">
          JP
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10px] border-2 border-dashed border-sky-600/20 rounded-[2.5rem]"
        />
      </motion.div>

      <div className="w-64 md:w-80 space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-slate-900 font-black font-heading text-xs tracking-[0.2em] uppercase">Initializing System</h2>
            <p className="text-sky-600/60 text-[10px] font-bold uppercase tracking-widest">Precision Operations v1.1.0</p>
          </div>
          <span className="text-sky-600 font-black text-xl font-heading">{progress}%</span>
        </div>
        
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300 p-[2px]">
          <motion.div
            className="h-full bg-sky-600 rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-12 flex gap-12 opacity-30">
        {['CNC', 'GMP', 'ISO', '5S'].map((tech) => (
          <span key={tech} className="text-slate-400 text-[10px] font-black tracking-[0.5em]">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
