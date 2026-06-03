import { cookies } from 'next/headers';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SupperClub from './components/SupperClub';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { SITE_URL, getHomeMeta } from './lib/seo';

const SUPPORTED = ['es', 'en', 'fr'];

export async function generateMetadata() {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('atable_lang')?.value;
  const lang = SUPPORTED.includes(langCookie) ? langCookie : 'es';
  const m = getHomeMeta(lang);

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: m.canonical,
      languages: {
        es: SITE_URL,
        en: SITE_URL,
        fr: SITE_URL,
        'x-default': SITE_URL,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'À table Panama',
      title: m.title,
      description: m.description,
      url: m.canonical,
      locale: m.locale,
      images: [{ url: m.ogImage, width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: [m.ogImage],
    },
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SupperClub />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
