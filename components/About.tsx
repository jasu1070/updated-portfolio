
import React from 'react';
import { ShieldCheck, Settings, Package } from 'lucide-react';
import { ResumeData } from '../types';

interface AboutProps {
  DATA: ResumeData;
}

const About: React.FC<AboutProps> = ({ DATA }) => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
       <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5">
              <div className="relative p-4 bg-white border border-slate-200 rounded-[3rem] shadow-4xl group">
                 <img src={DATA.profile_image} className="w-full h-auto rounded-[2.5rem] grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-1000" alt={`Professional portrait of ${DATA.name}`} loading="lazy" />
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 p-8 bg-sky-600 rounded-2xl shadow-4xl text-white font-black no-print">
                   <div className="text-4xl mb-1">09+</div>
                   <div className="text-[8px] uppercase tracking-[0.3em]">SERVICE YEARS</div>
                </div>
             </div>
          </div>
           <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-8xl font-black font-heading text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                 Built on <br />
                 <span className="text-sky-600 italic">Diligence.</span>
              </h2>
              <p className="text-slate-700 text-xl md:text-2xl font-bold leading-relaxed mb-12">
                 {DATA.objective}
              </p>
              
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl no-print">
                  <div className="space-y-1">
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Date of Birth</div>
                     <div className="text-slate-900 font-bold">{DATA.personal_info.dob}</div>
                  </div>
                  <div className="space-y-1">
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Status & Nationality</div>
                     <div className="text-slate-900 font-bold">{DATA.personal_info.marital_status} | {DATA.personal_info.nationality}</div>
                  </div>
                  <div className="space-y-1">
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Contact Details</div>
                     <div className="flex flex-col">
                        <a href={`mailto:${DATA.email}`} className="text-sky-600 font-bold hover:underline">{DATA.email}</a>
                        <a href={`tel:${DATA.phone}`} className="text-slate-900 font-bold hover:underline">{DATA.phone}</a>
                     </div>
                  </div>
                  <div className="space-y-1">
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Languages</div>
                     <div className="text-slate-900 font-bold line-clamp-1">{DATA.personal_info.languages.join(', ')}</div>
                  </div>
               </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                   <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-900 mb-6 underline decoration-sky-500/30 underline-offset-8">Capabilities</h3>
                   <ul className="space-y-4 text-slate-700 text-sm font-black">
                      <li className="flex items-center gap-4"><ShieldCheck className="text-sky-600" size={18} /> OPERATIONAL SAFETY</li>
                      <li className="flex items-center gap-4"><Settings className="text-sky-600" size={18} /> MACHINE OPTIMIZATION</li>
                      <li className="flex items-center gap-4"><Package className="text-sky-600" size={18} /> INVENTORY PRECISION</li>
                   </ul>
                </div>
                 <div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-900 mb-6 underline decoration-sky-500/30 underline-offset-8">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                       {DATA.personal_info.hobbies.map((hobby, idx) => (
                          <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-sm">
                             {hobby}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
  );
};

export default About;
