
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
  DATA: ResumeData;
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ DATA, scrollTo }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-slate-50 no-print">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 20 }}
          src={DATA.images.factory} 
          className="w-full h-full object-cover grayscale mix-blend-multiply" 
          alt="Industrial Production Flow" 
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-slate-50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-sky-600/30 bg-white shadow-sm text-sky-800 font-black text-[11px] uppercase tracking-[0.4em] mb-12 no-print"
         >
           <span className="w-2 h-2 rounded-full bg-sky-600 shadow-[0_0_12px_rgba(2,132,199,0.4)]" />
           Industrial Operations Expert
         </motion.div>
         
         <div className="flex flex-col md:flex-row items-end gap-10 md:gap-20">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-heading text-slate-900 leading-tight lg:leading-[0.85] tracking-tighter"
            >
              {DATA.name.split(' ')[0]}<br />
              <span className="text-sky-600">{DATA.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-sm mb-6"
            >
               <p className="text-slate-600 text-xl md:text-2xl font-bold leading-tight tracking-tight mb-8">
                 Precision-first leadership across <span className="text-sky-600 underline decoration-sky-300 decoration-4 underline-offset-4 font-black">9+ years</span> in Tier-1 manufacturing.
               </p>
               <div className="flex gap-4 no-print">
                  <button onClick={() => scrollTo('gallery')} className="w-14 h-14 bg-sky-600 rounded-full flex items-center justify-center text-white hover:bg-sky-700 transition-all shadow-xl shadow-sky-200">
                    <ArrowRight size={24} />
                  </button>
                  <div className="flex flex-col justify-center">
                     <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none mb-1">Explore Operations</span>
                     <span className="text-slate-400 text-[8px] font-extrabold uppercase tracking-widest">Scroll for Showcase</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
