import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 md:w-12 md:h-12 fill-slate-900"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Precision Frame */}
        <rect 
          x="10" y="10" width="80" height="80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-slate-200"
        />
        
        {/* Precision Notches (Corners) */}
        <path d="M10 20V10H20" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-900" />
        <path d="M80 10H90V20" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-900" />
        <path d="M90 80V90H80" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-900" />
        <path d="M20 90H10V80" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-900" />

        {/* The "JP" Geometric Unit */}
        <path 
          d="M30 30H55V60C55 65.5 50.5 70 45 70H30V60H45V40H30V30Z" 
          className="fill-slate-900"
        />
        <path 
          d="M60 30H75V50H60V30ZM60 55H75V70H60V55Z" 
          className="fill-sky-600"
        />

        {/* Calibration Scan Line */}
        <motion.rect
          x="12" y="12" width="76" height="2"
          className="fill-sky-400/30"
          animate={{
            y: [0, 74, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Status Dot */}
        <circle cx="82" cy="18" r="3" className="fill-emerald-500 shadow-xl" />
      </svg>
    </div>
  );
};

export default Logo;
