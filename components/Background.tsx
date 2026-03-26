
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Light industrial silver base */}
      <div className="absolute inset-0 bg-slate-50" />
      
      {/* Moving noise/grain texture (Subtle for light theme) */}
      <div className="absolute inset-0 opacity-[0.03] contrast-100" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Animated industrial glows (Native CSS for performance) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-200/20 blur-[150px] rounded-full bg-glow-1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-200/20 blur-[150px] rounded-full bg-glow-2" />

      {/* Industrial Grid Lines (Inverted for light theme) */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />
    </div>
  );
};

export default Background;
