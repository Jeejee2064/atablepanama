'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeImage from './FadeImage';

export default function ParallaxBanner({ src, height = 'h-52 sm:h-64 lg:h-72' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-32%', '32%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${height}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.72]">
        <FadeImage src={src} alt="" fill className="object-cover" sizes="100vw" duration={700} />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.18) 0%, rgba(10,22,40,0.28) 100%)' }}
      />
    </div>
  );
}
