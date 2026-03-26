
import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';

interface BentoGalleryProps {
  DATA: ResumeData;
}

const BentoGallery: React.FC<BentoGalleryProps> = ({ DATA }) => {
  return (
    <section id="gallery" className="py-24 px-6 bg-white relative overflow-hidden no-print">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
       <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
             <h2 className="text-slate-500 font-black text-xs uppercase tracking-[0.5em]">Live Operations Showcase</h2>
             <div className="flex-1 h-[1px] bg-slate-900" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
             {/* BENTO UNIT 01: MAIN FACTORY */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
                className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl"
              >
                 <img src={DATA.images.factory} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Factory Floor" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                   <div className="text-sky-500 font-black text-[10px] tracking-[0.4em] mb-2 uppercase">Core Facility</div>
                   <h3 className="text-slate-900 text-3xl font-black tracking-tighter uppercase">Operations Hub</h3>
                </div>
             </motion.div>

             {/* BENTO UNIT 02: CNC DETAIL */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.1 }}
                className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl"
              >
                 <img src={DATA.images.cnc} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="CNC Machining" loading="lazy" />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 right-6">
                   <div className="px-4 py-2 bg-slate-950/80 backdrop-blur-md rounded-xl text-sky-400 font-black text-[10px] tracking-widest border border-white/5">0.001mm TOLERANCE</div>
                </div>
             </motion.div>

             {/* BENTO UNIT 03: QUALITY */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
                className="relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl"
              >
                 <img src={DATA.images.quality} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Quality Control" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-transparent" />
             </motion.div>

             {/* BENTO UNIT 04: PRECISION */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
                className="relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl"
              >
                 <img src={DATA.images.measure} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Measurement Tech" loading="lazy" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-slate-600 font-black text-[10px] tracking-widest uppercase text-center">Verified Audit Standard</p>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default BentoGallery;
