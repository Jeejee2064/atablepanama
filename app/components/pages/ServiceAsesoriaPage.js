'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LangSwitcher from '../LangSwitcher';
import WhatsAppButton from '../WhatsAppButton';
import PageFooter from '../PageFooter';
import ClickableImage from '../ClickableImage';
import PageAnchors from '../PageAnchors';

const PILLAR_DATA = {
  es: [
    { num: '01', title: 'Menú & Identidad', desc: 'Diseño de carta, ingeniería de menú, posicionamiento de precio y narrativa culinaria que diferencia su establecimiento.' },
    { num: '02', title: 'Equipo & Formación', desc: 'Selección, formación y organización de brigadas de cocina y sala. Cultura de excelencia y gestión del talento.' },
    { num: '03', title: 'Operaciones & Proveedores', desc: 'Optimización de costos, selección de proveedores locales de calidad y flujos operacionales eficientes.' },
  ],
  en: [
    { num: '01', title: 'Menu & Identity', desc: 'Menu design, menu engineering, price positioning and culinary narrative that sets your establishment apart.' },
    { num: '02', title: 'Team & Training', desc: 'Selection, training and organization of kitchen and front-of-house brigades. Culture of excellence and talent management.' },
    { num: '03', title: 'Operations & Suppliers', desc: 'Cost optimization, selection of quality local suppliers and efficient operational workflows.' },
  ],
  fr: [
    { num: '01', title: 'Menu & Identité', desc: 'Conception de carte, ingénierie de menu, positionnement tarifaire et narration culinaire qui distingue votre établissement.' },
    { num: '02', title: 'Équipe & Formation', desc: "Sélection, formation et organisation des brigades de cuisine et de salle. Culture d'excellence et gestion des talents." },
    { num: '03', title: 'Opérations & Fournisseurs', desc: 'Optimisation des coûts, sélection de fournisseurs locaux de qualité et flux opérationnels efficaces.' },
  ],
};

const PROCESS = {
  es: ['Audit & diagnóstico', 'Estrategia & concepto', 'Implementación', 'Seguimiento'],
  en: ['Audit & diagnosis', 'Strategy & concept', 'Implementation', 'Follow-up'],
  fr: ['Audit & diagnostic', 'Stratégie & concept', 'Mise en œuvre', 'Suivi'],
};

const MANIFESTO = {
  es: 'La consultoría no es un documento. Es una inmersión en su cocina, una comprensión de su cultura y una transformación que perdura.',
  en: 'Consulting is not a document. It is an immersion in your kitchen, an understanding of your culture and a transformation that lasts.',
  fr: "Le conseil n'est pas un document. C'est une immersion dans votre cuisine, une compréhension de votre culture et une transformation qui dure.",
};

const FOR_WHOM = {
  es: ['Restaurantes en apertura', 'Establecimientos en reinvención', 'Hoteles boutique & resorts', 'Operadores F&B', 'Grupos de restauración'],
  en: ['Opening restaurants', 'Establishments in reinvention', 'Boutique hotels & resorts', 'F&B operators', 'Restaurant groups'],
  fr: ['Restaurants en ouverture', 'Établissements en réinvention', 'Hôtels boutique & resorts', 'Opérateurs F&B', 'Groupes de restauration'],
};

function Tag({ children }) {
  return <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-6" style={{ color: '#e2b84a' }}>{children}</p>;
}

export default function ServiceAsesoriaPage({ lang, service, sp, langSlugMap, otherServices }) {
  const pillars = PILLAR_DATA[lang] || PILLAR_DATA.es;
  const process = PROCESS[lang] || PROCESS.es;
  const manifesto = MANIFESTO[lang] || MANIFESTO.es;
  const forWhom = FOR_WHOM[lang] || FOR_WHOM.es;

  return (
    <div className="min-h-screen bg-[#141414] text-[#faf8f3]" style={{ fontFamily: 'var(--font-jost), sans-serif' }}>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-white/5 py-4 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image src="/logoWhite.svg" alt="À table Panama" fill className="object-contain" />
            </div>
            <span className="font-display text-base tracking-[0.25em] uppercase" style={{ color: 'rgba(250,248,243,0.92)' }}>À table</span>
          </Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <LangSwitcher currentLang={lang} slugMap={langSlugMap} />
            <Link href="/#contact" className="hidden sm:block text-[0.65rem] tracking-[0.22em] uppercase font-medium px-5 py-2.5" style={{ color: '#0e0e0e', background: '#e2b84a', textDecoration: 'none' }}>{sp.contactCta}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-end px-6 lg:px-14 pt-32 pb-12 lg:pb-20 bg-[#141414] order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Tag>{service.tag} · Panama City</Tag>
            <h1 className="font-display font-light text-[#faf8f3] mb-6" style={{ fontSize: 'clamp(2.6rem, 5vw, 5.5rem)', lineHeight: 1.02 }}>
              {service.title}
            </h1>
            <p className="font-light mb-10 max-w-lg" style={{ fontSize: '1.1rem', color: 'rgba(250,248,243,0.92)', lineHeight: 1.75 }}>
              {service.description}
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.22em] uppercase font-medium px-7 py-3.5" style={{ color: '#0e0e0e', background: '#e2b84a', textDecoration: 'none' }}>
              {sp.contactCta}
            </Link>
          </motion.div>
        </div>
        <div className="relative h-64 sm:h-80 lg:h-auto order-1 lg:order-2 overflow-hidden">
          <Image src="/produits.png" alt={service.title} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(to right, #141414 0%, transparent 35%)' }} />
          <div className="absolute inset-0 lg:hidden" style={{ background: 'linear-gradient(to top, #141414 0%, transparent 60%)' }} />
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#1a1a1a] px-6 lg:px-20 py-16 lg:py-24">
        <p className="font-display font-light italic text-center mx-auto max-w-3xl" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', lineHeight: 1.55, color: 'rgba(250,248,243,0.92)' }}>
          &ldquo;{manifesto}&rdquo;
        </p>
      </section>

      {/* 3 piliers */}
      <section id="sc-offer" className="px-6 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto">
        <Tag>{service.h2_offer}</Tag>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {pillars.map((p, i) => (
            <div key={i} className="p-7 lg:p-10">
              <p className="font-display font-light mb-5" style={{ fontSize: '3rem', color: 'rgba(226,184,74,0.2)', lineHeight: 1 }}>{p.num}</p>
              <h3 className="font-medium mb-3" style={{ fontSize: '1.15rem', color: '#faf8f3' }}>{p.title}</h3>
              <p className="font-light" style={{ fontSize: '1rem', color: 'rgba(250,248,243,0.92)', lineHeight: 1.72 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="sc-approach" className="bg-[#1a1a1a] px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <Tag>{service.h2_approach}</Tag>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center border text-[0.6rem]" style={{ borderColor: 'rgba(226,184,74,0.4)', color: '#e2b84a' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-light" style={{ fontSize: '1rem', color: 'rgba(250,248,243,0.92)', lineHeight: 1.4 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui + image */}
      <section id="sc-whom" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden order-2 lg:order-1">
          <ClickableImage src="/ingredients.png" alt="Ingrédients" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </div>
        <div className="px-6 lg:px-14 py-14 lg:py-20 bg-[#141414] flex flex-col justify-center order-1 lg:order-2">
          <Tag>{service.h2_whom}</Tag>
          <ul className="flex flex-col gap-4">
            {forWhom.map((item, i) => (
              <li key={i} className="flex items-center gap-4 font-light" style={{ fontSize: '1.05rem', color: 'rgba(250,248,243,0.92)' }}>
                <span className="w-5 h-px flex-shrink-0" style={{ background: '#e2b84a' }} />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OtherServices otherServices={otherServices} lang={lang} sp={sp} />
      <PageFooter lang={lang} />
      <WhatsAppButton />
    </div>
  );
}

function OtherServices({ otherServices, lang, sp }) {
  return (
    <section className="bg-[#1a1a1a] px-6 lg:px-16 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase mb-8" style={{ color: 'rgba(250,248,243,0.35)' }}>{sp.otherServices}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {otherServices.map(svc => (
            <Link key={svc.key} href={`/${lang}/${svc.slug}`} className="flex flex-col gap-3 p-6 lg:p-8 bg-[#1a1a1a] no-underline">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: '#e2b84a' }}>{svc.tag}</p>
              <p className="font-display font-light" style={{ fontSize: '1.6rem', color: '#faf8f3', lineHeight: 1.2 }}>{svc.title}</p>
              <span className="text-sm mt-1" style={{ color: 'rgba(250,248,243,0.35)' }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
