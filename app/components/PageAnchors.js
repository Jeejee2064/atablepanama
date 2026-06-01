'use client';

import { motion } from 'framer-motion';

export default function PageAnchors({ sections }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-wrap items-center gap-1 mt-10"
    >
      <span className="text-[9px] tracking-[0.25em] uppercase mr-3 hidden sm:block" style={{ color: 'rgba(250,248,243,0.35)' }}>↓</span>
      {sections.map((s, i) => (
        <button
          key={i}
          onClick={() => scrollTo(s.id)}
          className="text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-all duration-300 hover:border-gold hover:text-gold"
          style={{
            color: 'rgba(250,248,243,0.55)',
            borderColor: 'rgba(250,248,243,0.12)',
            background: 'transparent',
          }}
        >
          {s.label}
        </button>
      ))}
    </motion.div>
  );
}
