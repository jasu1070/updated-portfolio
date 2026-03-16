
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
import { ResumeData } from './types';
import Background from './components/Background';
import ExperienceCard from './components/ExperienceCard';
import SkillCard from './components/SkillCard';
import EducationCard from './components/EducationCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getAssetPath = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const base = '/updated-portfolio';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}/${cleanPath}`;
  };

  // Pre-process paths to ensure reliability
  const DATA = {
    ...RESUME_DATA,
    profile_image: getAssetPath(RESUME_DATA.profile_image),
    images: {
      factory: getAssetPath((RESUME_DATA as any).images?.factory),
      cnc: getAssetPath((RESUME_DATA as any).images?.cnc),
      quality: getAssetPath((RESUME_DATA as any).images?.quality),
      measure: getAssetPath((RESUME_DATA as any).images?.measure),
    }
  } as ResumeData;

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
    const handleScrollEvent = () => {
      handleScroll();
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
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
        {/* HERO: MAXIMUM EXPOSURE INDUSTRIAL SCALE */}
        <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-slate-950 no-print">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 1.5 }}
              src={DATA.images.factory} 
              className="w-full h-full object-cover opacity-80 md:opacity-100" 
              alt="Industrial Production Flow" 
            />
            {/* Smooth transition to light section below */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950" />
            <div className="absolute inset-0 bg-sky-500/5 mix-blend-soft-light" />
            {/* Added bottom-up fade for seamless section jump */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-sky-400 bg-white/10 backdrop-blur-xl text-white font-black text-[10px] uppercase tracking-[0.4em] mb-12 no-print shadow-xl"
             >
               <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
               Industrial Operations Expert
             </motion.div>
             
             <div className="flex flex-col md:flex-row items-end gap-10 md:gap-20">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-heading text-white leading-tight lg:leading-[0.85] tracking-tighter"
                >
                  {DATA.name.split(' ')[0]}<br />
                  <span className="text-sky-500">{DATA.name.split(' ').slice(1).join(' ')}</span>
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-sm mb-6"
                >
                   <p className="text-slate-100 text-xl md:text-2xl font-medium leading-tight tracking-tight mb-8">
                     Precision-first leadership across <span className="font-black underline decoration-sky-500 decoration-4">9+ years</span> in Tier-1 manufacturing.
                   </p>
                   <div className="flex gap-4 no-print">
                      <button onClick={() => scrollTo('pillars')} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-sky-500 hover:text-white transition-all shadow-2xl">
                        <ArrowRight size={24} />
                      </button>
                      <div className="flex flex-col justify-center">
                         <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Explore Operations</span>
                         <span className="text-white/50 text-[8px] font-bold">SCROLL FOR SHOWCASE</span>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* DYNAMIC BENTO GALLERY: NATURAL COLORS */}
        <section id="gallery" className="py-24 px-6 bg-slate-950 relative overflow-hidden no-print">
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
                    className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-[0_0_30px_rgba(56,189,248,0.1)]"
                  >
                     <img src={DATA.images.factory} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Factory Floor" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8">
                       <div className="text-sky-500 font-black text-[10px] tracking-[0.4em] mb-2 uppercase">Core Facility</div>
                       <h3 className="text-white text-3xl font-black tracking-tighter uppercase">Operations Hub</h3>
                    </div>
                 </motion.div>

                 {/* BENTO UNIT 02: CNC DETAIL */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.1 }}
                    className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]"
                  >
                     <img src={DATA.images.cnc} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="CNC Machining" />
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
                    className="relative group rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl"
                  >
                     <img src={DATA.images.quality} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Quality Control" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-transparent" />
                 </motion.div>

                 {/* BENTO UNIT 04: PRECISION */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.3 }}
                    className="relative group rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl"
                  >
                     <img src={DATA.images.measure} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Measurement Tech" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                       <p className="text-white font-black text-[8px] tracking-widest uppercase text-center">Verified Audit Standard</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* EXPERTISE: HIGH-CONTRAST INDUSTRIAL SILVER SECTION */}
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
                           <img src={DATA.images.cnc} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="CNC Operations" />
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
                           <img src={DATA.images.quality} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="QC Standard" />
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

        {/* ABOUT: AUTHENTIC PROFILE CENTERPIECE */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
           <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5">
                  <div className="relative p-4 bg-slate-900 border border-white/10 rounded-[3rem] shadow-4xl group">
                     <img src={DATA.profile_image} className="w-full h-auto rounded-[2.5rem] grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-1000" alt="Professional Portrait" />
                    <div className="absolute top-1/2 -right-12 -translate-y-1/2 p-8 bg-sky-600 rounded-2xl shadow-4xl text-white font-black no-print">
                       <div className="text-4xl mb-1">09+</div>
                       <div className="text-[8px] uppercase tracking-[0.3em]">SERVICE YEARS</div>
                    </div>
                 </div>
              </div>
               <div className="lg:col-span-7">
                  <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-10 tracking-tighter leading-[0.9]">
                     Built on <br />
                     <span className="text-slate-600 italic">Diligence.</span>
                  </h2>
                  <p className="text-slate-200 text-xl md:text-2xl font-light leading-relaxed mb-12">
                     {DATA.objective}
                  </p>
                  
                  {/* PERSONAL RECORD: THE IDENTITY BLOCK */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] no-print">
                     <div className="space-y-1">
                        <div className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Date of Birth</div>
                        <div className="text-white font-bold">{DATA.personal_info.dob}</div>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Status & Nationality</div>
                        <div className="text-white font-bold">{DATA.personal_info.marital_status} | {DATA.personal_info.nationality}</div>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Languages Known</div>
                        <div className="text-white font-bold">{DATA.personal_info.languages.join(', ')}</div>
                     </div>
                  </div>

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
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-6">Lifestyle</h3>
                        <div className="flex flex-wrap gap-2">
                           {DATA.personal_info.hobbies.map((hobby, idx) => (
                              <span key={idx} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-white/5">
                                 {hobby}
                              </span>
                           ))}
                        </div>
                     </div>
                 </div>
              </div>
           </div>
        </section>

        {/* EXPERIENCE & SKILLS: PROFESSIONAL TIMELINE (WHITE BASE) */}
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
                 <div className="text-slate-300 font-black text-4xl hidden md:block">09+ YEARS</div>
              </div>

              <div className="grid lg:grid-cols-[1fr_400px] gap-24">
                 <div className="space-y-32">
                    {RESUME_DATA.experience.map((exp, i) => (
                       <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative pl-16 border-l-2 border-slate-100 group">
                          <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-sky-600 group-hover:scale-125 transition-transform" />
                          <div className="text-sky-600 font-black text-xs uppercase tracking-[0.4em] mb-4">{exp.period}</div>
                          <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">{exp.role}</h3>
                          <div className="text-slate-400 font-black text-xs uppercase tracking-[0.2em] mb-10">{exp.company}</div>
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
                             {RESUME_DATA.skills.map((skill, i) => (
                                <div key={i} className="space-y-4">
                                   <div className="flex justify-between font-black uppercase text-[10px] tracking-widest text-slate-400">
                                      <span>{skill.name}</span>
                                      <span className="text-sky-600">{skill.level}%</span>
                                   </div>
                                   <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} className="h-full bg-slate-900" />
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>

                       <div className="p-12 bg-slate-950 rounded-[3rem] shadow-4xl group">
                          <h4 className="text-white text-3xl font-black mb-4 tracking-tighter">Full Records.</h4>
                          <p className="text-slate-400 text-sm font-medium mb-12 leading-relaxed">Download the comprehensive verified industrial credentials in professional PDF format.</p>
                          <a 
                            href={RESUME_DATA.resume_url} 
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

        {/* EDUCATION & CONTACT: FINAL SLATE SHIFT */}
        <section id="education" className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5 no-print">
            <div className="text-center mb-32">
               <div className="text-sky-500 font-black text-xs uppercase tracking-[0.5em] mb-8">Formal Credentials</div>
               <h2 className="text-6xl md:text-[10rem] font-black font-heading text-white mb-6 uppercase tracking-tighter leading-none">Record.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
               {RESUME_DATA.education.map((edu, i) => (
                  <div key={i} className="p-12 bg-slate-900/50 border border-white/5 rounded-[3rem] hover:bg-slate-900 transition-colors">
                     <div className="text-sky-500 font-black text-xs mb-6 uppercase tracking-widest bg-sky-500/10 inline-block px-4 py-1 rounded-lg italic">Class of {edu.year}</div>
                     <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 leading-none">{edu.degree}</h3>
                     <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-8">{edu.institution}</div>
                     {edu.percentage && <div className="text-6xl font-black text-white/10 group-hover:text-sky-500/20 transition-colors uppercase tracking-widest">{edu.percentage}</div>}
                  </div>
               ))}
            </div>
        </section>

        <footer id="contact" className="py-40 px-6 bg-slate-950 border-t border-white/5 no-print">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-32 items-center">
                 <div className="lg:col-span-7">
                    <h2 className="text-7xl md:text-[12rem] font-black font-heading text-white tracking-tighter mb-16 opacity-10">CONNECT.</h2>
                    <div className="grid gap-12">
                       {[
                         { icon: <Mail />, label: "Corporate Email", value: RESUME_DATA.email },
                         { icon: <Phone />, label: "Direct Phone", value: RESUME_DATA.phone },
                         { icon: <MapPin />, label: "Operational Base", value: RESUME_DATA.address }
                       ].map((link, lIdx) => (
                         <div key={lIdx} className="flex items-center gap-10 group cursor-default">
                            <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-sky-500 border border-white/5 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xl">{link.icon}</div>
                            <div>
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">{link.label}</p>
                               <p className="text-white text-2xl md:text-3xl font-bold tracking-tight">{link.value}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="lg:col-span-5 text-right">
                    <div className="p-16 bg-white rounded-[4rem] text-slate-950 text-left shadow-4xl mb-20 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-10 text-slate-100 group-hover:text-sky-100 transition-colors">
                          <Printer size={80} strokeWidth={3} />
                       </div>
                       <h3 className="text-4xl font-black tracking-tighter mb-6 relative z-10">Dispatch <br />Report.</h3>
                       <p className="text-slate-500 font-medium mb-12 leading-relaxed relative z-10">Available for lead roles in high-capacity Tier-1 industrial environments.</p>
                       <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-4 bg-slate-950 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-sky-600 transition-all relative z-10">Print Official CV</button>
                    </div>
                    <p className="text-slate-800 text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">{RESUME_DATA.name.split(' ')[0]}</p>
                    <p className="text-slate-800 text-[10px] font-black uppercase tracking-[1em]">{RESUME_DATA.name.split(' ').slice(1).join(' ')}</p>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => scrollTo('hero')}
            className="fixed bottom-10 right-10 w-14 h-14 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-sky-600/40 z-[90] hover:bg-sky-500 transition-all border border-white/20 no-print group"
          >
            <ArrowRight size={24} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
