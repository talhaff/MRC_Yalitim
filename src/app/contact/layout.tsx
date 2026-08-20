import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim, Adres & Hızlı Teklif',
  description: 'MRC Yalıtım ve Söve Malatya Merkez Fabrika iletişim bilgileri, adres: 1.OSB Mahallesi 5.Cd. No: 13/2 Yeşilyurt/Malatya. Tel: +90 532 258 52 44, e-posta: mrcyalitim@gmail.com.',
  alternates: {
    canonical: 'https://mrcyalitim.com/contact',
  },
  openGraph: {
    title: 'İletişim & Teklif Formu | MRC Yalıtım Malatya',
    description: 'MRC Yalıtım fabrika adresi, telefon ve doğrudan WhatsApp / E-Posta teklif formu.',
    url: 'https://mrcyalitim.com/contact',
    images: ['/images/hero-factory.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
