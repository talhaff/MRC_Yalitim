import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal & Fabrika Üretim Gücü | MRC Söve & Yalıtım',
  description: 'Malatya 1. OSB modern tesislerimizde yıllık 300.000 m² EPS yalıtım levhası ve söve üretim kapasitesi. MRC Söve & Yalıtım kurumsal kimliği, vizyon ve misyonu.',
  alternates: {
    canonical: 'https://mrcyalitim.com/about',
  },
  openGraph: {
    title: 'Kurumsal | MRC Söve & Yalıtım',
    description: 'Malatya 1. OSB modern tesislerimizde EPS yalıtım levhası ve söve üretim kapasitesi.',
    url: 'https://mrcyalitim.com/about',
    images: ['/images/about-factory.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
