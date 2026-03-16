
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  skill: {
    name: string;
    icon: React.ReactNode;
    level: number;
  };
  index: number;
}

const SkillCard: React.FC<Props> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl flex flex-col gap-4 group hover:border-sky-500/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-sky-500/20">
          {skill.icon}
        </div>
        <div className="font-bold text-sm tracking-tight text-slate-200">{skill.name}</div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>Proficiency</span>
          <span className="text-sky-500">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'circOut', delay: index * 0.1 }}
            className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 shadow-[2px_0_10px_rgba(16,185,129,0.3)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
