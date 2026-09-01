import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal & Malatya Fabrika Üretim Gücü',
  description: 'Malatya 1. OSB modern tesislerimizde yıllık 300.000 m² EPS yalıtım levhası ve söve üretim kapasitesi. MRC Yalıtım Söve kurumsal kimliği, vizyon, misyon ve kalite sertifikaları.',
  keywords: [
    'Malatya yalıtım fabrikası',
    'MRC Yalıtım Söve kurumsal',
    'Malatya EPS üreticisi',
    'söve fabrikası Malatya',
    '1. OSB yalıtım tesisi',
    'Yeşilyurt söve imalatı'
  ],
  alternates: {
    canonical: 'https://mrcyalitimsove.com/about',
  },
  openGraph: {
    title: 'Kurumsal & Malatya Fabrika Üretim Gücü | MRC Yalıtım Söve',
    description: 'Malatya 1. OSB modern tesislerimizde tam otomasyonlu EPS yalıtım levhası ve dış cephe söve üretimi.',
    url: 'https://mrcyalitimsove.com/about',
    images: [
      {
        url: 'https://mrcyalitimsove.com/images/about-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'MRC Yalıtım Söve Fabrika Üretim Hattı Malatya',
      }
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
