import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

interface SEOProviderProps {
  children: React.ReactNode;
}

export const SEOProvider: React.FC<SEOProviderProps> = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Fumigaciones Lourdes - Control Profesional de Plagas en Chile',
  description = 'Empresa líder en fumigaciones y control de plagas en Chile. Servicios de desratización, desinsectación, sanitización. Certificados SEREMI y SAG. Atención 24/7.',
  keywords = 'fumigaciones, control de plagas, desratización, desinsectación, sanitización, fumigaciones chile, control plagas santiago, fumigaciones lourdes',
  image = '/og-image.jpg',
  url = 'https://fumigacioneslourdes.cl',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Fumigaciones Lourdes',
    description: description,
    url: url,
    telephone: '+56976931562',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.4489,
      longitude: -70.6693,
    },
    openingHours: 'Mo-Sa 08:00-20:00',
    priceRange: '$$',
    image: image,
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -33.4489,
        longitude: -70.6693,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Control de Plagas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desratización',
            description: 'Control integral de roedores',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desinsectación',
            description: 'Eliminación de insectos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sanitización',
            description: 'Desinfección de ambientes',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CL" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Fumigaciones Lourdes" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};