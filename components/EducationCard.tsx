
import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '../types';
import { GraduationCap } from 'lucide-react';

interface Props {
  edu: EducationItem;
  index: number;
}

const EducationCard: React.FC<Props> = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-3xl group hover:bg-sky-500/[0.03] hover:border-sky-500/30 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-sky-500 group-hover:border-sky-500/50 transition-all duration-300">
        <GraduationCap size={24} />
      </div>
      <div className="text-emerald-500 font-bold mb-1 tracking-tight text-sm uppercase tracking-[0.2em]">{edu.year}</div>
      <h3 className="text-xl font-bold font-heading mb-3 text-slate-100 group-hover:text-sky-400 transition-colors">{edu.degree}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">{edu.institution}</p>
      {edu.percentage && (
        <div className="inline-flex items-center px-4 py-1.5 bg-slate-900/50 rounded-full text-xs font-bold text-emerald-500 border border-emerald-500/20 shadow-sm">
          Result: {edu.percentage}
        </div>
      )}
    </motion.div>
  );
};

export default EducationCard;
