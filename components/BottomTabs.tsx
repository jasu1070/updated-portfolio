
import React from 'react';
import { Home, User, Briefcase, Zap, GraduationCap, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface BottomTabsProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ activeSection, scrollTo }) => {
  const tabs = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'experience', icon: <Briefcase size={20} />, label: 'Career' },
    { id: 'skills', icon: <Zap size={20} />, label: 'Skills' },
    { id: 'education', icon: <GraduationCap size={20} />, label: 'Edu' },
    { id: 'contact', icon: <MessageSquare size={20} />, label: 'Chat' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden no-print">
      <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-between relative overflow-hidden">
        {/* Animated background highlights for active tab */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-emerald-500/5 to-sky-500/5 pointer-events-none" />
        
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              aria-label={`Navigate to ${tab.label}`}
              className="relative flex flex-col items-center justify-center flex-1 py-2 gap-1"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-sky-500/10 rounded-2xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-sky-500' : 'text-slate-500'}`}>
                {tab.icon}
              </div>
              <span className={`relative z-10 text-[8px] font-black uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-600'}`}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -top-1 w-1 h-1 bg-sky-500 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabs;
