import type { Metadata } from 'next';
import { Nunito, Manrope, Parisienne } from 'next/font/google';
import './globals.css';
import { ScrollProgress } from '@/components/ScrollProgress';
import { AmbientDecorations } from '@/components/AmbientDecorations';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { ScrollTriggerProvider } from '@/components/ScrollTriggerProvider';
import { PurchaseNotificationPopup } from '@/components/PurchaseNotificationPopup';
import { siteConfig } from '@/lib/config';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-parisienne',
  display: 'swap',
});

const siteUrl = siteConfig.author.url || 'https://paulinacelebra.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'La Navidad que Todos Recordarán – Paulina Celebra',
  description: 'Descubre cómo crear una Navidad elegante, organizada y llena de momentos inolvidables con la guía práctica de Paulina Celebra.',
  keywords: [
    'Navidad',
    'Paulina Celebra',
    'decoración navideña',
    'organización de Navidad',
    'mesa de Navidad',
    'ebook Navidad',
    'guía práctica de Navidad',
    'Año Nuevo',
    'Kit Réveillon Inesquecível',
  ],
  authors: [{ name: 'Paulina Celebra', url: siteUrl }],
  creator: 'Paulina Celebra',
  publisher: 'Paulina Celebra',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'La Navidad que Todos Recordarán – Paulina Celebra',
    description: 'Descubre cómo crear una Navidad elegante, organizada y llena de momentos inolvidables con la guía práctica de Paulina Celebra.',
    url: siteUrl,
    siteName: 'Paulina Celebra',
    type: 'article',
    locale: 'es_ES',
    alternateLocale: ['es_LA', 'es_MX', 'es_AR', 'es_CO', 'es_CL', 'es_PE'],
    images: [
      {
        url: '/images/mockup-real.png',
        width: 1200,
        height: 630,
        alt: 'Mockup oficial de La Navidad que Todos Recordarán por Paulina Celebra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Navidad que Todos Recordarán – Paulina Celebra',
    description: 'Descubre cómo crear una Navidad elegante, organizada y llena de momentos inolvidables con la guía práctica de Paulina Celebra.',
    images: ['/images/mockup-real.png'],
    creator: '@paulinacelebra',
    site: '@paulinacelebra',
  },
  other: {
    'og:locale': 'es_ES',
    'article:publisher': siteUrl,
    'article:author': siteUrl,
    'og:site_name': 'Paulina Celebra',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#author`,
        name: 'Paulina Celebra',
        url: siteUrl,
        image: `${siteUrl}/images/paulina-celebra.jpg`,
        sameAs: [
          siteConfig.author.instagramUrl || 'https://www.instagram.com/paulinacelebra',
          siteUrl,
        ],
        jobTitle: 'Creadora y Diseñadora de Celebraciones',
        description:
          'Creadora apasionada por transformar celebraciones en experiencias llenas de belleza, intención y significado.',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#publisher`,
        name: 'Paulina Celebra',
        url: siteUrl,
        logo: `${siteUrl}/images/mockup-real.png`,
        sameAs: [
          siteConfig.author.instagramUrl || 'https://www.instagram.com/paulinacelebra',
        ],
      },
      {
        '@type': 'Book',
        '@id': `${siteUrl}/#book`,
        name: 'La Navidad que Todos Recordarán',
        headline: 'Decoración, sabores y organización para crear una celebración inolvidable',
        description:
          'Descubre cómo crear una Navidad elegante, organizada y llena de momentos inolvidables con la guía práctica de Paulina Celebra.',
        author: {
          '@type': 'Person',
          '@id': `${siteUrl}/#author`,
          name: 'Paulina Celebra',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#publisher`,
          name: 'Paulina Celebra',
          url: siteUrl,
        },
        inLanguage: 'es',
        bookFormat: 'https://schema.org/EBook',
        image: `${siteUrl}/images/mockup-real.png`,
        url: siteUrl,
        offers: {
          '@type': 'Offer',
          price: '4.95',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2026-12-31',
          url: siteUrl,
        },
      },
      {
        '@type': 'Product',
        '@id': `${siteUrl}/#reveillon`,
        name: 'Kit Réveillon Inesquecível',
        description:
          'La guía y herramientas prácticas de Paulina Celebra para despedir el año y recibir el Año Nuevo con elegancia, serenidad y momentos memorables.',
        brand: {
          '@type': 'Brand',
          name: 'Paulina Celebra',
          url: siteUrl,
        },
        image: `${siteUrl}/images/kit-reveillon-inesquecivel.jpg`,
        offers: {
          '@type': 'Offer',
          price: '1.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: siteUrl,
        },
      },
    ],
  };

  return (
    <html lang="es" className={`${nunito.variable} ${manrope.variable} ${parisienne.variable}`}>
      <head>
        {/* Metadatos específicos para Redes Sociales solicitados */}
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="es_LA" />
        <meta property="og:locale:alternate" content="es_MX" />
        <meta property="og:locale:alternate" content="es_AR" />
        <meta property="og:locale:alternate" content="es_CO" />
        <meta property="article:publisher" content={siteConfig.author.publisherUrl || siteUrl} />
        <meta property="article:author" content={siteUrl} />
        <meta property="og:site_name" content="Paulina Celebra" />

        {/* Marcadores de Esquema Estructurados (JSON-LD) con URL de Autor */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#5E0001] selection:text-[#FAF7F2] min-h-screen flex flex-col bg-[#FAF7F2]">
        <ScrollProgress />
        <AmbientDecorations />
        <ScrollTriggerProvider>
          <main className="flex-1 w-full">
            {children}
          </main>
        </ScrollTriggerProvider>
        <StickyMobileBar />
        <PurchaseNotificationPopup />
      </body>
    </html>
  );
}
