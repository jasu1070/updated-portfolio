
import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { ChevronRight } from 'lucide-react';

interface Props {
  exp: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<Props> = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row gap-6 p-8 bg-slate-800/40 border border-slate-700/50 rounded-3xl hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 text-white/[0.03] font-black text-6xl pointer-events-none group-hover:text-sky-500/10 transition-colors">
        {index + 1}
      </div>
      
      <div className="md:w-1/4">
        <div className="text-sky-500 font-bold font-heading text-xl mb-1 tracking-tight">{exp.period}</div>
        <div className="text-slate-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">{exp.company}</div>
      </div>
      
      <div className="md:w-3/4">
        <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
        <ul className="space-y-3">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
