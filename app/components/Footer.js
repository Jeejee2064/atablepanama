'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const services = [
    { label: t.services.asesoria.title, href: `/${lang}/${t.services.asesoria.slug}` },
    { label: t.services.catering.title, href: `/${lang}/${t.services.catering.slug}` },
    { label: t.services.chef.title, href: `/${lang}/${t.services.chef.slug}` },
    { label: t.services.supperclub.title, href: `/${lang}/${t.services.supperclub.slug}` },
  ];

  return (
    <footer className="bg-[#f0ece0] border-t border-cream/10 pt-16 pb-10 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image src="/logoBlack.svg" alt="À table Panama" fill className="object-contain" />
              </div>
              <span className="font-display text-base tracking-[0.25em] text-[#111111]/90 uppercase">
                À table
              </span>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#111111]/60 mb-6">
              {t.footer.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">
              {t.nav.services}
            </p>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#111111]/70 hover:text-gold transition-colors duration-300 font-light"
                    style={{ textDecoration: 'none' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: t.nav.team, href: '#team' },
                { label: t.nav.contact, href: '#contact' },
              ].map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-sm text-[#111111]/70 hover:text-gold transition-colors duration-300 font-light cursor-pointer"
                    style={{ textDecoration: 'none' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+50765202230" className="text-sm text-[#111111]/75 hover:text-gold transition-colors font-light" style={{ textDecoration: 'none' }}>
                +507 6520-2230
              </a>
              <a href="mailto:atablepanama@gmail.com" className="text-sm text-[#111111]/75 hover:text-gold transition-colors font-light" style={{ textDecoration: 'none' }}>
                atablepanama@gmail.com
              </a>
              <p className="text-sm text-[#111111]/55 font-light leading-relaxed">
                Local 1, Edificio Antigua Domingo<br />Plaza Santa Ana, Panama City
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#111111]/45">
            © {year} À table Panama — {t.footer.rights}
          </p>
          <div className="w-8 h-px bg-gold/40" />
        </div>
      </div>
    </footer>
  );
}
