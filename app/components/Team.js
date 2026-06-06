'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const MEMBERS = [
  { key: 'chris', image: '/chris.jpeg' },
  { key: 'clemence', image: '/clemence.png' },
  { key: 'julio', image: '/Julio.jpeg' },
];

function MemberCard({ member, data, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Portrait */}
      <div className="relative overflow-hidden mb-6 aspect-[3/4]">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={member.image}
            alt={data.name}
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-gold/35" />
        <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-gold/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f1e8]/70 via-transparent to-transparent" />
      </div>

      <div className="px-1">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="w-5 h-px bg-gold" />
          <p className="text-[9px] tracking-[0.3em] uppercase text-gold font-medium">{data.role}</p>
        </div>
        <h3 className="font-display text-4xl font-light text-[#111111] mb-3">{data.name}</h3>
        <p className="text-[#111111]/80 text-base leading-relaxed font-light tracking-wide">{data.bio}</p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-12%' });

  return (
    <section id="team" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f1e8 0%, #edf0f8 100%)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <div ref={titleRef} className="mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold text-[9px] tracking-[0.4em] uppercase mb-4 font-medium"
          >
            {t.team.subtitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-6xl md:text-7xl text-[#111111]"
          >
            {t.team.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {MEMBERS.map((member, i) => (
            <MemberCard key={member.key} member={member} data={t.team[member.key]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
