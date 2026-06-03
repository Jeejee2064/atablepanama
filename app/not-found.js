import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '404 — À table Panama',
  description: 'Page introuvable.',
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: '#faf8f3', fontFamily: 'var(--font-jost), sans-serif' }}
    >
      {/* Image fond très atténuée */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image src="/dressage4.JPG" alt="" fill className="object-cover" sizes="100vw" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-16">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image src="/logoBlack.svg" alt="À table Panama" fill className="object-contain" />
          </div>
          <span
            className="font-display text-base tracking-[0.25em] uppercase"
            style={{ color: 'rgba(17,17,17,0.88)' }}
          >
            À table
          </span>
        </Link>

        {/* 404 */}
        <p
          className="font-display font-light mb-4 select-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', color: 'rgba(201,168,76,0.18)', lineHeight: 1 }}
        >
          404
        </p>

        <div className="w-10 h-px mx-auto mb-6" style={{ background: '#c9a84c' }} />

        <h1
          className="font-display font-light mb-4"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#111111', lineHeight: 1.1 }}
        >
          Page introuvable
        </h1>

        <p
          className="font-light mb-10 leading-relaxed"
          style={{ fontSize: '1rem', color: 'rgba(17,17,17,0.6)' }}
        >
          Cette page n'existe pas ou a été déplacée.
          <br />
          Revenez à l'accueil pour découvrir nos services.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.25em] uppercase font-medium px-8 py-4"
          style={{ background: '#0a1628', color: '#faf8f3', textDecoration: 'none' }}
        >
          Retour à l'accueil
          <span className="block w-5 h-px" style={{ background: '#c9a84c' }} />
        </Link>
      </div>
    </div>
  );
}
