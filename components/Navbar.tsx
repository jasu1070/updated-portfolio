
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  LayoutGrid, 
  Zap, 
  User, 
  Briefcase, 
  GraduationCap, 
  MessageSquare,
  Printer,
  Menu,
  X
} from 'lucide-react';
import { ResumeData } from '../types';

import Logo from './Logo';

interface NavbarProps {
  DATA: ResumeData;
  activeSection: string;
  scrollTo: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ DATA, activeSection, scrollTo, isMenuOpen, setIsMenuOpen }) => {
  const sections = [
    { id: 'hero', label: 'HOME' },
    { id: 'gallery', label: 'SHOWCASE' },
    { id: 'pillars', label: 'EXPERTISE' },
    { id: 'about', label: 'IDENTITY' },
    { id: 'experience', label: 'CAREER' },
    { id: 'education', label: 'ACADEMIA' },
    { id: 'contact', label: 'TERMINAL' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 no-print precision-nav-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Brand Unit */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => scrollTo('hero')}
        >
          <Logo />
          <div className="hidden sm:flex flex-col">
            <span className="font-mono text-[11px] font-black text-slate-900 tracking-wider leading-none uppercase">
              {DATA.name}
            </span>
            <span className="font-mono text-[8px] text-sky-600 font-bold tracking-[0.2em] mt-1 uppercase">
              Quality_Assurance_Inspection
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`relative px-4 py-2 font-mono text-[10px] font-black tracking-widest transition-all ${
                activeSection === section.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div 
                  layoutId="navLine"
                  className="absolute bottom-0 left-4 right-4 active-line"
                  transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Global Control */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.print()}
            className="hidden md:block font-mono text-[10px] font-black text-slate-900 border border-slate-900 px-6 py-2 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest"
          >
            Export_Data
          </button>

          <button 
            className="lg:hidden p-2 text-slate-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
