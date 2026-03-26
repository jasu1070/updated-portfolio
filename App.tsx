
import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Home,
  LayoutGrid,
  Zap,
  User,
  Briefcase,
  GraduationCap,
  MessageSquare
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

import Navbar from './components/Navbar';

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
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
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
    { id: 'hero', label: 'Home', icon: <Home size={18} /> },
    { id: 'gallery', label: 'Showcase', icon: <LayoutGrid size={18} /> },
    { id: 'pillars', label: 'Expertise', icon: <Zap size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'experience', label: 'Career', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Edu', icon: <GraduationCap size={18} /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare size={18} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-80px 0px -20% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    const handleScrollProgress = () => {
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScrollProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollProgress);
    };
  }, []);

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

      <Navbar 
        DATA={DATA} 
        activeSection={activeSection} 
        scrollTo={scrollTo} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Precision Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 md:top-20 left-0 w-full bg-white z-[60] shadow-2xl border-b border-slate-200"
          >
            <div className="flex flex-col p-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollTo(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 font-mono text-xs font-black tracking-[0.2em] uppercase transition-all ${
                    activeSection === section.id ? 'text-sky-600 bg-slate-50' : 'text-slate-600'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <div className="p-4 mt-2">
                <button 
                  onClick={() => window.print()}
                  className="w-full py-4 bg-slate-900 text-white font-mono text-[10px] font-black uppercase tracking-[0.3em] rounded-sm shadow-lg active:scale-[0.98] transition-all"
                >
                  SYSTEM_DUMP (PRINT)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-16 md:h-20" /> {/* Spacer for fixed nav */}

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
            aria-label="Scroll to top"
            className="fixed bottom-10 right-10 w-14 h-14 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-sky-600/40 z-[90] hover:bg-sky-500 transition-all border border-white/20 no-print group"
          >
            <ArrowRight size={24} aria-hidden="true" className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
