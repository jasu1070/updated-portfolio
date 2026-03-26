
import React from 'react';
import { Mail, Phone, MapPin, Printer } from 'lucide-react';
import { ResumeData } from '../types';

interface ContactSectionProps {
  DATA: ResumeData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ DATA }) => {
  return (
    <footer id="contact" className="py-24 md:py-40 px-6 bg-slate-950 border-t border-white/5 no-print">
       <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-32 items-center">
             <div className="lg:col-span-7">
                <h2 className="text-4xl md:text-[12rem] font-black font-heading text-white tracking-tighter mb-10 md:mb-16 opacity-10 uppercase">Connect.</h2>
                <div className="grid gap-6 md:gap-12">
                   {[
                     { icon: <Mail size={20} />, label: "Corporate Email", value: DATA.email, href: `mailto:${DATA.email}` },
                     { icon: <Phone size={20} />, label: "Direct Phone", value: DATA.phone, href: `tel:${DATA.phone}` },
                     { icon: <MapPin size={20} />, label: "Operational Base", value: DATA.address }
                   ].map((link, lIdx) => (
                     <div key={lIdx} className="flex items-start gap-5 md:gap-10 group cursor-default">
                        <div className="w-10 h-10 md:w-20 md:h-20 bg-slate-900 rounded-xl md:rounded-[2rem] flex items-center justify-center text-sky-500 border border-white/5 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xl shrink-0">
                          {link.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                           <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1 md:mb-2">{link.label}</p>
                           {link.href ? (
                             <a href={link.href} className="text-white text-base md:text-3xl font-bold tracking-tight break-words hover:text-sky-500 transition-colors">
                               {link.value}
                             </a>
                           ) : (
                             <p className="text-white text-base md:text-3xl font-bold tracking-tight break-words">{link.value}</p>
                           )}
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="lg:col-span-5 text-left md:text-right w-full">
                <div className="p-8 md:p-16 bg-white rounded-[2.5rem] md:rounded-[4rem] text-slate-950 text-left shadow-4xl mb-12 md:mb-20 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 md:p-10 text-slate-100 group-hover:text-sky-100 transition-colors">
                      <Printer className="w-12 h-12 md:w-20 md:h-20" strokeWidth={3} />
                   </div>
                   <h3 className="text-xl md:text-4xl font-black tracking-tighter mb-4 md:mb-6 relative z-10 uppercase">Dispatch <br />Report.</h3>
                   <p className="text-slate-500 text-xs md:text-base font-medium mb-8 md:mb-12 leading-relaxed relative z-10">Available for lead roles in high-capacity Tier-1 industrial environments.</p>
                   <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-4 bg-slate-950 text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-[9px] md:text-xs uppercase tracking-[0.3em] hover:bg-sky-600 transition-all relative z-10 shadow-lg">Print Official CV</button>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-200 text-3xl md:text-8xl font-black uppercase tracking-tighter leading-none">{DATA.name.split(' ')[0]}</p>
                  <p className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] md:tracking-[1rem]">{DATA.name.split(' ').slice(1).join(' ')}</p>
                </div>
             </div>
          </div>
       </div>
    </footer>
  );
};

export default ContactSection;
