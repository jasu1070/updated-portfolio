
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

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-600 rounded-xl flex items-center justify-center font-black text-white text-lg border border-sky-400">JP</div>
            <div>
              <div className="text-slate-900 font-black text-sm md:text-lg tracking-tighter uppercase leading-none">{DATA.name.split(' ')[0]} {DATA.name.split(' ')[1]}</div>
              <div className="text-sky-600 text-[10px] font-black uppercase tracking-widest mt-1">Operations Specialist</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-sky-600 ${
                  activeSection === section.id ? 'text-sky-700' : 'text-slate-500'
                }`}
              >
                {section.label}
              </button>
            ))}
            <button 
              onClick={() => window.print()}
              className="px-6 py-2.5 bg-slate-900 text-white font-black rounded-lg text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg"
            >
              Print Record
            </button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden no-print"
            >
              <div className="px-6 py-10 space-y-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className="block w-full text-left text-lg font-black text-slate-900 uppercase tracking-tighter"
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
