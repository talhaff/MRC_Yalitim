import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Malatya Fabrika Adresi | Hızlı Teklif Al',
  description: 'MRC Yalıtım Söve Malatya Merkez Fabrika: 1.OSB Mah. 5. Cd. No: 13/2 Yeşilyurt/Malatya. Tel: +90 532 258 52 44. Doğrudan WhatsApp veya telefonla anında toptan/perakende fiyat teklifi alın.',
  keywords: [
    'Malatya söve iletişim',
    'Malatya yalıtım fabrikası telefon',
    'MRC Yalıtım Söve adres',
    '1. OSB Malatya söve teklif',
    'mantolama fiyat teklifi al Malatya'
  ],
  alternates: {
    canonical: 'https://mrcyalitimsove.com/contact',
  },
  openGraph: {
    title: 'İletişim, Adres & Hızlı Teklif | MRC Yalıtım Söve Malatya',
    description: 'MRC Yalıtım Söve Malatya 1. OSB fabrika adresi, telefon ve doğrudan WhatsApp / E-Posta teklif formu.',
    url: 'https://mrcyalitimsove.com/contact',
    images: [
      {
        url: 'https://mrcyalitimsove.com/images/hero-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'MRC Yalıtım Söve Fabrika İletişim ve Konum',
      }
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
