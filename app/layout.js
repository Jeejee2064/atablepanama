import { Cormorant_Garamond, Jost } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import { SITE_URL, LOCAL_BUSINESS_SCHEMA, PERSON_SCHEMA } from "./lib/seo";

const SUPPORTED_LANGS = ['es', 'en', 'fr'];

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "À table Panama — Gastronomía de Alto Nivel en Panama City",
    template: "%s | À table Panama",
  },
  description:
    "Catering de lujo, chef a domicilio, asesoría para restaurantes y SupperClub exclusivo en Panama City. Alta gastronomía al servicio de su visión.",
  keywords: [
    "catering panama city",
    "chef a domicilio panama city",
    "asesoria restaurantes panama city",
    "chef privado panama",
    "traiteur panama city",
    "private chef panama city",
    "restaurant consulting panama city",
  ],
  authors: [{ name: "À table Panama" }],
  creator: "À table Panama",
  publisher: "À table Panama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "À table Panama",
    title: "À table Panama — Gastronomía de Alto Nivel en Panama City",
    description:
      "Catering de lujo, chef a domicilio, asesoría para restaurantes y SupperClub exclusivo en Panama City. Alta gastronomía al servicio de su visión.",
    url: SITE_URL,
    locale: "es_PA",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "À table Panama — Gastronomía de Alto Nivel en Panama City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À table Panama — Alta Gastronomía en Panama City",
    description:
      "Catering de lujo, chef a domicilio, asesoría para restaurantes y SupperClub exclusivo en Panama City.",
    images: ["/og-home.jpg"],
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('atable_lang')?.value;
  const initialLang = SUPPORTED_LANGS.includes(langCookie) ? langCookie : 'es';

  return (
    <html
      lang={initialLang}
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
