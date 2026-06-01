'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LangSwitcher from '../LangSwitcher';
import WhatsAppButton from '../WhatsAppButton';
import PageFooter from '../PageFooter';
import ClickableImage from '../ClickableImage';
import PageAnchors from '../PageAnchors';

const STEPS = {
  es: [
    { n: '01', title: 'Consulta', desc: 'Conversamos sobre sus gustos, intolerancias, la ocasión y sus expectativas. El menú empieza aquí.' },
    { n: '02', title: 'Selección', desc: 'El chef selecciona los mejores productos del mercado fresco de Panama City, esa misma mañana.' },
    { n: '03', title: 'Preparación', desc: 'En su cocina, con precisión y respeto. Todo preparado ante usted o discretamente en su ausencia.' },
    { n: '04', title: 'Servicio', desc: 'Platos dressés, servicio a mesa, limpieza total. Usted solo disfruta la velada.' },
  ],
  en: [
    { n: '01', title: 'Consultation', desc: 'We discuss your tastes, dietary needs, the occasion and your expectations. The menu starts here.' },
    { n: '02', title: 'Sourcing', desc: "The chef selects the finest products from Panama City's fresh market that very morning." },
    { n: '03', title: 'Preparation', desc: 'In your kitchen, with precision and care. Everything prepared in your presence or discreetly in your absence.' },
    { n: '04', title: 'Service', desc: 'Plated dishes, table service, full clean-up. You simply enjoy the evening.' },
  ],
  fr: [
    { n: '01', title: 'Consultation', desc: "Nous échangeons sur vos goûts, intolérances, l'occasion et vos attentes. Le menu commence ici." },
    { n: '02', title: 'Sélection', desc: 'Le chef sélectionne les meilleurs produits du marché frais de Panama City, le matin même.' },
    { n: '03', title: 'Préparation', desc: 'Dans votre cuisine, avec précision et soin. Tout préparé devant vous ou discrètement en votre absence.' },
    { n: '04', title: 'Service', desc: "Assiettes dressées, service à table, nettoyage complet. Vous n'avez qu'à profiter de la soirée." },
  ],
};

const TAGLINE = {
  es: 'Un restaurante de alta cocina. En su casa.',
  en: 'A fine dining restaurant. In your home.',
  fr: 'Un restaurant gastronomique. Chez vous.',
};

const OCCASIONS = {
  es: ['Cenas románticas íntimas', 'Celebraciones familiares', 'Recepciones en villa', 'Clientes & socios en casa', 'Ocasiones especiales'],
  en: ['Intimate romantic dinners', 'Family celebrations', 'Villa receptions', 'Clients & partners at home', 'Special occasions'],
  fr: ['Dîners romantiques intimes', 'Célébrations familiales', 'Réceptions en villa', 'Clients & associés à domicile', 'Occasions spéciales'],
};

function Tag({ children }) {
  return <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-6" style={{ color: '#0a1628' }}>{children}</p>;
}

export default function ServiceChefPage({ lang, service, sp, langSlugMap, otherServices }) {
  const steps = STEPS[lang] || STEPS.es;
  const tagline = TAGLINE[lang] || TAGLINE.es;
  const occasions = OCCASIONS[lang] || OCCASIONS.es;

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

      {/* Hero — image chef plein fond sur mobile, split sur desktop */}
      <section className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">
        <div className="relative h-72 sm:h-96 lg:h-auto lg:col-span-3 overflow-hidden order-1">
          <Image src="/personalchef.png" alt={service.title} fill className="object-cover object-top" priority sizes="(max-width:1024px) 100vw, 60vw" />
          <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(to right, transparent 55%, #faf8f3 100%)' }} />
          <div className="absolute inset-0 lg:hidden" style={{ background: 'linear-gradient(to top, #faf8f3 0%, transparent 55%)' }} />
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-10 pt-8 pb-14 lg:pt-36 lg:col-span-2 bg-[#faf8f3] order-2">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
            <Tag>{service.tag} · Panama City</Tag>
            <h1 className="font-display font-light text-[#111111] mb-5" style={{ fontSize: 'clamp(2.4rem, 4vw, 4.5rem)', lineHeight: 1.05 }}>
              {service.title}
            </h1>
            <div className="w-10 h-px mb-5" style={{ background: '#c9a84c' }} />
            <p className="font-display font-light italic" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'rgba(17,17,17,0.88)', lineHeight: 1.45 }}>
              {tagline}
            </p>
            <PageAnchors sections={[
              { id: 'sc-approach', label: service.h2_approach },
              { id: 'sc-whom', label: service.h2_whom },
              { id: 'sc-offer', label: service.h2_offer },
            ]} />
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 lg:px-20 py-14 lg:py-20 max-w-3xl mx-auto text-center">
        <p className="font-light" style={{ fontSize: '1.1rem', color: 'rgba(17,17,17,0.88)', lineHeight: 1.8 }}>
          {service.description}
        </p>
      </section>


      {/* Galerie assiettes */}
      <section className="grid grid-cols-3 gap-px h-48 sm:h-64">
        {['/assiette2.png', '/produits.png', '/chinchin.png'].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <ClickableImage src={src} alt="" fill className="object-cover" sizes="33vw" />
          </div>
        ))}
      </section>

      {/* 4 étapes */}
      <section id="sc-approach" className="bg-[#ede9df] px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <Tag>{service.h2_approach}</Tag>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/6 border border-black/6">
            {steps.map((step, i) => (
              <div key={i} className="p-7 lg:p-8">
                <p className="font-display font-light mb-4" style={{ fontSize: '2.8rem', color: 'rgba(226,184,74,0.15)', lineHeight: 1 }}>{step.n}</p>
                <p className="font-medium mb-3" style={{ fontSize: '1.1rem', color: '#111111' }}>{step.title}</p>
                <p className="font-light" style={{ fontSize: '0.95rem', color: 'rgba(17,17,17,0.88)', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions + mosaïque assiettes */}
      <section id="sc-whom" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 lg:px-14 py-14 lg:py-20 bg-[#faf8f3] flex flex-col justify-center order-1">
          <Tag>{service.h2_whom}</Tag>
          <ul className="flex flex-col gap-4 mb-10">
            {occasions.map((item, i) => (
              <li key={i} className="flex items-center gap-4 font-light" style={{ fontSize: '1.05rem', color: 'rgba(17,17,17,0.88)' }}>
                <span className="w-5 h-px flex-shrink-0" style={{ background: '#c9a84c' }} />{item}
              </li>
            ))}
          </ul>
          <Link href="/#contact" className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.22em] uppercase font-medium px-7 py-3.5" style={{ color: '#111111', background: '#c9a84c', textDecoration: 'none' }}>
            {sp.contactCta} <span className="block w-7 h-px" style={{ background: '#c9a84c' }} />
          </Link>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-64 sm:h-80 lg:h-auto order-2">
          {['/assiette1.png', '/assiette2.png', '/assiette3.png', '/assiette4.png'].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <ClickableImage src={src} alt="" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section id="sc-offer" className="bg-[#ede9df] px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <Tag>{service.h2_offer}</Tag>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.items.map((item, i) => (
              <div key={i} className="p-5 border font-light" style={{ borderColor: 'rgba(226,184,74,0.15)', fontSize: '1rem', color: 'rgba(17,17,17,0.88)', lineHeight: 1.5 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Photo pleine largeur */}
      <section className="relative h-56 sm:h-72 lg:h-96 overflow-hidden">
        <ClickableImage src="/table2.png" alt="" fill className="object-cover" sizes="100vw" />
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
