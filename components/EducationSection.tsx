
import React from 'react';
import { ResumeData } from '../types';

interface EducationSectionProps {
  DATA: ResumeData;
}

const EducationSection: React.FC<EducationSectionProps> = ({ DATA }) => {
  return (
    <section id="education" className="py-20 md:py-40 px-6 max-w-7xl mx-auto border-t border-slate-200 no-print">
        <div className="text-center mb-16 md:mb-32">
           <div className="text-sky-500 font-black text-[9px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-8">Formal Credentials</div>
           <h2 className="text-3xl md:text-[10rem] font-black font-heading text-slate-900 mb-6 uppercase tracking-tighter leading-none">Record.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
           {DATA.education.map((edu, i) => (
              <div key={i} className="p-6 md:p-12 bg-white border border-slate-200 rounded-2xl md:rounded-[3rem] hover:bg-slate-50 transition-colors relative overflow-hidden group">
                 <div className="text-sky-500 font-black text-[9px] mb-3 md:mb-6 uppercase tracking-widest bg-sky-500/10 inline-block px-3 py-1 rounded-lg italic">Class of {edu.year}</div>
                 <h3 className="text-lg md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-2 md:mb-4 leading-tight relative z-10">{edu.degree}</h3>
                 <div className="text-slate-500 text-[9px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 md:mb-8 relative z-10">{edu.institution}</div>
                 {edu.percentage && (
                   <div className="absolute -bottom-1 -right-1 text-4xl md:text-7xl font-black text-slate-100 group-hover:text-sky-500/10 transition-colors uppercase tracking-widest pointer-events-none">
                     {edu.percentage}
                   </div>
                 )}
              </div>
           ))}
        </div>
    </section>
  );
};

export default EducationSection;
