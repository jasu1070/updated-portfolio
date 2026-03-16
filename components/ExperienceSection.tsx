
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { ResumeData } from '../types';

interface ExperienceSectionProps {
  DATA: ResumeData;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ DATA }) => {
  return (
    <section id="experience" className="py-40 px-6 bg-white relative">
       <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
             <div className="max-w-2xl">
                <div className="text-sky-600 font-black text-xs tracking-[0.4em] mb-8 uppercase flex items-center gap-4">
                   <div className="w-10 h-[2px] bg-sky-600" /> Professional Track
                </div>
                <h2 className="text-7xl md:text-9xl font-black font-heading text-slate-950 tracking-tighter leading-none mb-6">Milestones.</h2>
                <p className="text-slate-500 text-xl font-medium">Official verified record from 2016 to the present day.</p>
             </div>
             <div className="text-slate-400 font-black text-4xl hidden md:block">09+ YEARS</div>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-24">
             <div className="space-y-32">
                {DATA.experience.map((exp, i) => (
                   <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative pl-16 border-l-2 border-slate-100 group">
                      <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-sky-600 group-hover:scale-125 transition-transform" />
                      <div className="text-sky-600 font-black text-[11px] uppercase tracking-[0.4em] mb-4">{exp.period}</div>
                      <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">{exp.role}</h3>
                      <div className="text-slate-700 font-black text-[11px] uppercase tracking-[0.2em] mb-10 underline decoration-sky-500/20 underline-offset-4">{exp.company}</div>
                      <ul className="space-y-4">
                         {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="text-slate-600 text-lg leading-relaxed flex items-start gap-5">
                               <div className="mt-2.5 w-2 h-2 rounded-full bg-slate-200 flex-shrink-0" />
                               {desc}
                            </li>
                         ))}
                      </ul>
                   </motion.div>
                ))}
             </div>

             <div id="skills" className="no-print">
                <div className="sticky top-32 space-y-16">
                   <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-12 flex items-center gap-4">
                         <span className="w-2 h-8 bg-sky-600 block" /> Proficiency
                      </h3>
                      <div className="space-y-10">
                         {DATA.skills.map((skill, i) => (
                            <div key={i} className="space-y-4">
                               <div className="flex justify-between font-black uppercase text-[11px] tracking-[0.2em] text-slate-900">
                                  <span>{skill.name}</span>
                                  <span className="text-sky-600 underline decoration-sky-200 decoration-2 underline-offset-4">{skill.level}%</span>
                               </div>
                               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} className="h-full bg-slate-900 shadow-[0_0_15px_rgba(15,23,42,0.2)]" />
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>

                   <div className="p-12 bg-slate-950 rounded-[3rem] shadow-4xl group">
                      <h4 className="text-white text-3xl font-black mb-4 tracking-tighter">Full Records.</h4>
                      <p className="text-slate-400 text-sm font-medium mb-12 leading-relaxed">Download the comprehensive verified industrial credentials in professional PDF format.</p>
                      <a 
                        href={DATA.resume_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-sky-600 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-slate-950 transition-all w-full justify-center"
                      >
                        Access PDF Dossier <Download size={18} />
                      </a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default ExperienceSection;
