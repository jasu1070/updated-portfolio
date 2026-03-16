
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Settings } from 'lucide-react';
import { ResumeData } from '../types';

interface ExpertiseProps {
  DATA: ResumeData;
}

const Expertise: React.FC<ExpertiseProps> = ({ DATA }) => {
  return (
    <section id="pillars" className="py-32 px-6 bg-[#f1f5f9] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-200/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
       
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
             <div>
                <div className="text-sky-600 font-black text-xs tracking-[0.4em] mb-8 uppercase flex items-center gap-4">
                   <div className="w-10 h-[2px] bg-sky-600" /> Professional Silos
                </div>
                <h2 className="text-6xl md:text-8xl font-black font-heading text-slate-950 mb-10 tracking-tighter leading-[0.9]">Strategic <br />Expertise.</h2>
                <p className="text-slate-600 text-xl leading-relaxed font-medium mb-12">
                   A comprehensive focus on the optimization of Tier-1 industrial production systems, from machine programming to final quality audits.
                </p>
                <div className="space-y-4">
                   {[
                     { icon: <Cpu />, title: "Precision Machining", desc: "Expert in CNC Turning, Milling, and Punching (Prima Power PS 1225)." },
                     { icon: <ShieldCheck />, title: "Quality Assurance", desc: "Non-negotiable compliance with ISO, GMP, and elite safety SOPs." },
                     { icon: <Settings />, title: "Ops Management", desc: "Stretching efficiencies through Lean Manufacturing and 5S workflows." }
                   ].map((item, i) => (
                     <motion.div 
                       key={i} 
                       initial={{ opacity: 0, x: -20 }} 
                       whileInView={{ opacity: 1, x: 0 }} 
                       transition={{ delay: i * 0.1 }}
                       className="flex gap-6 p-8 bg-white shadow-xl shadow-slate-200/50 rounded-3xl border border-slate-200"
                     >
                        <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">{item.icon}</div>
                        <div>
                           <h4 className="text-slate-900 font-black text-lg mb-1 tracking-tight uppercase">{item.title}</h4>
                           <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-6 no-print">
                <motion.div initial={{ y: 0 }} animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="space-y-6">
                   <div className="aspect-[4/5] bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-white/5">
                       <img src={DATA.images.cnc} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="CNC Operations" loading="lazy" />
                      <div className="absolute inset-0 bg-sky-600/10" />
                   </div>
                   <div className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-xl">
                      <div className="text-sky-600 font-black text-3xl mb-2">98%</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">UPTIME LOGGED</div>
                   </div>
                </motion.div>
                <motion.div initial={{ y: 0 }} animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="pt-20 space-y-6">
                   <div className="p-8 bg-sky-600 border border-sky-500 rounded-[2rem] shadow-xl text-white">
                      <div className="text-white font-black text-3xl mb-2">0.0</div>
                      <div className="text-[10px] font-black text-sky-200 uppercase tracking-widest leading-none">MAJOR INCIDENTS</div>
                   </div>
                    <div className="aspect-[4/5] bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-white/5">
                       <img src={DATA.images.quality} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="QC Standard" loading="lazy" />
                       <div className="absolute inset-0 bg-emerald-600/10" />
                    </div>
                 </motion.div>
              </div>

              {/* KEY STRENGTHS: THE PROFESSIONAL DNA */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="mt-20 p-10 bg-white border border-slate-200 rounded-[3rem] shadow-2xl relative overflow-hidden group no-print"
              >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-10" />
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">Core Strengths.</h3>
                       <p className="text-slate-500 font-medium text-sm">Non-technical drivers of success.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                       {DATA.strengths.map((strength, idx) => (
                          <div key={idx} className="px-6 py-3 bg-slate-950 text-white font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg hover:bg-sky-600 transition-colors">
                             {strength.name}
                          </div>
                       ))}
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
     </section>
  );
};

export default Expertise;
