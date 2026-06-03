'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const WHATSAPP_NUMBER = '50765202230';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-15%' });

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      setSent(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section id="contact" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(160deg, #faf8f3 0%, #eceff8 100%)" }}>
      {/* Subtle bg image */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/products4.JPG"
          alt=""
          fill
          className="object-cover blur-3xl"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Left: info */}
          <div>
            <div ref={titleRef}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-gold text-[10px] tracking-[0.4em] uppercase mb-5 font-medium"
              >
                {t.contact.subtitle}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-6xl md:text-7xl text-[#111111] mb-12"
              >
                {t.contact.title}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-gold mt-0.5 flex-shrink-0">
                  <MapPinIcon />
                </div>
                <p className="text-[#111111]/85 text-base leading-relaxed font-light tracking-wide">
                  {t.contact.address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-gold flex-shrink-0">
                  <PhoneIcon />
                </div>
                <a
                  href="tel:+50765202230"
                  className="text-[#111111]/85 text-base hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  +507 6520-2230
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="text-gold flex-shrink-0">
                  <MailIcon />
                </div>
                <a
                  href="mailto:atablepanama@gmail.com"
                  className="text-[#111111]/85 text-base hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  atablepanama@gmail.com
                </a>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-black/10 my-6" />

              {/* WhatsApp button */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 border border-gold/40 hover:border-gold bg-gold/5 hover:bg-gold/10 px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gold transition-all duration-300 group"
              >
                <WhatsAppIcon />
                {t.contact.whatsapp}
                <span className="w-4 h-px bg-gold/40 group-hover:w-8 group-hover:bg-gold transition-all duration-500 ml-2" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6"
                >
                  <div className="w-16 h-16 border border-gold/40 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-display text-2xl text-[#111111]">{t.contact.successMsg}</p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-[10px] tracking-[0.25em] uppercase text-gold/60 hover:text-gold mt-4 transition-colors"
                  >
                    ← Nouveau message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[9px] tracking-[0.25em] uppercase text-[#111111]/65 block mb-2">
                        {t.contact.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        required
                        className="input-luxury"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] tracking-[0.25em] uppercase text-[#111111]/65 block mb-2">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        required
                        className="input-luxury"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.25em] uppercase text-[#111111]/65 block mb-2">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.contact.phonePlaceholder}
                      className="input-luxury"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.25em] uppercase text-[#111111]/65 block mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      required
                      rows={5}
                      className="input-luxury resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={loading}
                    className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#111111] bg-gold/0 border border-cream/20 hover:border-gold hover:text-gold px-8 py-4 transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? '...' : t.contact.send}
                    <span className="w-6 h-px bg-black/30 group-hover:bg-gold group-hover:w-10 transition-all duration-500" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
