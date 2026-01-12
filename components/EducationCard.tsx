
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
      className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-amber-500/5 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:text-amber-500 transition-colors">
        <GraduationCap size={24} />
      </div>
      <div className="text-amber-500 font-bold mb-1">{edu.year}</div>
      <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-white transition-colors">{edu.degree}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.institution}</p>
      {edu.percentage && (
        <div className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-amber-500 border border-amber-500/20">
          Result: {edu.percentage}
        </div>
      )}
    </motion.div>
  );
};

export default EducationCard;
