'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const SLIDES = [
  { src: '/dressage3.JPG', alt: 'Assiette gastronomique' },
  { src: '/ambiance.jpeg', alt: 'Ambiance restaurant' },
  { src: '/deco1.jpeg', alt: 'Table dressée' },
  { src: '/plate4.JPG', alt: 'Plat gastronomique' },
];

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[680px] overflow-hidden">
      {/* Background slideshow */}
      {SLIDES.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeSlide === i ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 via-transparent to-[#0a1628]/75 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/25 to-transparent z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col justify-end pb-20 lg:pb-28 px-8 lg:px-20 max-w-7xl mx-auto"
      >
        {/* Gold accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-14 h-px bg-gold mb-7 origin-left"
        />

        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4 font-medium"
          >
            {t.hero.tagline}
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light leading-[0.92] tracking-tight"
          >
            {/* "À Table" in Cormorant — elegant serif */}
            <span className="block text-cream text-[clamp(3.5rem,7vw,7rem)]">
              À Table
            </span>
            <span className="block font-display italic text-gold/80" style={{ fontSize: 'clamp(3rem,6vw,6.5rem)', lineHeight: 1.1 }}>
              Panama
            </span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-6">
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-cream/85 text-lg md:text-xl tracking-wide max-w-lg font-light"
          >
            {t.hero.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-9"
        >
          <a
            href="#services"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-medium px-6 py-3 border border-cream/30 text-cream hover:border-gold hover:text-gold hover:bg-gold/8 transition-all duration-300"
          >
            {t.hero.cta}
            <span className="text-base leading-none">→</span>
          </a>
        </motion.div>

        {/* Slide dots */}
        <div className="absolute bottom-8 right-8 lg:right-20 flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`transition-all duration-400 ${
                activeSlide === i ? 'w-7 h-px bg-gold' : 'w-1.5 h-px bg-cream/25 hover:bg-cream/50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
