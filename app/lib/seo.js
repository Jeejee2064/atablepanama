export const SITE_URL = 'https://www.atablepanama.com';

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FoodEstablishment'],
  name: 'À table Panama',
  url: SITE_URL,
  telephone: '+50765202230',
  email: 'atablepanama@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Local 1, Edificio Antigua Domingo, Plaza Santa Ana',
    addressLocality: 'Panama City',
    addressRegion: 'Panama',
    addressCountry: 'PA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.9936,
    longitude: -79.5197,
  },
  priceRange: '$$$$',
  servesCuisine: ['French', 'International', 'Fine Dining'],
  description:
    'Consultoría gastronómica, catering de alto nivel y chef privado en Panama City. Fine dining consulting, high-end catering and private chef services.',
  image: `${SITE_URL}/og-home.jpg`,
  logo: `${SITE_URL}/logoWhite.svg`,
  sameAs: [],
  areaServed: {
    '@type': 'City',
    name: 'Panama City',
    containedInPlace: {
      '@type': 'Country',
      name: 'Panama',
    },
  },
  availableLanguage: [
    { '@type': 'Language', name: 'Spanish' },
    { '@type': 'Language', name: 'English' },
    { '@type': 'Language', name: 'French' },
  ],
};

const OG_FALLBACKS = {
  asesoria: '/produits.png',
  catering: '/decorationtable.png',
  chef: '/personalchef.png',
};

const HOME_META = {
  es: {
    title: 'À table Panama — Alta Gastronomía en Panama City',
    description: 'Catering de lujo, chef a domicilio, asesoría para restaurantes y SupperClub exclusivo en Panama City. Alta gastronomía al servicio de su visión.',
    keywords: 'catering panama city, chef a domicilio panama city, asesoria restaurantes panama city, chef privado panama city, supper club panama city',
    locale: 'es_PA',
  },
  en: {
    title: 'À table Panama — Fine Dining & Gastronomy Services in Panama City',
    description: 'Luxury catering, private chef, restaurant consulting and exclusive SupperClub in Panama City. Exceptional gastronomy for every occasion.',
    keywords: 'catering panama city, private chef panama city, restaurant consulting panama city, supper club panama city, fine dining panama',
    locale: 'en_US',
  },
  fr: {
    title: 'À table Panama — Haute Gastronomie à Panama City',
    description: 'Traiteur de luxe, chef à domicile, conseil en restauration et SupperClub exclusif à Panama City. La gastronomie d\'exception à votre service.',
    keywords: 'traiteur panama city, chef à domicile panama city, conseil restauration panama city, supper club panama city, haute gastronomie panama',
    locale: 'fr_FR',
  },
};

export function getHomeMeta(lang = 'es') {
  const m = HOME_META[lang] || HOME_META.es;
  return {
    ...m,
    ogImage: '/og-home.jpg',
    canonical: SITE_URL + '/',
  };
}

export const SEO_META = {
  home: getHomeMeta('es'),

  'es/asesoria-restaurantes-panama-city': {
    title: 'Asesoría para Restaurantes en Panama City | À table Panama',
    description:
      'Consultoría gastronómica en Panama City: diseño de menú, formación de equipos, selección de proveedores y optimización operacional para restaurantes de alto nivel.',
    keywords:
      'asesoria restaurantes panama city, consultoria gastronomica panama, diseño de menu panama, formacion equipos restaurante panama',
    ogImage: '/og-asesoria.jpg',
    ogImageFallback: OG_FALLBACKS.asesoria,
    canonical: `${SITE_URL}/es/asesoria-restaurantes-panama-city`,
    locale: 'es_PA',
    hreflang: {
      es: `${SITE_URL}/es/asesoria-restaurantes-panama-city`,
      en: `${SITE_URL}/en/restaurant-consulting-panama-city`,
      fr: `${SITE_URL}/fr/conseil-restauration-panama-city`,
    },
    serviceSchema: {
      name: 'Asesoría para Restaurantes en Panama City',
      description:
        'Consultoría gastronómica integral para restaurantes en Panama City: diseño de menú, organización de equipos, selección de proveedores y optimización operacional.',
    },
  },

  'en/restaurant-consulting-panama-city': {
    title: 'Restaurant Consulting in Panama City | À table Panama',
    description:
      'Professional restaurant consulting in Panama City: menu design, team training, supplier selection and operational optimization for fine dining establishments.',
    keywords:
      'restaurant consulting panama city, restaurant consultant panama, menu design panama city, food and beverage consulting panama',
    ogImage: '/og-asesoria.jpg',
    ogImageFallback: OG_FALLBACKS.asesoria,
    canonical: `${SITE_URL}/en/restaurant-consulting-panama-city`,
    locale: 'en_US',
    hreflang: {
      es: `${SITE_URL}/es/asesoria-restaurantes-panama-city`,
      en: `${SITE_URL}/en/restaurant-consulting-panama-city`,
      fr: `${SITE_URL}/fr/conseil-restauration-panama-city`,
    },
    serviceSchema: {
      name: 'Restaurant Consulting in Panama City',
      description:
        'Comprehensive restaurant consulting in Panama City: menu design, team training, supplier selection and operational optimization.',
    },
  },

  'fr/conseil-restauration-panama-city': {
    title: 'Conseil en Restauration à Panama City | À table Panama',
    description:
      'Conseil gastronomique à Panama City : conception de menu, formation des équipes, sélection des fournisseurs et optimisation opérationnelle pour la restauration haut de gamme.',
    keywords:
      'conseil restauration panama city, consultant gastronomique panama, conception menu panama, formation equipe restauration panama',
    ogImage: '/og-asesoria.jpg',
    ogImageFallback: OG_FALLBACKS.asesoria,
    canonical: `${SITE_URL}/fr/conseil-restauration-panama-city`,
    locale: 'fr_FR',
    hreflang: {
      es: `${SITE_URL}/es/asesoria-restaurantes-panama-city`,
      en: `${SITE_URL}/en/restaurant-consulting-panama-city`,
      fr: `${SITE_URL}/fr/conseil-restauration-panama-city`,
    },
    serviceSchema: {
      name: 'Conseil en Restauration à Panama City',
      description:
        'Conseil gastronomique complet à Panama City : conception de menu, formation des équipes, sélection des fournisseurs et optimisation opérationnelle.',
    },
  },

  'es/catering-eventos-panama-city': {
    title: 'Catering para Eventos en Panama City | À table Panama',
    description:
      'Servicio de catering de alto nivel para eventos privados, bodas, eventos corporativos y congresos internacionales en Panama City. Gastronomía a su altura.',
    keywords:
      'catering panama city, servicio catering eventos panama, catering bodas panama, catering corporativo panama city, boquitas panama',
    ogImage: '/og-catering.jpg',
    ogImageFallback: OG_FALLBACKS.catering,
    canonical: `${SITE_URL}/es/catering-eventos-panama-city`,
    locale: 'es_PA',
    hreflang: {
      es: `${SITE_URL}/es/catering-eventos-panama-city`,
      en: `${SITE_URL}/en/catering-events-panama-city`,
      fr: `${SITE_URL}/fr/traiteur-evenements-panama-city`,
    },
    serviceSchema: {
      name: 'Catering para Eventos en Panama City',
      description:
        'Servicio de catering premium para eventos privados, bodas, eventos corporativos y congresos internacionales en Panama City.',
    },
  },

  'en/catering-events-panama-city': {
    title: 'Premium Catering Services in Panama City | À table Panama',
    description:
      'High-end catering for private events, weddings, corporate events and international congresses in Panama City. Exceptional gastronomy and impeccable service.',
    keywords:
      'catering services panama city, wedding catering panama, corporate catering panama city, event catering panama, private catering panama',
    ogImage: '/og-catering.jpg',
    ogImageFallback: OG_FALLBACKS.catering,
    canonical: `${SITE_URL}/en/catering-events-panama-city`,
    locale: 'en_US',
    hreflang: {
      es: `${SITE_URL}/es/catering-eventos-panama-city`,
      en: `${SITE_URL}/en/catering-events-panama-city`,
      fr: `${SITE_URL}/fr/traiteur-evenements-panama-city`,
    },
    serviceSchema: {
      name: 'Premium Catering Services in Panama City',
      description:
        'High-end catering for private events, weddings, corporate events and international congresses in Panama City.',
    },
  },

  'fr/traiteur-evenements-panama-city': {
    title: 'Traiteur Haut de Gamme à Panama City | À table Panama',
    description:
      'Service traiteur premium pour événements privés, mariages, réceptions d\'entreprise et congrès internationaux à Panama City. Gastronomie d\'exception.',
    keywords:
      'traiteur panama city, traiteur evenements panama, traiteur mariage panama, traiteur entreprise panama city',
    ogImage: '/og-catering.jpg',
    ogImageFallback: OG_FALLBACKS.catering,
    canonical: `${SITE_URL}/fr/traiteur-evenements-panama-city`,
    locale: 'fr_FR',
    hreflang: {
      es: `${SITE_URL}/es/catering-eventos-panama-city`,
      en: `${SITE_URL}/en/catering-events-panama-city`,
      fr: `${SITE_URL}/fr/traiteur-evenements-panama-city`,
    },
    serviceSchema: {
      name: 'Traiteur Haut de Gamme à Panama City',
      description:
        'Service traiteur premium pour événements privés, mariages, réceptions d\'entreprise et congrès internationaux à Panama City.',
    },
  },

  'es/chef-a-domicilio-panama-city': {
    title: 'Chef a Domicilio en Panama City | À table Panama',
    description:
      'Chef privado a domicilio en Panama City: menú personalizado, productos frescos del mercado y servicio completo en su hogar, villa o yate.',
    keywords:
      'chef a domicilio panama city, chef privado panama, chef para cena privada panama, personal chef panama city',
    ogImage: '/og-chef.jpg',
    ogImageFallback: OG_FALLBACKS.chef,
    canonical: `${SITE_URL}/es/chef-a-domicilio-panama-city`,
    locale: 'es_PA',
    hreflang: {
      es: `${SITE_URL}/es/chef-a-domicilio-panama-city`,
      en: `${SITE_URL}/en/private-chef-panama-city`,
      fr: `${SITE_URL}/fr/chef-a-domicile-panama-city`,
    },
    serviceSchema: {
      name: 'Chef a Domicilio en Panama City',
      description:
        'Chef privado a domicilio en Panama City: menú personalizado, productos frescos del mercado y servicio completo en su hogar o villa.',
    },
  },

  'en/private-chef-panama-city': {
    title: 'Private Chef in Panama City | À table Panama',
    description:
      'Hire a private chef in Panama City for intimate dinners, special occasions and exclusive in-home dining experiences. Bespoke menus, full service at your residence.',
    keywords:
      'private chef panama city, personal chef panama, hire a chef panama city, in-home dining panama, private dining panama city',
    ogImage: '/og-chef.jpg',
    ogImageFallback: OG_FALLBACKS.chef,
    canonical: `${SITE_URL}/en/private-chef-panama-city`,
    locale: 'en_US',
    hreflang: {
      es: `${SITE_URL}/es/chef-a-domicilio-panama-city`,
      en: `${SITE_URL}/en/private-chef-panama-city`,
      fr: `${SITE_URL}/fr/chef-a-domicile-panama-city`,
    },
    serviceSchema: {
      name: 'Private Chef in Panama City',
      description:
        'Hire a private chef in Panama City for intimate dinners, special occasions and exclusive in-home dining experiences.',
    },
  },

  'fr/chef-a-domicile-panama-city': {
    title: 'Chef à Domicile à Panama City | À table Panama',
    description:
      'Chef privé à domicile à Panama City : menu sur mesure, produits frais du marché et service complet dans votre résidence, villa ou à bord de votre yacht.',
    keywords:
      'chef à domicile panama city, chef privé panama, diner privé chef panama, personal chef panama city',
    ogImage: '/og-chef.jpg',
    ogImageFallback: OG_FALLBACKS.chef,
    canonical: `${SITE_URL}/fr/chef-a-domicile-panama-city`,
    locale: 'fr_FR',
    hreflang: {
      es: `${SITE_URL}/es/chef-a-domicilio-panama-city`,
      en: `${SITE_URL}/en/private-chef-panama-city`,
      fr: `${SITE_URL}/fr/chef-a-domicile-panama-city`,
    },
    serviceSchema: {
      name: 'Chef à Domicile à Panama City',
      description:
        'Chef privé à domicile à Panama City : menu sur mesure, produits frais du marché et service complet dans votre résidence ou villa.',
    },
  },

  'es/supper-club-panama-city': {
    title: 'SupperClub Panama City | Cena Exclusiva — À Table',
    description:
      'SupperClub by À TABLE en Panama City: cena exclusiva con menú degustación, plazas limitadas e interacción directa con el chef. Una noche para recordar.',
    keywords:
      'supperclub panama city, cena privada exclusiva panama, menu degustacion panama, experiencia gastronomica panama city',
    ogImage: '/og-home.jpg',
    canonical: `${SITE_URL}/es/supper-club-panama-city`,
    locale: 'es_PA',
    hreflang: {
      es: `${SITE_URL}/es/supper-club-panama-city`,
      en: `${SITE_URL}/en/supper-club-panama-city`,
      fr: `${SITE_URL}/fr/supper-club-panama-city`,
    },
    serviceSchema: {
      name: 'SupperClub by À TABLE Panama City',
      description: 'Cena exclusiva con menú degustación, plazas limitadas e interacción directa con el chef en Panama City.',
    },
  },

  'en/supper-club-panama-city': {
    title: 'Supper Club Panama City | Exclusive Dining Experience — À Table',
    description:
      'SupperClub by À TABLE in Panama City: exclusive dinner with tasting menu, limited seats and direct interaction with the chef. One night to remember.',
    keywords:
      'supper club panama city, exclusive dining panama, tasting menu panama, private dinner experience panama city',
    ogImage: '/og-home.jpg',
    canonical: `${SITE_URL}/en/supper-club-panama-city`,
    locale: 'en_US',
    hreflang: {
      es: `${SITE_URL}/es/supper-club-panama-city`,
      en: `${SITE_URL}/en/supper-club-panama-city`,
      fr: `${SITE_URL}/fr/supper-club-panama-city`,
    },
    serviceSchema: {
      name: 'SupperClub by À TABLE Panama City',
      description: 'Exclusive dinner with tasting menu, limited seats and direct chef interaction in Panama City.',
    },
  },

  'fr/supper-club-panama-city': {
    title: 'Supper Club Panama City | Dîner Exclusif — À Table',
    description:
      "SupperClub by À TABLE à Panama City : dîner exclusif avec menu dégustation, places limitées et interaction directe avec le chef. Une nuit inoubliable.",
    keywords:
      'supper club panama city, diner exclusif panama, menu degustation panama, experience gastronomique panama city',
    ogImage: '/og-home.jpg',
    canonical: `${SITE_URL}/fr/supper-club-panama-city`,
    locale: 'fr_FR',
    hreflang: {
      es: `${SITE_URL}/es/supper-club-panama-city`,
      en: `${SITE_URL}/en/supper-club-panama-city`,
      fr: `${SITE_URL}/fr/supper-club-panama-city`,
    },
    serviceSchema: {
      name: 'SupperClub by À TABLE Panama City',
      description: "Dîner exclusif avec menu dégustation, places limitées et interaction directe avec le chef à Panama City.",
    },
  },
};

export function buildServiceSchema(serviceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceSchema.name,
    description: serviceSchema.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'À table Panama',
      url: SITE_URL,
      telephone: '+50765202230',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Local 1, Edificio Antigua Domingo, Plaza Santa Ana',
        addressLocality: 'Panama City',
        addressCountry: 'PA',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Panama City',
    },
    availableLanguage: ['Spanish', 'English', 'French'],
  };
}
