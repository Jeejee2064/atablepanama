'use client';

import { motion } from 'framer-motion';

export default function PageAnchors({ sections, dark = false }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const textColor = dark ? 'rgba(250,248,243,0.72)' : 'rgba(17,17,17,0.58)';
  const borderColor = dark ? 'rgba(250,248,243,0.25)' : 'rgba(17,17,17,0.12)';
  const arrowColor = dark ? 'rgba(250,248,243,0.30)' : 'rgba(17,17,17,0.25)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap gap-2 mt-10"
    >
      <span className="text-[9px] tracking-[0.25em] uppercase hidden sm:block mr-1" style={{ color: arrowColor }}>↓</span>
      {sections.map((s, i) => (
        <button
          key={i}
          onClick={() => scrollTo(s.id)}
          className="text-left sm:text-center text-[10px] tracking-[0.18em] uppercase px-4 py-2.5 border transition-all duration-300 hover:border-gold hover:text-gold"
          style={{
            color: textColor,
            borderColor: borderColor,
            background: 'transparent',
            width: 'fit-content',
          }}
        >
          {s.label}
        </button>
      ))}
    </motion.div>
  );
}
