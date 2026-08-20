'use client';

import React from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}

// Senior SEO Schema Component (LocalBusiness & Manufacturing)
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ManufacturingBusiness"],
    "@id": "https://mrcyalitim.com/#organization",
    "name": "MRC Yalıtım ve Söve",
    "alternateName": ["MRC Yalıtım", "MRC Söve Malatya", "MRC Yalıtım ve İnşaat Malzemeleri"],
    "description": "Malatya 1. Organize Sanayi Bölgesi'nde yüksek dansite EPS ısı yalıtım levhaları, dış cephe söve profilleri ve dekoratif yapı elemanları üreticisi.",
    "url": "https://mrcyalitim.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mrcyalitim.com/logo_transparent.png",
      "width": "500",
      "height": "200"
    },
    "image": "https://mrcyalitim.com/images/hero-factory.jpg",
    "telephone": "+905322585244",
    "email": "mrcyalitim@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1.OSB Mahallesi 5.Cd. No: 13/2",
      "addressLocality": "Yeşilyurt",
      "addressRegion": "Malatya",
      "postalCode": "44100",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.3582,
      "longitude": 38.2255
    },
    "hasMap": "https://maps.google.com/?q=1.OSB+Mahallesi+5.Cd.+No:+13/2+Ye%C5%9Filyurt+Malatya",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Malatya"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Elazığ"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Adıyaman"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kahramanmaraş"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Diyarbakır"
      },
      {
        "@type": "Country",
        "name": "Türkiye"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/mrcyalitim",
      "https://wa.me/905322585244"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EPS Isı Yalıtım Levhaları",
          "description": "Yüksek dansite karbonlu ve beyaz EPS ısı yalıtım levhaları."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Dış Cephe Söve Profilleri",
          "description": "Özel akrilik mineral kaplamalı dış cephe söveleri, payandalar ve kat silmeleri."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Dekoratif Dış Cephe Kaplamaları",
          "description": "Fuga, yalıbaskı ve özel mimari dış cephe tasarım ürünleri."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
