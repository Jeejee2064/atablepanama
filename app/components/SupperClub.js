'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

const SLUG = {
  es: '/es/supper-club-panama-city',
  en: '/en/supper-club-panama-city',
  fr: '/fr/supper-club-panama-city',
};

const CTA = {
  es: 'Descubrir el SupperClub',
  en: 'Discover the SupperClub',
  fr: 'Découvrir le SupperClub',
};

export default function SupperClub() {
  const { t, lang } = useLanguage();
  const sc = t.services.supperclub;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#0a1628', minHeight: '80vh' }}>
      {/* Background image parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image src="/table2.JPG" alt="SupperClub" fill className="object-cover opacity-30" sizes="100vw" />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.75) 55%, rgba(10,22,40,0.4) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.6rem] tracking-[0.5em] uppercase font-medium mb-6" style={{ color: '#e2b84a' }}>
              {sc.tag}
            </p>
            <h2 className="font-display font-light text-[#faf8f3] mb-4" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 0.92 }}>
              Supper
              <span className="block font-display italic" style={{ color: 'rgba(226,184,74,0.85)' }}>Club</span>
            </h2>
            <div className="w-10 h-px my-6" style={{ background: '#e2b84a' }} />
            <p className="font-display font-light italic mb-6" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: 'rgba(250,248,243,0.9)', lineHeight: 1.5 }}>
              &ldquo;{sc.tagline}&rdquo;
            </p>
            <p className="font-light mb-10" style={{ fontSize: '1rem', color: 'rgba(250,248,243,0.75)', lineHeight: 1.75, maxWidth: 480 }}>
              {sc.description}
            </p>

            {/* 3 highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[sc.items[2], sc.items[3], sc.items[4]].map((item, i) => (
                <span key={i} className="text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2 border" style={{ color: 'rgba(250,248,243,0.7)', borderColor: 'rgba(226,184,74,0.25)', background: 'rgba(226,184,74,0.04)' }}>
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={SLUG[lang] || SLUG.es}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-medium px-7 py-4 transition-all duration-300"
              style={{ color: '#0a1628', background: '#e2b84a', textDecoration: 'none' }}
            >
              {CTA[lang] || CTA.es}
              <span className="text-base leading-none">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right: subtle image stack on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative h-96"
        >
          <div className="absolute top-0 right-8 w-56 h-72 overflow-hidden" style={{ border: '1px solid rgba(226,184,74,0.15)' }}>
            <Image src="/dressage5.JPG" alt="Table dressée pour le SupperClub Panama City" fill className="object-cover opacity-80" sizes="224px" />
          </div>
          <div className="absolute bottom-0 left-0 w-52 h-64 overflow-hidden" style={{ border: '1px solid rgba(226,184,74,0.15)' }}>
            <Image src="/assiette6.jpeg" alt="Assiette gastronomique — dîner exclusif Panama" fill className="object-cover opacity-80" sizes="208px" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
