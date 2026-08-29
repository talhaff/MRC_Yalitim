'use client';

import React from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}

// 1. Organization & Local Manufacturing Business Schema (Google Maps & Yerel Arama #1)
export function OrganizationSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ManufacturingBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://mrcyalitim.com/#organization",
    "name": "MRC Söve Yalıtım",
    "alternateName": [
      "MRC Söve Yalıtım", 
      "MRC Söve Malatya", 
      "MRC Söve & Mantolama", 
      "MRC Söve Yalıtım ve İnşaat Malzemeleri Fabrikası",
      "Malatya Söve İmalatçısı MRC"
    ],
    "description": "Malatya 1. Organize Sanayi Bölgesi'nde yüksek dansite EPS ısı yalıtım levhaları, dekoratif dış cephe söve profilleri, kat silmeleri, payanda, taç ve taşyünü yalıtım elemanları üreticisi.",
    "url": "https://mrcyalitim.com",
    "telephone": "+905322585244",
    "email": "mrcyalitim@gmail.com",
    "priceRange": "$$",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Nakit, Kredi Kartı, Banka Havalesi",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mrcyalitim.com/logo_transparent.png",
      "width": "500",
      "height": "200",
      "caption": "MRC Söve Yalıtım Logosu"
    },
    "image": [
      "https://mrcyalitim.com/images/hero-factory.jpg",
      "https://mrcyalitim.com/images/about-factory.jpg",
      "https://mrcyalitim.com/images/arkaplan3.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1.OSB Mahallesi 5.Cd. No: 13/2",
      "addressLocality": "Yeşilyurt",
      "addressRegion": "Malatya",
      "postalCode": "44900",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.334732,
      "longitude": 38.193420
    },
    "hasMap": "https://maps.google.com/?q=38.334732,38.193420",
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
        "opens": "08:30",
        "closes": "15:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Malatya" },
      { "@type": "City", "name": "Elazığ" },
      { "@type": "City", "name": "Adıyaman" },
      { "@type": "City", "name": "Kahramanmaraş" },
      { "@type": "City", "name": "Sivas" },
      { "@type": "City", "name": "Bingöl" },
      { "@type": "City", "name": "Diyarbakır" },
      { "@type": "City", "name": "Gaziantep" },
      { "@type": "Country", "name": "Türkiye" }
    ],
    "knowsAbout": [
      "Dış Cephe Mantolama",
      "EPS Isı Yalıtım Levhaları",
      "Karbonlu EPS Strafor",
      "CNC Kesim Söve İmalatı",
      "Pencere Sövesi ve Kat Silmesi",
      "Taşyünü Yanmaz Yalıtım",
      "Fugalı Dış Cephe Kaplamaları",
      "Bina Enerji Kimlik Belgesi Uyumu"
    ],
    "sameAs": [
      "https://www.instagram.com/mrcyalitim",
      "https://wa.me/905322585244"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+905322585244",
        "contactType": "sales",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+905322585244",
        "contactType": "customer support",
        "areaServed": "TR",
        "availableLanguage": ["Turkish"]
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mrcyalitim.com/#website",
    "url": "https://mrcyalitim.com",
    "name": "MRC Söve Yalıtım",
    "description": "Malatya'da yüksek dansite EPS yalıtım levhası ve estetik dış cephe söve modelleri üreticisi.",
    "publisher": {
      "@id": "https://mrcyalitim.com/#organization"
    },
    "inLanguage": "tr-TR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

// 2. FAQ Page Schema (Google SERP'te SSS Zengin Kartları & CTR +%35)
export function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Malatya'da EPS ısı yalıtım levhası ve söve imalatı nerede yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MRC Söve Yalıtım, Malatya 1. Organize Sanayi Bölgesi (1. OSB Mah. 5. Cd. No: 13/2 Yeşilyurt/Malatya) tesislerinde en son teknoloji tam otomasyonlu CNC makineleriyle yüksek dansite EPS ısı yalıtım levhaları ve dış cephe söve profilleri üretmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Dış cephe mantolamada hangi EPS yoğunluğu (dansite) tercih edilmelidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Binalarda ideal ısı ve ses yalıtımı için 16-30 kg/m³ aralığındaki yüksek dansiteli karbonlu veya beyaz EPS yalıtım levhaları tavsiye edilir. MRC Söve Yalıtım ürünleri yüksek yoğunluklu yapısıyla %50'ye varan enerji tasarrufu sağlar."
        }
      },
      {
        "@type": "Question",
        "name": "Söve profilleri dış hava şartlarına ve yağmura dayanıklı mıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. MRC Söve Yalıtım ürünleri, elastik akrilik polimer ve kalsit harcıyla kaplanarak zırhlandırılır. Güneşin UV ışınlarına, dona, yağmura ve darbelere karşı çatlama yapmadan onlarca yıl ilk günkü formunu korur."
        }
      },
      {
        "@type": "Question",
        "name": "Özel mimari projeler için özel ölçü ve CNC söve üretimi yapıyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, villa, toplu konut, otel ve ticari yapılar için mimari projenize özel CAD çizimlerine göre milimetrik hassasiyette özel kalıp ve kesim söve imalatı gerçekleştirmekteyiz."
        }
      },
      {
        "@type": "Question",
        "name": "Malatya dışındaki çevre illere (Elazığ, Adıyaman, Maraş vb.) sevkiyat var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Malatya merkez fabrikamızdan Elazığ, Adıyaman, Kahramanmaraş, Bingöl, Sivas, Diyarbakır, Gaziantep ve tüm Türkiye'ye toptan ve perakende güvenli sevkiyat sağlamaktayız."
        }
      },
      {
        "@type": "Question",
        "name": "Söve ve yalıtım levhası fiyat teklifi nasıl alınır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "+90 532 258 52 44 numaralı fabrika ve satış hattımızı doğrudan arayabilir veya WhatsApp üzerinden projenizi göndererek dakikalar içinde en uygun toptan/perakende fiyat teklifi alabilirsiniz."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

// 3. Product Catalog Schema (Google Ürün ve Görsel İndeksleme #1)
export function ProductCatalogSchema() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MRC Söve Yalıtım Ürün Kataloğu",
    "description": "Malatya üretimi yüksek dansite EPS yalıtım levhaları, pencere söveleri, taç modelleri, kat silmeleri ve dış cephe kaplama sistemleri.",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "EPS Isı Yalıtım Levhaları (Beyaz & Karbonlu)",
          "image": "https://mrcyalitim.com/kayanresimler/cephe1.png",
          "description": "Yüksek dansite 26-30 kg/m³ EPS ısı yalıtım levhası. %50 enerji tasarrufu ve maksimum ısı yalıtım performansı.",
          "brand": { "@type": "Brand", "name": "MRC Söve Yalıtım" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "TRY",
            "lowPrice": "100",
            "highPrice": "5000",
            "offerCount": "100",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Dış Cephe Pencere Söve Profilleri",
          "image": "https://mrcyalitim.com/kayanresimler/sove1.png",
          "description": "Akrilik zırh kaplamalı, su itici ve çatlamayan modern pencere ve kapı söve profilleri.",
          "brand": { "@type": "Brand", "name": "MRC Söve Yalıtım" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "TRY",
            "lowPrice": "50",
            "highPrice": "1500",
            "offerCount": "150",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Fugalı Dış Cephe Mantolama Panelleri",
          "image": "https://mrcyalitim.com/kayanresimler/cephe1.png",
          "description": "Kendinden kanallı, montaj kolaylığı sağlayan dekoratif ve ısı yalıtımlı fugalı dış cephe plakaları.",
          "brand": { "@type": "Brand", "name": "MRC Söve Yalıtım" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "TRY",
            "lowPrice": "150",
            "highPrice": "2500",
            "offerCount": "50",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Dekoratif Saray Tacı & Motifler",
          "image": "https://mrcyalitim.com/kayanresimler/dekoratif.png",
          "description": "Pencere üstü ve bina girişlerine prestij kazandıran CNC işlemeli dekoratif taç ve rölyef motifleri.",
          "brand": { "@type": "Brand", "name": "MRC Söve Yalıtım" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "TRY",
            "lowPrice": "100",
            "highPrice": "3000",
            "offerCount": "80",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Bina Köşe Taşları ve L-Köşe Elemanları",
          "image": "https://mrcyalitim.com/kayanresimler/kosetasi.png",
          "description": "Bina köşelerinde darbe koruması ve rustik taş mimarisi sağlayan yalıtımlı köşe elemanları.",
          "brand": { "@type": "Brand", "name": "MRC Söve Yalıtım" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "TRY",
            "lowPrice": "80",
            "highPrice": "1200",
            "offerCount": "60",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "A1 Sınıfı Yanmaz Taşyünü Söve ve Yalıtım",
          "image": "https://mrcyalitim.com/kayanresimler/tasyunusove.png",
          "description": "150 kg/m³ yoğunlukta A1 sınıfı tam yanmaz taşyünü çekirdekli güvenlik odaklı mimari söve profili.",
          "brand": { "@type": "Brand", "name": "MRC Söve Yalıtım" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "TRY",
            "lowPrice": "200",
            "highPrice": "4000",
            "offerCount": "40",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
    />
  );
}

// 4. Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
