
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
      className="group relative flex flex-col md:flex-row gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl pointer-events-none group-hover:text-amber-500/10 transition-colors">
        {index + 1}
      </div>
      
      <div className="md:w-1/4">
        <div className="text-amber-500 font-bold font-heading text-xl mb-1">{exp.period}</div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">{exp.company}</div>
      </div>
      
      <div className="md:w-3/4">
        <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-amber-500 transition-colors">{exp.role}</h3>
        <ul className="space-y-3">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
