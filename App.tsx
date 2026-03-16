
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Download,
  ChevronRight,
  Briefcase,
  GraduationCap,
  User,
  ShieldCheck,
  Package,
  Settings,
  Cpu,
  Wrench,
  Zap,
  Gauge,
  Factory,
  Database,
  ArrowRight,
  Menu,
  X,
  Printer,
  FileText
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import Background from './components/Background';
import ExperienceCard from './components/ExperienceCard';
import SkillCard from './components/SkillCard';
import EducationCard from './components/EducationCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'pillars', label: 'Expertise' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScroll = useCallback(() => {
    const sectionElements = sections.map(s => document.getElementById(s.id));
    const scrollPosition = window.scrollY + 120;

    sectionElements.forEach((el, idx) => {
      if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
        setActiveSection(sections[idx].id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30">
      <Background />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-600 origin-left z-[100] no-print"
        style={{ scaleX }}
      />

      {/* Corporate Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-600 rounded-xl flex items-center justify-center font-black text-white text-lg border border-white/10">JP</div>
            <div>
              <div className="text-white font-black text-sm md:text-lg tracking-tighter uppercase leading-none">{RESUME_DATA.name.split(' ')[0]} {RESUME_DATA.name.split(' ')[1]}</div>
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Operations Specialist</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-sky-400 ${
                  activeSection === section.id ? 'text-sky-500' : 'text-slate-400'
                }`}
              >
                {section.label}
              </button>
            ))}
            <button 
              onClick={() => window.print()}
              className="px-6 py-2.5 bg-sky-600 text-white font-black rounded-lg text-[10px] uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg shadow-sky-600/20"
            >
              Print Record
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 border-b border-white/5 overflow-hidden no-print"
            >
              <div className="px-6 py-10 space-y-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className="block w-full text-left text-lg font-black text-white uppercase tracking-tighter"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* HERO: HIGH-VISIBILITY INDUSTRIAL BACKDROP */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 no-print">
            <img 
              src={(RESUME_DATA as any).images?.factory} 
              className="w-full h-full object-cover scale-105" 
              alt="Industrial Production Flow" 
            />
            {/* Minimalist overlay to ensure text readability without hiding the background */}
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 font-black text-[10px] uppercase tracking-[0.4em] mb-12 no-print backdrop-blur-md"
             >
               <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
               Operational Excellence System
             </motion.div>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-6xl sm:text-7xl md:text-9xl font-black font-heading text-white leading-[0.8] tracking-tighter mb-10"
             >
               {RESUME_DATA.name.split(' ')[0]}<br />
               <span className="text-slate-500/50">{RESUME_DATA.name.split(' ').slice(1).join(' ')}</span>
             </motion.h1>
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="text-slate-100 text-lg md:text-2xl max-w-3xl mb-12 font-medium leading-relaxed tracking-tight text-shadow-sm"
             >
               Mastering complex machine operations and industrial supervision with <span className="text-sky-400 font-black">9+ years</span> of precision-first service in global manufacturing.
             </motion.p>
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-wrap items-center justify-center md:justify-start gap-6 no-print"
             >
               <button onClick={() => scrollTo('pillars')} className="px-12 py-5 bg-sky-600 text-white font-black rounded-xl hover:bg-white hover:text-slate-950 transition-all text-sm uppercase tracking-widest shadow-2xl shadow-sky-600/30">View Expertise</button>
               <button onClick={() => scrollTo('about')} className="px-12 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-xl hover:bg-white/5 transition-all text-sm uppercase tracking-widest backdrop-blur-sm">Profile</button>
             </motion.div>
          </div>
        </section>

        {/* NEW: OPERATIONAL SHOWCASE GALLERY (using all images) */}
        <section id="gallery" className="py-12 bg-slate-950 border-y border-white/5 no-print">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: (RESUME_DATA as any).images?.factory, label: 'Factory Layout' },
                { img: (RESUME_DATA as any).images?.cnc, label: 'CNC Operations' },
                { img: (RESUME_DATA as any).images?.quality, label: 'Quality Audit' },
                { img: (RESUME_DATA as any).images?.measure, label: 'Precision Tech' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-slate-900"
                >
                   <img src={item.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" alt={item.label} />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">{item.label}</span>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* EXPERTISE PILLARS: INDUSTRIAL MEDIA */}
        <section id="pillars" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 no-print">
           <div className="grid lg:grid-cols-2 gap-32 items-center mb-40">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                 <div className="flex items-center gap-4 text-sky-500 mb-8 font-black text-xs uppercase tracking-[0.4em]">
                    <div className="w-10 h-[1px] bg-sky-500" />
                    <span>Focus 01</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black font-heading text-white mb-8 tracking-tighter">Precision <br />Machining.</h2>
                 <p className="text-slate-400 text-xl leading-relaxed font-medium mb-10">
                    Advanced operation of CNC turning and milling centers. Adjusting offsets and tool parameters to satisfy extreme tolerance requirements for critical pump and automotive components.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['CNC TURNING', 'VMC OPS', 'TOOLING', 'LAYOUT'].map(t => (
                      <div key={t} className="p-5 bg-slate-900 border border-white/5 rounded-2xl text-[10px] font-black tracking-[0.2em] text-center text-slate-300">{t}</div>
                    ))}
                 </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative group">
                 <div className="aspect-[16/10] bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                    <img src={(RESUME_DATA as any).images?.cnc} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="CNC Machining" />
                 </div>
                 <div className="absolute -bottom-8 -right-8 p-10 bg-sky-600 rounded-3xl shadow-3xl text-white">
                    <Settings size={40} />
                 </div>
              </motion.div>
           </div>

           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:order-2 relative group">
                 <div className="aspect-[16/10] bg-slate-800 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                    <img src={(RESUME_DATA as any).images?.measure} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Quality Measurement" />
                 </div>
                 <div className="absolute -top-8 -left-8 p-10 bg-slate-800 border border-white/10 rounded-3xl shadow-3xl text-sky-500">
                    <Gauge size={40} />
                 </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="lg:order-1 text-right">
                 <div className="flex items-center justify-end gap-4 text-sky-500 mb-8 font-black text-xs uppercase tracking-[0.4em]">
                    <span>Focus 02</span>
                    <div className="w-10 h-[1px] bg-sky-500" />
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black font-heading text-white mb-8 tracking-tighter">Quality <br />Metric Control.</h2>
                 <p className="text-slate-400 text-xl leading-relaxed font-medium mb-10">
                    Implementing non-negotiable inspection standards for incoming and outgoing components. Expert in digital caliper and micrometer precision verification.
                 </p>
                 <div className="relative rounded-2xl overflow-hidden border border-white/5 h-40 group cursor-default">
                    <img src={(RESUME_DATA as any).images?.quality} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all" alt="QC Lab" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <p className="text-white font-black text-lg uppercase tracking-tighter italic">"100% Quality Rate Record"</p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* ABOUT: AUTHENTIC PROFILE CENTERPIECE */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5">
                 <div className="relative p-4 bg-slate-900 border border-white/10 rounded-[3rem] shadow-4xl group">
                    <img src={RESUME_DATA.profile_image} className="w-full h-auto rounded-[2.5rem] grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-1000" alt="Professional Portrait" />
                    <div className="absolute top-1/2 -right-12 -translate-y-1/2 p-8 bg-sky-600 rounded-2xl shadow-4xl text-white font-black no-print">
                       <div className="text-4xl mb-1">09+</div>
                       <div className="text-[8px] uppercase tracking-[0.3em]">SERVICE YEARS</div>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-7">
                 <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-10 tracking-tighter leading-[0.9]">Built on <br /><span className="text-slate-600 italic">Diligence.</span></h2>
                 <p className="text-slate-200 text-xl md:text-2xl font-light leading-relaxed mb-12">
                   {RESUME_DATA.objective}
                 </p>
                 <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                       <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-6">Capabilities</h3>
                       <ul className="space-y-4 text-slate-400 text-sm font-bold">
                          <li className="flex items-center gap-4"><ShieldCheck className="text-sky-500" size={18} /> OPERATIONAL SAFETY</li>
                          <li className="flex items-center gap-4"><Settings className="text-sky-500" size={18} /> MACHINE OPTIMIZATION</li>
                          <li className="flex items-center gap-4"><Package className="text-sky-500" size={18} /> INVENTORY PRECISION</li>
                       </ul>
                    </div>
                    <div>
                       <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-6">Standards</h3>
                       <p className="text-slate-400 text-sm font-bold leading-relaxed">
                          STRICT ADHERENCE TO ISO, GMP, AND 5S PRINCIPLES IN ALL TIER-1 MANUFACTURING ENVIRONMENTS.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* EXPERIENCE & SKILLS: PROFESSIONAL TIMELINE */}
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 bg-slate-900/30 rounded-[3.5rem]">
           <div className="text-center mb-32">
              <h2 className="text-6xl md:text-9xl font-black font-heading text-white tracking-tighter mb-4">Milestones.</h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto" />
           </div>

           <div className="grid lg:grid-cols-[1fr_400px] gap-24">
              <div className="space-y-24">
                 {RESUME_DATA.experience.map((exp, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative pl-12 border-l-2 border-slate-800">
                       <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-sky-600 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                       <div className="text-sky-500 font-black text-xs uppercase tracking-[0.4em] mb-4">{exp.period}</div>
                       <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">{exp.role}</h3>
                       <div className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-8">{exp.company}</div>
                       <ul className="space-y-4">
                          {exp.description.map((desc, dIdx) => (
                             <li key={dIdx} className="text-slate-400 text-base leading-relaxed flex items-start gap-4">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
                                {desc}
                             </li>
                          ))}
                       </ul>
                    </motion.div>
                 ))}
              </div>

              <div id="skills" className="no-print">
                 <div className="sticky top-32 space-y-12">
                    <div>
                       <h3 className="text-2xl font-black text-white tracking-tighter uppercase mb-10 flex items-center gap-4">
                          <Database size={24} className="text-sky-500" /> Proficiency
                       </h3>
                       <div className="space-y-8">
                          {RESUME_DATA.skills.map((skill, i) => (
                             <div key={i} className="space-y-3">
                                <div className="flex justify-between font-black uppercase text-[10px] tracking-widest text-slate-500">
                                   <span>{skill.name}</span>
                                   <span className="text-sky-500">{skill.level}%</span>
                                </div>
                                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                   <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} className="h-full bg-sky-600" />
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="p-10 bg-sky-600 rounded-[2rem] shadow-4xl group">
                       <h4 className="text-white text-2xl font-black mb-4 tracking-tighter">Full Vitae.</h4>
                       <p className="text-sky-100 text-sm font-medium mb-10">Download the comprehensive verified industrial record.</p>
                       <a 
                         href={RESUME_DATA.resume_url} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-slate-950 hover:text-white transition-all w-full justify-center"
                       >
                         Download Record <Download size={16} />
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* EDUCATION & CONTACT FOOTER */}
        <section id="education" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 no-print">
            <div className="flex flex-col md:flex-row gap-20">
               <div className="md:w-1/3">
                  <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-6 uppercase tracking-tighter">Formal <br />Record.</h2>
               </div>
               <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                  {RESUME_DATA.education.map((edu, i) => (
                     <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-3xl">
                        <div className="text-sky-500 font-black text-xs mb-4">{edu.year}</div>
                        <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 leading-tight">{edu.degree}</h3>
                        <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest">{edu.institution}</div>
                        {edu.percentage && <div className="mt-6 inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 font-black text-[10px] rounded-lg border border-sky-500/20">{edu.percentage} %</div>}
                     </div>
                  ))}
               </div>
            </div>
        </section>

        <footer id="contact" className="py-32 px-6 border-t border-white/5 bg-slate-950 no-print">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
              <div className="max-w-xl">
                 <h2 className="text-7xl md:text-9xl font-black font-heading text-white tracking-tighter mb-10 opacity-20">Contact.</h2>
                 <div className="grid gap-10">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-sky-500 border border-white/5"><Mail size={24} /></div>
                       <div>
                          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Electronic Mail</p>
                          <p className="text-white text-xl font-bold">{RESUME_DATA.email}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-sky-500 border border-white/5"><Phone size={24} /></div>
                       <div>
                          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Direct Line</p>
                          <p className="text-white text-xl font-bold">{RESUME_DATA.phone}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-sky-500 border border-white/5"><MapPin size={24} /></div>
                       <div>
                          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Base Location</p>
                          <p className="text-white text-xl font-bold tracking-tight">{RESUME_DATA.address}</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col justify-end text-right">
                 <div className="p-8 bg-slate-900 border border-white/5 rounded-3xl mb-12">
                    <p className="text-slate-400 font-medium mb-6 leading-relaxed">Available for strategic managerial and technical roles in Tier-1 environments globally.</p>
                    <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-4 bg-sky-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-sky-500 transition-all">Print Official Bio <Printer size={18} /></button>
                 </div>
                 <p className="text-slate-800 text-4xl font-black uppercase tracking-tighter leading-none">{RESUME_DATA.name}</p>
                 <p className="text-slate-800 text-[10px] font-black uppercase tracking-[0.5em] mt-2">Industrial Operations Specialist</p>
              </div>
           </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
