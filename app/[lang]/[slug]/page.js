import { notFound } from 'next/navigation';
import { translations, SLUG_MAP } from '../../lib/translations';
import { SEO_META, buildServiceSchema } from '../../lib/seo';
import ServiceAsesoriaPage from '../../components/pages/ServiceAsesoriaPage';
import ServiceCateringPage from '../../components/pages/ServiceCateringPage';
import ServiceChefPage from '../../components/pages/ServiceChefPage';
import ServiceSupperclubPage from '../../components/pages/ServiceSupperclubPage';

export async function generateStaticParams() {
  return Object.keys(SLUG_MAP).map(key => {
    const slashIdx = key.indexOf('/');
    return {
      lang: key.slice(0, slashIdx),
      slug: key.slice(slashIdx + 1),
    };
  });
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const entry = SLUG_MAP[`${lang}/${slug}`];
  if (!entry) return {};

  const m = SEO_META[`${lang}/${slug}`];
  if (!m) return {};

  const alternatesLanguages = {};
  Object.entries(m.hreflang).forEach(([l, url]) => { alternatesLanguages[l] = url; });

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: { canonical: m.canonical, languages: alternatesLanguages },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.canonical,
      locale: m.locale,
      type: 'website',
      siteName: 'À table Panama',
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

const SERVICE_KEYS = ['asesoria', 'catering', 'chef', 'supperclub'];

const PAGE_COMPONENTS = {
  asesoria: ServiceAsesoriaPage,
  catering: ServiceCateringPage,
  chef: ServiceChefPage,
  supperclub: ServiceSupperclubPage,
};

export default async function ServicePage({ params }) {
  const { lang, slug } = await params;
  const entry = SLUG_MAP[`${lang}/${slug}`];

  if (!entry) notFound();

  const t = translations[lang];
  const service = t.services[entry.service];
  const sp = t.servicePage;

  const otherServices = SERVICE_KEYS.filter(k => k !== entry.service).map(k => ({
    key: k,
    ...t.services[k],
  }));

  // Build lang → slug map for this service
  const langSlugMap = Object.fromEntries(
    Object.entries(SLUG_MAP)
      .filter(([, v]) => v.service === entry.service)
      .map(([key]) => {
        const slashIdx = key.indexOf('/');
        return [key.slice(0, slashIdx), key.slice(slashIdx + 1)];
      })
  );

  const seoMeta = SEO_META[`${lang}/${slug}`];
  const serviceJsonLd = seoMeta ? buildServiceSchema(seoMeta.serviceSchema) : null;

  const PageComponent = PAGE_COMPONENTS[entry.service];

  return (
    <>
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}
      <PageComponent
        lang={lang}
        service={service}
        sp={sp}
        langSlugMap={langSlugMap}
        otherServices={otherServices}
      />
    </>
  );
}
