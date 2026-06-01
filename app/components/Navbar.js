'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const LANGS = ['es', 'en', 'fr'];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf8f3]/95 backdrop-blur-md border-b border-gold/20 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={e => scrollTo(e, 'body')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src={scrolled ? "/logoBlack.svg" : "/logoWhite.svg"}
                alt="À table Panama"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-display text-lg tracking-[0.25em] uppercase group-hover:text-gold transition-colors duration-300 ${scrolled ? "text-[#111111]/90" : "text-cream/90"}`}>
              À table
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-medium ${scrolled ? "text-[#111111]/80 hover:text-gold" : "text-cream/85 hover:text-gold"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: lang + burger */}
          <div className="flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[10px] tracking-[0.15em] uppercase transition-all duration-300 font-medium ${
                    lang === l
                      ? 'text-gold'
                      : scrolled ? 'text-[#111111]/55 hover:text-[#111111]/85' : 'text-cream/55 hover:text-cream/85'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-1.5 w-6"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-[#faf8f3]/70 origin-center transition-colors"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-4 bg-[#faf8f3]/70"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-[#faf8f3]/70 origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#faf8f3]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-display text-4xl text-[#111111] hover:text-gold transition-colors duration-300 italic"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
