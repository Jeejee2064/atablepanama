'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

const SERVICE_DATA = [
  {
    key: 'catering',
    images: ['/decorationtable.png', '/table3.png'],
    accent: 'I',
  },
  {
    key: 'chef',
    images: ['/personalchef.png', '/assiette2.png'],
    accent: 'II',
  },
  {
    key: 'asesoria',
    images: ['/produits.png', '/produits2.png'],
    accent: 'III',
  },
];

function ServiceCard({ service, data, index, lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[65vh]`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'} h-72 lg:h-auto`}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={data.images[0]}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r from-transparent to-[#f5f1e8]/40' : 'bg-gradient-to-l from-transparent to-[#f5f1e8]/40'}`} />

        {/* Roman numeral */}
        <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} font-display text-8xl text-white/8 font-light select-none leading-none`}>
          {data.accent}
        </div>

        {/* Tag */}
        <div className={`absolute bottom-5 ${isEven ? 'left-5' : 'left-5 lg:right-5 lg:left-auto'}`}>
          <span className="text-[8px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-3 py-1.5 bg-[#faf8f3]/30 backdrop-blur-sm">
            {service.tag}
          </span>
        </div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center px-8 lg:px-14 xl:px-18 py-14 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        style={{ background: isEven ? 'linear-gradient(to left, #faf8f3, #f0edf8)' : 'linear-gradient(to right, #faf8f3, #f0edf8)' }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 + index * 0.1 }}
          className="w-10 h-px bg-gold mb-7 origin-left"
        />

        <h3 className="font-display text-4xl lg:text-5xl xl:text-6xl text-[#111111] font-light leading-tight mb-5">
          {service.title}
        </h3>

        <p className="text-[#111111]/80 text-base leading-relaxed mb-8 max-w-sm font-light tracking-wide">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-7">
          {service.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.08 + i * 0.05 }}
              className="flex items-center gap-3 text-sm text-[#111111]/75 tracking-wide font-light"
            >
              <span className="w-4 h-px bg-gold/40 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* CTA → service detail page */}
        <Link
          href={`/${lang}/${service.slug}`}
          className="self-start inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-medium px-6 py-3 border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300"
        >
          {service.learnMore || 'En savoir plus'}
          <span className="text-base leading-none">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t, lang } = useLanguage();
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-12%' });

  return (
    <section id="services" style={{ background: "linear-gradient(160deg, #faf8f3 0%, #eef1f8 100%)" }}>
      {/* Header */}
      <div ref={titleRef} className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gold text-[9px] tracking-[0.4em] uppercase mb-4 font-medium"
        >
          {t.services.subtitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-7xl font-light text-[#111111]"
        >
          {t.services.title}
        </motion.h2>
      </div>

      {/* Blocks */}
      <div className="border-t border-black/6">
        {SERVICE_DATA.map((data, i) => {
          const service = { ...t.services[data.key], learnMore: t.services.learnMore };
          return (
            <div key={data.key} className="border-b border-black/6">
              <ServiceCard service={service} data={data} index={i} lang={lang} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
