
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
      className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 group hover:border-amber-500/50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
          {skill.icon}
        </div>
        <div className="font-bold text-sm tracking-tight">{skill.name}</div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
