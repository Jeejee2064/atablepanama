'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClickableImage({ src, alt, fill, width, height, className, sizes, style, priority, objectPosition }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const imgProps = { src, alt: alt || '', className, sizes, priority };
  if (fill) {
    imgProps.fill = true;
  } else {
    imgProps.width = width;
    imgProps.height = height;
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group block w-full h-full relative cursor-zoom-in"
        style={{ background: 'none', border: 'none', padding: 0, ...style }}
        aria-label="Voir en plein écran"
      >
        <Image {...imgProps} style={{ objectPosition }} />
        {/* Hover hint */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(20,20,20,0.55)', backdropFilter: 'blur(6px)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#e2b84a" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(8px)' }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={close}
            >
              <Image
                src={src}
                alt={alt || ''}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center transition-colors"
              style={{ color: 'rgba(250,248,243,0.5)', border: '1px solid rgba(250,248,243,0.15)', background: 'transparent' }}
              aria-label="Fermer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hint */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(250,248,243,0.25)' }}>
              ESC
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
