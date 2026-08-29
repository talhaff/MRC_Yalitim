import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal & Malatya Fabrika Üretim Gücü',
  description: 'Malatya 1. OSB modern tesislerimizde yıllık 300.000 m² EPS yalıtım levhası ve söve üretim kapasitesi. MRC Söve Yalıtım kurumsal kimliği, vizyon, misyon ve kalite sertifikaları.',
  keywords: [
    'Malatya yalıtım fabrikası',
    'MRC Söve Yalıtım kurumsal',
    'Malatya EPS üreticisi',
    'söve fabrikası Malatya',
    '1. OSB yalıtım tesisi',
    'Yeşilyurt söve imalatı'
  ],
  alternates: {
    canonical: 'https://mrcyalitim.com/about',
  },
  openGraph: {
    title: 'Kurumsal & Malatya Fabrika Üretim Gücü | MRC Söve Yalıtım',
    description: 'Malatya 1. OSB modern tesislerimizde tam otomasyonlu EPS yalıtım levhası ve dış cephe söve üretimi.',
    url: 'https://mrcyalitim.com/about',
    images: [
      {
        url: '/images/about-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'MRC Söve Yalıtım Fabrika Üretim Hattı Malatya',
      }
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
