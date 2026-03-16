
import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import { ResumeData } from './types';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'));
const BentoGallery = lazy(() => import('./components/BentoGallery'));
const Expertise = lazy(() => import('./components/Expertise'));
const About = lazy(() => import('./components/About'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

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
    { id: 'gallery', label: 'Showcase' },
    { id: 'pillars', label: 'Expertise' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
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
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500/20">
      <Background />

      {/* Precision Progress Rail */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-sky-500 origin-left z-[101] no-print shadow-[0_0_10px_rgba(14,165,233,0.5)]"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 w-full z-50 no-print transition-all duration-300">
        <div className="bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50 h-16 md:h-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
            {/* System Identity */}
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('hero')}>
              <div className="font-mono text-[9px] font-black tracking-[0.4em] text-slate-900 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                SYSTEM.JP // {DATA.name.split(' ')[0].toUpperCase()}
              </div>
            </div>

            {/* Precision Rail Links */}
            <div className="hidden lg:flex items-center gap-12">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`font-mono text-[9px] font-bold uppercase tracking-[0.3em] transition-all hover:text-sky-600 relative py-1 ${
                    activeSection === section.id ? 'text-sky-600' : 'text-slate-400'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.span 
                      layoutId="activeRail"
                      className="absolute -bottom-[26px] left-0 right-0 h-[3px] bg-sky-500 rounded-t-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Ops Actions */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => window.print()}
                className="hidden sm:block font-mono text-[9px] font-black text-slate-900 border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest"
              >
                Execute_Print
              </button>

              <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Command Center Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-slate-50/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden"
            >
              <div className="p-8 grid gap-4">
                <div className="font-mono text-[8px] text-slate-400 uppercase tracking-widest mb-2 px-4">Navigation_Matrix</div>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`block w-full text-left px-6 py-4 rounded-xl font-mono text-xs font-black uppercase tracking-[0.2em] transition-all ${
                      activeSection === section.id ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
                <button 
                  onClick={() => window.print()}
                  className="w-full py-5 bg-slate-900 text-white font-mono text-[9px] font-black uppercase tracking-[0.4em] mt-6 rounded-xl"
                >
                  SYSTEM_DUMP (PRINT)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Hero DATA={DATA} scrollTo={scrollTo} />
          <BentoGallery DATA={DATA} />
          <Expertise DATA={DATA} />
          <About DATA={DATA} />
          <ExperienceSection DATA={DATA} />
          <EducationSection DATA={DATA} />
          <ContactSection DATA={DATA} />
        </Suspense>
      </main>

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
