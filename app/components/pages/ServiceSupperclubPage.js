'use client';

import Image from 'next/image';
import FadeImage from '../FadeImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LangSwitcher from '../LangSwitcher';
import WhatsAppButton from '../WhatsAppButton';
import PageFooter from '../PageFooter';
import ClickableImage from '../ClickableImage';
import PageAnchors from '../PageAnchors';
import FaqSection from '../FaqSection';

function Tag({ children }) {
  return <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-6" style={{ color: '#e2b84a' }}>{children}</p>;
}

export default function ServiceSupperclubPage({ lang, service, sp, langSlugMap, otherServices }) {
  return (
    <div className="min-h-screen text-[#111111]" style={{ fontFamily: 'var(--font-jost), sans-serif', background: '#faf8f3' }}>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 py-4 px-5 lg:px-12" style={{ background: 'rgba(250,248,243,0.95)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image src="/logoBlack.svg" alt="À table Panama" fill className="object-contain" />
            </div>
            <span className="font-display text-base tracking-[0.25em] uppercase" style={{ color: 'rgba(17,17,17,0.85)' }}>À table</span>
          </Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <LangSwitcher currentLang={lang} slugMap={langSlugMap} />
            <Link href="/#contact" className="hidden sm:block text-[0.65rem] tracking-[0.22em] uppercase font-medium px-5 py-2.5" style={{ color: '#0a1628', background: '#c9a84c', textDecoration: 'none' }}>{sp.contactCta}</Link>
          </div>
        </div>
      </header>

      {/* Hero — plein écran, atmosphere de dîner secret */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <FadeImage src="/dressage7.jpeg" alt="SupperClub by À TABLE" fill className="object-cover" priority sizes="100vw" duration={800} />
        {/* Overlay profond, ambiance nuit */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.35) 0%, rgba(10,22,40,0.15) 35%, rgba(10,22,40,0.82) 100%)' }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-[0.6rem] tracking-[0.5em] uppercase font-medium mb-8" style={{ color: '#e2b84a' }}>
              {service.tag}
            </p>
            <h1 className="font-display font-light text-[#faf8f3] mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', lineHeight: 0.92 }}>
              SupperClub
              <span className="block font-display italic" style={{ fontSize: '0.6em', color: 'rgba(226,184,74,0.85)' }}>by À TABLE</span>
            </h1>
            <div className="w-px h-12 mx-auto mb-6" style={{ background: 'linear-gradient(to bottom, transparent, rgba(226,184,74,0.5), transparent)' }} />
            <p className="font-display font-light italic" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'rgba(250,248,243,0.88)', maxWidth: 500, margin: '0 auto' }}>
              &ldquo;{service.tagline}&rdquo;
            </p>
          <PageAnchors dark={true} sections={[
              { id: 'sc-concept', label: service.h2_offer },
              { id: 'sc-whom', label: service.h2_whom },
              { id: 'sc-approach', label: service.h2_approach },
            ]} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-10 mx-auto" style={{ background: 'linear-gradient(to bottom, transparent, rgba(226,184,74,0.4))' }} />
        </div>
      </section>

      {/* Concept */}
      <section id="sc-concept" className="px-6 lg:px-20 py-20 lg:py-28 max-w-4xl mx-auto text-center">
        <Tag>{service.h2_offer}</Tag>
        <p className="font-display font-light italic mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', lineHeight: 1.5, color: 'rgba(17,17,17,0.90)' }}>
          {service.description}
        </p>
        <p style={{ fontSize: '1.05rem', color: 'rgba(17,17,17,0.75)', lineHeight: 1.8, fontWeight: 300 }}>
          {service.offer_text}
        </p>
      </section>

      {/* Ce qui rend l'expérience unique — liste sur fond très sombre */}
      <section style={{ background: 'linear-gradient(160deg, #f0ece0 0%, #eaecf5 100%)', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <Tag>✦ {lang === 'es' ? 'Qué hace especial la experiencia' : lang === 'en' ? 'What makes it special' : "Ce qui rend l'expérience unique"}</Tag>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(17,17,17,0.05)' }}>
            {service.items.map((item, i) => (
              <div key={i} className="px-8 py-6" style={{ background: '#f0ece0' }}>
                <div className="flex items-start gap-4">
                  <span className="font-display" style={{ fontSize: '1.2rem', color: '#0a1628', flexShrink: 0, lineHeight: 1 }}>✦</span>
                  <p style={{ fontSize: '1rem', color: 'rgba(17,17,17,0.85)', lineHeight: 1.55, fontWeight: 300 }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos ambiance */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: '#faf8f3', height: 'clamp(280px, 35vw, 420px)' }}>
        {[
          ['/dressage5.JPG', 'Table dressée SupperClub Panama City'],
          ['/assiette6.jpeg', 'Assiette dégustation — dîner exclusif Panama'],
          ['/table2.jpeg', 'Ambiance dîner privé Panama City'],
        ].map(([src, alt], i) => (
          <div key={i} className="relative overflow-hidden">
            <ClickableImage src={src} alt={alt} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" />
          </div>
        ))}
      </section>

      {/* Pour qui */}
      <section id="sc-whom" className="px-6 lg:px-20 py-20 lg:py-28 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Tag>{service.h2_whom}</Tag>
          <p style={{ fontSize: '1.05rem', color: 'rgba(17,17,17,0.82)', lineHeight: 1.8, fontWeight: 300 }}>
            {service.whom_text}
          </p>
        </div>
        <div className="relative h-64 lg:h-96 overflow-hidden">
          <ClickableImage src="/deco3.jpeg" alt="Décoration élégante pour soirée exclusive — SupperClub Panama" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.3) 0%, transparent 60%)' }} />
        </div>
      </section>


      {/* Galerie ambiance SupperClub */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-px h-48 sm:h-64">
        {[
          ['/table2.JPG', 'Table dressée pour réception exclusive Panama City'],
          ['/plate2.JPG', 'Menu dégustation plusieurs services — SupperClub'],
          ['/assiette7.jpeg', 'Plat gastronomique — soirée privée Panama'],
          ['/deco2.jpeg', 'Mise en place raffinée — SupperClub by À TABLE'],
        ].map(([src, alt], i) => (
          <div key={i} className="relative overflow-hidden">
            <ClickableImage src={src} alt={alt} fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
          </div>
        ))}
      </section>

      {/* Philosophie — grand texte */}
      <section id="sc-approach" style={{ background: 'linear-gradient(135deg, #ede9df 0%, #e8ecf5 100%)' }} className="px-6 lg:px-20 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-8 h-px mx-auto mb-10" style={{ background: '#e2b84a' }} />
          <Tag>{service.h2_approach}</Tag>
          <p className="font-display font-light italic" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', lineHeight: 1.55, color: 'rgba(17,17,17,0.90)' }}>
            &ldquo;{service.approach_text}&rdquo;
          </p>
        </div>
      </section>

      {/* Privatisation */}
      <section className="px-6 lg:px-16 py-16 lg:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Tag>+</Tag>
          <h2 className="font-display font-light mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#111111', lineHeight: 1.1 }}>
            {service.privatize}
          </h2>
          <p className="font-light mb-8" style={{ fontSize: '1rem', color: 'rgba(17,17,17,0.72)', lineHeight: 1.7 }}>
            {service.privatizeDesc}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-4 text-[0.7rem] tracking-[0.3em] uppercase"
            style={{ color: '#e2b84a', border: '1px solid rgba(226,184,74,0.4)', padding: '16px 36px', textDecoration: 'none' }}
          >
            {sp.contactCta}
          </Link>
        </div>
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <ClickableImage src="/products7.JPG" alt="Produits gastronomiques frais — SupperClub Panama City" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </div>
      </section>

      {/* CTA réservation */}
      <section style={{ background: '#f0ece0' }} className="px-6 py-20 text-center">
        <p className="font-display font-light italic text-[#111111] mb-3" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
          {service.tagline}
        </p>
        <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-8" style={{ color: 'rgba(226,184,74,0.7)' }}>
          {service.limitedSeats}
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-4 text-[0.7rem] tracking-[0.3em] uppercase"
          style={{ color: '#0a1628', background: '#c9a84c', padding: '16px 48px', textDecoration: 'none' }}
        >
          {service.cta}
        </Link>
      </section>

      <FaqSection faq={service.faq} lang={lang} />
      <OtherServices otherServices={otherServices} lang={lang} sp={sp} />
      <PageFooter lang={lang} />
      <WhatsAppButton />
    </div>
  );
}

function OtherServices({ otherServices, lang, sp }) {
  return (
    <section className="px-6 lg:px-16 py-14 lg:py-20" style={{ background: '#faf8f3' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase mb-8" style={{ color: 'rgba(17,17,17,0.28)' }}>{sp.otherServices}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {otherServices.map(svc => (
            <Link key={svc.key} href={`/${lang}/${svc.slug}`} className="flex flex-col gap-3 p-6 lg:p-8 no-underline" style={{ background: '#faf8f3' }}>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: '#e2b84a' }}>{svc.tag}</p>
              <p className="font-display font-light" style={{ fontSize: '1.6rem', color: '#111111', lineHeight: 1.2 }}>{svc.title}</p>
              <span className="text-sm mt-1" style={{ color: 'rgba(17,17,17,0.28)' }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
