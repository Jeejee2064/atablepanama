'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LangSwitcher from '../LangSwitcher';
import WhatsAppButton from '../WhatsAppButton';
import PageFooter from '../PageFooter';
import ClickableImage from '../ClickableImage';
import PageAnchors from '../PageAnchors';
import ParallaxBanner from '../ParallaxBanner';

const EVENT_TYPES = {
  es: [
    { label: 'Bodas & Celebraciones', img: '/table2.JPG' },
    { label: 'Eventos Corporativos', img: '/deco1.jpeg' },
    { label: 'Congresos & Incentivos', img: '/dressage1.JPG' },
    { label: 'Cócteles & Recepciones', img: '/assiette7.jpeg' },
  ],
  en: [
    { label: 'Weddings & Celebrations', img: '/table2.JPG' },
    { label: 'Corporate Events', img: '/deco1.jpeg' },
    { label: 'Congresses & Incentives', img: '/dressage1.JPG' },
    { label: 'Cocktails & Receptions', img: '/assiette7.jpeg' },
  ],
  fr: [
    { label: 'Mariages & Célébrations', img: '/table2.JPG' },
    { label: "Événements d'Entreprise", img: '/deco1.jpeg' },
    { label: 'Congrès & Incentives', img: '/dressage1.JPG' },
    { label: 'Cocktails & Réceptions', img: '/assiette7.jpeg' },
  ],
};

const PROMISE = {
  es: [
    { word: 'Calidad', desc: 'Productos frescos seleccionados cada mañana. Ningún compromiso.' },
    { word: 'Elegancia', desc: 'Presentación, servicio y atención al detalle en cada plato.' },
    { word: 'Puntualidad', desc: 'Un servicio de catering es una promesa. La cumplimos.' },
  ],
  en: [
    { word: 'Quality', desc: 'Fresh products selected every morning. No compromise.' },
    { word: 'Elegance', desc: 'Presentation, service and attention to detail in every dish.' },
    { word: 'Punctuality', desc: 'A catering service is a promise. We keep it.' },
  ],
  fr: [
    { word: 'Qualité', desc: 'Produits frais sélectionnés chaque matin. Aucun compromis.' },
    { word: 'Élégance', desc: 'Présentation, service et souci du détail dans chaque assiette.' },
    { word: 'Ponctualité', desc: 'Un service traiteur est une promesse. Nous la tenons.' },
  ],
};

const QUOTE = {
  es: 'Cada evento tiene una sola oportunidad de ser perfecto. Nos aseguramos de que lo sea.',
  en: 'Every event has only one chance to be perfect. We make sure it is.',
  fr: "Chaque événement n'a qu'une seule chance d'être parfait. Nous veillons à ce qu'il le soit.",
};

function Tag({ children }) {
  return <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-6" style={{ color: '#0a1628' }}>{children}</p>;
}

export default function ServiceCateringPage({ lang, service, sp, langSlugMap, otherServices }) {
  const events = EVENT_TYPES[lang] || EVENT_TYPES.es;
  const promise = PROMISE[lang] || PROMISE.es;
  const quote = QUOTE[lang] || QUOTE.es;

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#111111]" style={{ fontFamily: 'var(--font-jost), sans-serif' }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f3]/95 backdrop-blur-md border-b border-black/6 py-4 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image src="/logoBlack.svg" alt="À table Panama" fill className="object-contain" />
            </div>
            <span className="font-display text-base tracking-[0.25em] uppercase" style={{ color: 'rgba(17,17,17,0.88)' }}>À table</span>
          </Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <LangSwitcher currentLang={lang} slugMap={langSlugMap} />
            <Link href="/#contact" className="hidden sm:block text-[0.65rem] tracking-[0.22em] uppercase font-medium px-5 py-2.5" style={{ color: '#111111', background: '#c9a84c', textDecoration: 'none' }}>{sp.contactCta}</Link>
          </div>
        </div>
      </header>

      <section className="relative h-screen min-h-[580px] overflow-hidden">
        <Image src="/dressage2.JPG" alt={service.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(250,248,243,0.18) 0%, rgba(250,248,243,0.12) 40%, rgba(250,248,243,0.88) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <Tag>{service.tag} · Panama City</Tag>
            <h1 className="font-display font-light text-[#111111]" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.95 }}>
              {service.title}
            </h1>
            <PageAnchors dark={true} sections={[
              { id: 'sc-offer', label: service.h2_offer },
              { id: 'sc-whom', label: service.h2_whom },
              { id: 'sc-approach', label: service.h2_approach },
            ]} />
          </motion.div>
        </div>
      </section>

      <section id="sc-offer" className="px-6 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <p className="font-display font-light italic" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.55, color: 'rgba(17,17,17,0.88)' }}>
          {service.description}
        </p>
        <div>
          <Tag>{service.h2_offer}</Tag>
          <ul className="flex flex-col gap-4">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-center gap-4 font-light" style={{ fontSize: '1.05rem', color: 'rgba(17,17,17,0.88)' }}>
                <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(226,184,74,0.6)' }} />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="sc-whom" className="px-6 lg:px-16 pb-16 lg:pb-24 max-w-7xl mx-auto">
        <Tag>{service.h2_whom}</Tag>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 h-48 sm:h-64 lg:h-72">
          {events.map((ev, i) => (
            <div key={i} className="relative overflow-hidden">
              <ClickableImage src={ev.img} alt={ev.label} fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(250,248,243,0.85) 0%, transparent 55%)' }} />
              <p className="absolute bottom-3 left-3 right-3 font-light text-[0.8rem] text-[#111111] pointer-events-none">{ev.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 lg:px-20 py-20 lg:py-28 overflow-hidden bg-[#ede9df]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-px h-12 mx-auto mb-8" style={{ background: 'linear-gradient(to bottom, transparent, #e2b84a)' }} />
          <p className="font-display font-light italic" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: 1.45, color: 'rgba(17,17,17,0.90)' }}>
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </section>


      {/* Galerie ambiance */}
      <section className="grid grid-cols-2 gap-px h-56 sm:h-72">
        {['/table1.jpeg', '/assiette6.jpeg'].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <ClickableImage src={src} alt="" fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </section>

      <section id="sc-approach" className="px-6 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto">
        <Tag>{service.h2_approach}</Tag>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
          {promise.map((p, i) => (
            <div key={i}>
              <p className="font-display font-light mb-3" style={{ fontSize: '2.4rem', color: '#111111' }}>{p.word}</p>
              <div className="w-8 h-px mb-4" style={{ background: '#c9a84c' }} />
              <p className="font-light" style={{ fontSize: '1rem', color: 'rgba(17,17,17,0.88)', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <ParallaxBanner src="/plate5.JPG" height="h-56 sm:h-72 lg:h-96" />

      <section className="bg-[#ede9df] px-6 py-16 text-center">
        <Link href="/#contact" className="inline-flex items-center gap-4 text-[0.7rem] tracking-[0.3em] uppercase" style={{ color: '#111111', background: '#c9a84c', padding: '16px 40px', textDecoration: 'none' }}>
          {sp.contactCta}
        </Link>
      </section>

      <OtherServices otherServices={otherServices} lang={lang} sp={sp} />
      <PageFooter lang={lang} />
      <WhatsAppButton />
    </div>
  );
}

function OtherServices({ otherServices, lang, sp }) {
  return (
    <section className="px-6 lg:px-16 py-14 lg:py-20 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase mb-8" style={{ color: 'rgba(17,17,17,0.25)' }}>{sp.otherServices}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {otherServices.map(svc => (
            <Link key={svc.key} href={`/${lang}/${svc.slug}`} className="flex flex-col gap-3 p-6 lg:p-8 bg-[#faf8f3] no-underline">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: '#0a1628' }}>{svc.tag}</p>
              <p className="font-display font-light" style={{ fontSize: '1.6rem', color: '#111111', lineHeight: 1.2 }}>{svc.title}</p>
              <span className="text-sm mt-1" style={{ color: 'rgba(17,17,17,0.25)' }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
