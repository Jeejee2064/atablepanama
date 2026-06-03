'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ClickableImage from './ClickableImage';

const GALLERY_IMAGES = [
  { src: '/dressage4.JPG', span: 'col-span-1 row-span-2', alt: 'Table dressée avec élégance — À table Panama' },
  { src: '/plate2.JPG', span: 'col-span-1 row-span-1', alt: 'Assiette gastronomique — chef privé Panama City' },
  { src: '/deco1.jpeg', span: 'col-span-1 row-span-1', alt: 'Décoration de table raffinée — catering Panama City' },
  { src: '/assiette6.jpeg', span: 'col-span-1 row-span-1', alt: 'Plat gastronomique dressé — fine dining Panama' },
  { src: '/dressage3.JPG', span: 'col-span-2 row-span-1', alt: 'Mise en place pour réception — traiteur Panama City' },
  { src: '/market2.JPG', span: 'col-span-1 row-span-1', alt: 'Produits frais du marché — sourcing Panama City' },
  { src: '/products3.JPG', span: 'col-span-1 row-span-1', alt: 'Ingrédients frais sélectionnés — asesoría gastronomique' },
  { src: '/dressage6.jpeg', span: 'col-span-1 row-span-2', alt: 'Ambiance dîner privé — SupperClub Panama City' },
  { src: '/spice1.JPG', span: 'col-span-1 row-span-1', alt: 'Épices et ingrédients de qualité — haute gastronomie Panama' },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="section-pad" style={{ background: "linear-gradient(180deg, #ede9df 0%, #e8ecf4 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="w-10 h-px bg-gold mb-6" />
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#111111]">Galerie</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden ${img.span}`}
            >
              <ClickableImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
