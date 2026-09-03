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
    "@id": "https://mrcyalitimsove.com/#organization",
    "name": "MRC Yalıtım Söve",
    "alternateName": [
      "MRC Yalıtım Söve", 
      "MRC Yalıtım Söve Malatya", 
      "MRC Yalıtım & Mantolama", 
      "MRC Yalıtım Söve ve İnşaat Malzemeleri Fabrikası",
      "Malatya Yalıtım Söve İmalatçısı MRC"
    ],
    "description": "Malatya 1. Organize Sanayi Bölgesi'nde yüksek dansite EPS ısı yalıtım levhaları, dekoratif dış cephe söve profilleri, kat silmeleri, payanda, taç ve taşyünü yalıtım elemanları üreticisi.",
    "url": "https://mrcyalitimsove.com",
    "telephone": "+905322585244",
    "email": "mrcyalitim@gmail.com",
    "priceRange": "$$",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Nakit, Kredi Kartı, Banka Havalesi",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mrcyalitimsove.com/logo_transparent.png",
      "width": "500",
      "height": "200",
      "caption": "MRC Yalıtım Söve Logosu"
    },
    "image": [
      "https://mrcyalitimsove.com/images/hero-factory.jpg",
      "https://mrcyalitimsove.com/images/about-factory.jpg",
      "https://mrcyalitimsove.com/images/arkaplan3.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1. Organize Sanayi Bölgesi, 5. Cadde No: 13/2",
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
      "https://www.facebook.com/mrcsuyalitim",
      "https://www.instagram.com/mrcyalitim",
      "https://maps.app.goo.gl/MtQKYRun3dske8zQ7",
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
    "@id": "https://mrcyalitimsove.com/#website",
    "url": "https://mrcyalitimsove.com",
    "name": "MRC Yalıtım Söve",
    "description": "Malatya'da yüksek dansite EPS yalıtım levhası ve estetik dış cephe söve modelleri üreticisi.",
    "publisher": {
      "@id": "https://mrcyalitimsove.com/#organization"
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
          "text": "MRC Yalıtım Söve, Malatya 1. Organize Sanayi Bölgesi (1. OSB Mah. 5. Cd. No: 13/2 Yeşilyurt/Malatya) tesislerinde en son teknoloji tam otomasyonlu CNC makineleriyle yüksek dansite EPS ısı yalıtım levhaları ve dış cephe söve profilleri üretmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Dış cephe mantolamada hangi EPS yoğunluğu (dansite) tercih edilmelidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Binalarda ideal ısı ve ses yalıtımı için 16-30 kg/m³ aralığındaki yüksek dansiteli karbonlu veya beyaz EPS yalıtım levhaları tavsiye edilir. MRC Yalıtım Söve ürünleri yüksek yoğunluklu yapısıyla %50'ye varan enerji tasarrufu sağlar."
        }
      },
      {
        "@type": "Question",
        "name": "Söve profilleri dış hava şartlarına ve yağmura dayanıklı mıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. MRC Yalıtım Söve ürünleri, elastik akrilik polimer ve kalsit harcıyla kaplanarak zırhlandırılır. Güneşin UV ışınlarına, dona, yağmura ve darbelere karşı çatlama yapmadan onlarca yıl ilk günkü formunu korur."
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
    "name": "MRC Yalıtım Söve Ürün Kataloğu",
    "description": "Malatya üretimi yüksek dansite EPS yalıtım levhaları, pencere söveleri, taç modelleri, kat silmeleri ve dış cephe kaplama sistemleri.",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "EPS Isı Yalıtım Levhaları (Beyaz & Karbonlu)",
          "image": "https://mrcyalitimsove.com/kayanresimler/cephe1.png",
          "description": "Yüksek dansite 26-30 kg/m³ EPS ısı yalıtım levhası. %50 enerji tasarrufu ve maksimum ısı yalıtım performansı.",
          "sku": "MRC-EPS-01",
          "mpn": "MRC-EPS-01",
          "url": "https://mrcyalitimsove.com",
          "brand": { "@type": "Brand", "name": "MRC Yalıtım Söve" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "54",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Ahmet K."
            },
            "reviewBody": "Malatya fabrikasından doğrudan aldığımız yüksek dansite EPS yalıtım levhaları harika kalitede."
          },
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
          "image": "https://mrcyalitimsove.com/kayanresimler/sove1.png",
          "description": "Akrilik zırh kaplamalı, su itici ve çatlamayan modern pencere ve kapı söve profilleri.",
          "sku": "MRC-SOVE-02",
          "mpn": "MRC-SOVE-02",
          "url": "https://mrcyalitimsove.com",
          "brand": { "@type": "Brand", "name": "MRC Yalıtım Söve" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "42",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Mehmet Y."
            },
            "reviewBody": "Akrilik zırh kaplaması çok sağlam, yağmur ve donda kesinlikle çatlama yapmıyor."
          },
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
          "image": "https://mrcyalitimsove.com/kayanresimler/cephe1.png",
          "description": "Kendinden kanallı, montaj kolaylığı sağlayan dekoratif ve ısı yalıtımlı fugalı dış cephe plakaları.",
          "sku": "MRC-FUGA-03",
          "mpn": "MRC-FUGA-03",
          "url": "https://mrcyalitimsove.com",
          "brand": { "@type": "Brand", "name": "MRC Yalıtım Söve" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "36",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Mustafa D."
            },
            "reviewBody": "Fugalı panellerin montajı çok pratik ve bina dış cephesine çok modern bir görünüm kattı."
          },
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
          "image": "https://mrcyalitimsove.com/kayanresimler/dekoratif.png",
          "description": "Pencere üstü ve bina girişlerine prestij kazandıran CNC işlemeli dekoratif taç ve rölyef motifleri.",
          "sku": "MRC-TAC-04",
          "mpn": "MRC-TAC-04",
          "url": "https://mrcyalitimsove.com",
          "brand": { "@type": "Brand", "name": "MRC Yalıtım Söve" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "29",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Selim T."
            },
            "reviewBody": "CNC kesim detayları çok ince ve kaliteli işlenmiş, villa projemizde kullandık."
          },
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
          "image": "https://mrcyalitimsove.com/kayanresimler/kosetasi.png",
          "description": "Bina köşelerinde darbe koruması ve rustik taş mimarisi sağlayan yalıtımlı köşe elemanları.",
          "sku": "MRC-KOSE-05",
          "mpn": "MRC-KOSE-05",
          "url": "https://mrcyalitimsove.com",
          "brand": { "@type": "Brand", "name": "MRC Yalıtım Söve" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "31",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Kemal B."
            },
            "reviewBody": "Köşe taşları köşelerdeki çatlakları önlüyor ve sağlam bir darbe koruması sağlıyor."
          },
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
          "image": "https://mrcyalitimsove.com/kayanresimler/tasyunusove.png",
          "description": "150 kg/m³ yoğunlukta A1 sınıfı tam yanmaz taşyünü çekirdekli güvenlik odaklı mimari söve profili.",
          "sku": "MRC-TASYUNU-06",
          "mpn": "MRC-TASYUNU-06",
          "url": "https://mrcyalitimsove.com",
          "brand": { "@type": "Brand", "name": "MRC Yalıtım Söve" },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "25",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Serkan A."
            },
            "reviewBody": "Yangın yönetmeliğine tam uyumlu A1 taşyünü söve, işçilik ve yoğunluk mükemmel."
          },
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
