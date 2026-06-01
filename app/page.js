import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SupperClub from './components/SupperClub';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { SEO_META } from './lib/seo';

const m = SEO_META.home;

export const metadata = {
  title: m.title,
  description: m.description,
  keywords: m.keywords,
  alternates: {
    canonical: m.canonical,
  },
  openGraph: {
    title: m.title,
    description: m.description,
    url: m.canonical,
    locale: m.locale,
    images: [
      {
        url: m.ogImage,
        width: 1200,
        height: 630,
        alt: "À table Panama — Haute Gastronomie Panama City",
      },
    ],
  },
  twitter: {
    title: m.title,
    description: m.description,
    images: [m.ogImage],
  },
};

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
