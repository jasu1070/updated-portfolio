
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      
      {/* Moving noise/grain texture (CSS simulation) */}
      <div className="absolute inset-0 opacity-[0.02] contrast-150" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-600/5 blur-[150px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1.1, 0.95, 1.05, 1.1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/5 blur-[150px] rounded-full"
      />

      {/* Industrial Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />
    </div>
  );
};

export default Background;
