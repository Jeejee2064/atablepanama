'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ClickableImage from './ClickableImage';

const GALLERY_IMAGES = [
  { src: '/assiette1.png', span: 'col-span-1 row-span-2' },
  { src: '/table2.png', span: 'col-span-1 row-span-1' },
  { src: '/produits.png', span: 'col-span-1 row-span-1' },
  { src: '/assiette3.png', span: 'col-span-1 row-span-1' },
  { src: '/decorationtable.png', span: 'col-span-2 row-span-1' },
  { src: '/ingredients.png', span: 'col-span-1 row-span-1' },
  { src: '/assiette4.png', span: 'col-span-1 row-span-1' },
  { src: '/chinchin.png', span: 'col-span-1 row-span-2' },
  { src: '/produits3.png', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="bg-[#1a1a1a] section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="w-10 h-px bg-gold mb-6" />
          <h2 className="font-display font-light text-4xl md:text-5xl text-cream">Galerie</h2>
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
                alt=""
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
