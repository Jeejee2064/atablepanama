'use client';

import { createContext, useContext, useState } from 'react';
import { translations } from '../lib/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLang = 'es' }) {
  const [lang, setLang] = useState(initialLang);
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
