import Image from 'next/image';
import Link from 'next/link';
import { translations } from '../lib/translations';

const RIGHTS = {
  es: 'Todos los derechos reservados',
  en: 'All rights reserved',
  fr: 'Tous droits réservés',
};

const TAGLINES = {
  es: 'Alta gastronomía en Ciudad de Panamá',
  en: 'Fine dining in Panama City',
  fr: 'Haute gastronomie à Panama City',
};

const NAV_LABELS = {
  es: { services: 'Servicios', team: 'Equipo', contact: 'Contacto' },
  en: { services: 'Services', team: 'Team', contact: 'Contact' },
  fr: { services: 'Services', team: 'Équipe', contact: 'Contact' },
};

export default function PageFooter({ lang = 'es' }) {
  const year = new Date().getFullYear();
  const t = translations[lang] || translations.es;
  const nav = NAV_LABELS[lang] || NAV_LABELS.es;

  const services = [
    { label: t.services.asesoria.title, href: `/${lang}/${t.services.asesoria.slug}` },
    { label: t.services.catering.title, href: `/${lang}/${t.services.catering.slug}` },
    { label: t.services.chef.title, href: `/${lang}/${t.services.chef.slug}` },
    { label: t.services.supperclub.title, href: `/${lang}/${t.services.supperclub.slug}` },
  ];

  return (
    <footer className="border-t border-white/10 pt-16 pb-10 px-6 lg:px-12 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 relative flex-shrink-0">
                <Image src="/logoWhite.svg" alt="À table Panama" fill className="object-contain" />
              </div>
              <span className="font-display text-sm tracking-[0.25em] uppercase" style={{ color: 'rgba(250,248,243,0.9)' }}>
                À table
              </span>
            </div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(250,248,243,0.55)' }}>
              {TAGLINES[lang]}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: '#e2b84a' }}>
              {nav.services}
            </p>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm font-light"
                    style={{ color: 'rgba(250,248,243,0.72)', textDecoration: 'none' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: '#e2b84a' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm font-light" style={{ color: 'rgba(250,248,243,0.72)', textDecoration: 'none' }}>← Home</Link></li>
              <li><Link href="/#team" className="text-sm font-light" style={{ color: 'rgba(250,248,243,0.72)', textDecoration: 'none' }}>{nav.team}</Link></li>
              <li><Link href="/#contact" className="text-sm font-light" style={{ color: 'rgba(250,248,243,0.72)', textDecoration: 'none' }}>{nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: '#e2b84a' }}>
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+50765202230" className="text-sm font-light" style={{ color: 'rgba(250,248,243,0.8)', textDecoration: 'none' }}>
                +507 6520-2230
              </a>
              <a href="mailto:atablepanama@gmail.com" className="text-sm font-light" style={{ color: 'rgba(250,248,243,0.8)', textDecoration: 'none' }}>
                atablepanama@gmail.com
              </a>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(250,248,243,0.55)' }}>
                Local 1, Edificio Antigua Domingo<br />Plaza Santa Ana, Panama City
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.6rem] tracking-[0.15em] uppercase" style={{ color: 'rgba(250,248,243,0.4)' }}>
            © {year} À table Panama — {RIGHTS[lang]}
          </p>
          <div className="w-8 h-px" style={{ background: 'rgba(226,184,74,0.4)' }} />
        </div>
      </div>
    </footer>
  );
}
