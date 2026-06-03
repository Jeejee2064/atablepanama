'use client';

import { useState } from 'react';

export default function FaqSection({ faq, lang }) {
  const [open, setOpen] = useState(null);

  if (!faq?.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const LABEL = { es: 'Preguntas frecuentes', en: 'Frequently asked questions', fr: 'Questions fréquentes' };

  return (
    <section className="px-6 lg:px-16 py-16 lg:py-20 bg-[#faf8f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-10" style={{ color: '#0a1628' }}>
          {LABEL[lang] || LABEL.es}
        </p>
        <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(17,17,17,0.08)' }}>
          {faq.map(({ q, a }, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium" style={{ fontSize: '1rem', color: '#111111', lineHeight: 1.45 }}>{q}</span>
                <span
                  className="flex-shrink-0 mt-0.5 transition-transform duration-300"
                  style={{ color: '#c9a84c', fontSize: '1.1rem', transform: open === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="mt-4 font-light" style={{ fontSize: '0.95rem', color: 'rgba(17,17,17,0.72)', lineHeight: 1.75 }}>
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
