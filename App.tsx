
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

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-600 origin-left z-[100] no-print"
        style={{ scaleX }}
      />

      <nav className="fixed top-6 left-0 w-full z-50 px-6 no-print pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="pointer-events-auto backdrop-blur-md bg-white/70 border border-slate-200/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] px-4 md:px-8 h-16 md:h-20 flex items-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => scrollTo('hero')}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-sky-600 rounded-lg flex items-center justify-center font-black text-white text-sm border border-sky-400">JP</div>
              <div className="hidden xs:block">
                <div className="text-slate-900 font-black text-[10px] md:text-xs uppercase tracking-tighter leading-none">Jashvant Parmar</div>
                <div className="text-sky-600 text-[8px] font-black uppercase tracking-widest mt-0.5">Ops Expert</div>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-slate-200 hidden md:block" />

            <div className="hidden lg:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-sky-600 py-2 group ${
                    activeSection === section.id ? 'text-sky-700' : 'text-slate-500'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div 
                      layoutId="navTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600 rounded-full" 
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.print()}
                className="hidden sm:block px-5 py-2 bg-slate-900 text-white font-black rounded-full text-[9px] uppercase tracking-widest hover:bg-sky-600 transition-all shadow-md active:scale-95"
              >
                Print CV
              </button>

              <button className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-900 bg-slate-50 rounded-full border border-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="lg:hidden absolute top-24 left-6 right-6 bg-white/90 backdrop-blur-2xl rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="p-8 space-y-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`block w-full text-center py-4 rounded-2xl text-lg font-black uppercase tracking-tighter transition-colors ${
                      activeSection === section.id ? 'bg-sky-50 text-sky-600' : 'text-slate-900 active:bg-slate-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
                <button 
                  onClick={() => window.print()}
                  className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] mt-4"
                >
                  Print Official Record
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
