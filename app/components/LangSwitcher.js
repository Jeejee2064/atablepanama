'use client';

import { useRouter } from 'next/navigation';

const LANGS = ['es', 'en', 'fr'];

export default function LangSwitcher({ currentLang, slugMap }) {
  const router = useRouter();

  const switchLang = (l) => {
    document.cookie = `atable_lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    if (slugMap?.[l]) {
      router.push(`/${l}/${slugMap[l]}`);
    } else {
      router.refresh();
    }
  };

  return (
    <div className="flex items-center gap-2">
      {LANGS.map(l => (
        <button
          key={l}
          onClick={() => switchLang(l)}
          className={`text-[10px] tracking-[0.15em] uppercase transition-all duration-300 font-medium ${
            currentLang === l ? 'text-gold' : 'text-cream/55 hover:text-cream/85'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
