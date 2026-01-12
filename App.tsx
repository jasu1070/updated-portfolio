
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
  Code2, 
  ChevronDown,
  Menu,
  X,
  Printer
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import Background from './components/Background';
import ExperienceCard from './components/ExperienceCard';
import SkillCard from './components/SkillCard';
import EducationCard from './components/EducationCard';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: 'Home' },
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative w-full min-h-screen selection:bg-amber-500 selection:text-black">
      <Background />

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 origin-left z-[100] no-print"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center font-black text-xl text-black shadow-lg shadow-amber-500/20">
              JP
            </div>
            <span className="font-heading text-lg font-bold tracking-tight hidden sm:block uppercase">
              {RESUME_DATA.name.split(' ')[0]}
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-amber-500 ${
                  activeSection === s.id ? 'text-amber-500' : 'text-gray-400'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {RESUME_DATA.resume_url !== "#" && (
              <a 
                href={RESUME_DATA.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-tighter hover:bg-white/10 transition-all"
              >
                <Download size={14} />
                Download
              </a>
            )}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-black text-xs uppercase tracking-tighter transition-all"
            >
              <Printer size={14} />
              Export PDF
            </motion.button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden no-print"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-3xl font-black font-heading tracking-tighter ${activeSection === s.id ? 'text-amber-500' : 'text-gray-400'}`}
              >
                {s.label}
              </button>
            ))}
            <div className="flex flex-col gap-4 w-full px-12">
              {RESUME_DATA.resume_url !== "#" && (
                <a 
                  href={RESUME_DATA.resume_url}
                  className="w-full py-4 bg-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-3"
                >
                  <Download size={20} /> Download PDF
                </a>
              )}
              <button 
                onClick={handlePrint}
                className="w-full py-4 bg-amber-500 text-black font-black rounded-2xl flex items-center justify-center gap-3"
              >
                <Printer size={20} /> Export Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section 
          id="hero" 
          className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
        >
          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 font-black text-[10px] uppercase tracking-[0.2em] mb-8 no-print"
            >
              Certified Production Expert
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="font-heading text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
            >
              {RESUME_DATA.name.split(' ')[1]} <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 animate-gradient">
                {RESUME_DATA.name.split(' ')[0]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light tracking-tight leading-relaxed"
            >
              Production Supervisor & Machine Operations Specialist with <span className="text-white font-bold">9+ years</span> of precision-focused excellence in tier-1 manufacturing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 no-print"
            >
              <button 
                onClick={() => scrollTo('experience')}
                className="group relative px-10 py-5 bg-amber-500 text-black font-black rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(245,158,11,0.25)] transition-all hover:-translate-y-1 hover:shadow-amber-500/40"
              >
                <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-widest">
                  Experience <ChevronRight size={18} />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-sm uppercase tracking-widest backdrop-blur-sm"
              >
                Hire Me
              </button>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-3 no-print cursor-pointer"
            onClick={() => scrollTo('about')}
          >
            <div className="w-[2px] h-12 bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black">Explore</span>
          </motion.div>
        </section>

        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative sticky top-32"
            >
              <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group shadow-2xl">
                <img 
                  src={RESUME_DATA.profile_image} 
                  alt="Industrial Professional" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <h3 className="text-4xl font-black font-heading mb-3 tracking-tighter">TECHNICAL CORE</h3>
                  <div className="flex flex-wrap gap-2">
                    {["CNC", "QUALITY", "OPERATIONS"].map(t => (
                      <span key={t} className="px-3 py-1 bg-amber-500/20 text-amber-500 text-[10px] font-black rounded-lg border border-amber-500/20">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 text-amber-500 mb-8 no-print">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="uppercase tracking-[0.2em] text-xs font-black">Introduction</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black font-heading mb-10 leading-[0.95] tracking-tighter">
                Precision & <br /><span className="text-gray-600">Performance.</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light">
                {RESUME_DATA.objective}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/30 transition-all">
                   <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                   </div>
                   <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Based in</h4>
                   <p className="text-gray-400 font-medium">{RESUME_DATA.address}</p>
                </div>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/30 transition-all">
                   <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                      <Briefcase size={24} />
                   </div>
                   <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Track Record</h4>
                   <p className="text-gray-400 font-medium">9+ Years of Field Expertise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 text-amber-500 mb-6 no-print">
                  <div className="w-8 h-[2px] bg-amber-500" />
                  <span className="uppercase tracking-[0.2em] text-xs font-black">History</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter leading-none">Career Path</h2>
              </div>
              <div className="text-gray-500 font-black text-sm uppercase tracking-widest hidden md:block no-print">
                2016 — PRESENT
              </div>
            </div>
            
            <div className="space-y-4">
              {RESUME_DATA.experience.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-amber-500 mb-6 no-print">
                <div className="w-8 h-[2px] bg-amber-500" />
                <span className="uppercase tracking-[0.2em] text-xs font-black">Capabilities</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black font-heading mb-10 tracking-tighter leading-[0.95]">
                Technical <br /> Mastery.
              </h2>
              <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                Expertise built across various industrial disciplines, from heavy machinery setup to precise quality control audits.
              </p>
              <div className="grid grid-cols-2 gap-4 no-print">
                {["5S EXPERT", "GMP", "ISO-STD", "LEAN"].map(tag => (
                   <div key={tag} className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-center text-[10px] font-black tracking-widest text-amber-500 hover:bg-amber-500/10 transition-all">
                     {tag}
                   </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {RESUME_DATA.skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-4">Qualifications</h2>
              <p className="text-gray-500 uppercase tracking-[0.4em] font-black text-xs">Foundation of knowledge</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <EducationCard key={idx} edu={edu} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto no-print">
          <div className="bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-amber-500/20">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-5xl md:text-8xl font-black font-heading mb-10 text-black leading-[0.9] tracking-tighter">Get in <br /> Touch.</h2>
                  
                  <div className="space-y-10">
                    <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                        <Mail size={32} />
                      </div>
                      <div>
                        <p className="text-black/60 text-xs uppercase tracking-widest font-black mb-1">Email</p>
                        <p className="text-black text-2xl font-black tracking-tight underline decoration-2 underline-offset-4">{RESUME_DATA.email}</p>
                      </div>
                    </a>
                    
                    <a href={`tel:${RESUME_DATA.phone}`} className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                        <Phone size={32} />
                      </div>
                      <div>
                        <p className="text-black/60 text-xs uppercase tracking-widest font-black mb-1">Phone</p>
                        <p className="text-black text-2xl font-black tracking-tight">{RESUME_DATA.phone}</p>
                      </div>
                    </a>
                  </div>
               </div>
               
               <div className="bg-black/20 backdrop-blur-3xl border border-white/20 p-10 rounded-[2.5rem] shadow-xl">
                 <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid sm:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-[10px] uppercase text-white/60 mb-3 font-black tracking-widest">Name</label>
                       <input className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-white placeholder:text-white/30" placeholder="Full Name" />
                     </div>
                     <div>
                       <label className="block text-[10px] uppercase text-white/60 mb-3 font-black tracking-widest">Company</label>
                       <input className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-white placeholder:text-white/30" placeholder="Organization" />
                     </div>
                   </div>
                   <div>
                     <label className="block text-[10px] uppercase text-white/60 mb-3 font-black tracking-widest">Message</label>
                     <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-white transition-all text-white placeholder:text-white/30 resize-none" placeholder="How can I help?" />
                   </div>
                   <button className="w-full py-5 bg-black text-amber-500 font-black rounded-2xl hover:bg-zinc-900 transition-all shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                     Submit Message <ChevronRight size={20} />
                   </button>
                 </form>
               </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 px-6 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center font-black text-white">JP</div>
             <p className="text-gray-500 text-sm font-medium tracking-tight">© 2025 Jashvantbhai Parmar. Industrial Excellence Portfolio.</p>
          </div>
          <div className="flex items-center gap-12 text-gray-600 text-[10px] uppercase tracking-[0.3em] font-black">
             <span className="hover:text-amber-500 cursor-pointer transition-colors">Documentation</span>
             <span className="hover:text-amber-500 cursor-pointer transition-colors">Legal</span>
             <span className="hover:text-amber-500 cursor-pointer transition-colors">V1.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
