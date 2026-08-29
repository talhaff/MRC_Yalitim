import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, FloatingAction } from "@/components/shared/LayoutComponents";
import { PageTransition, OrganizationSchema, FAQSchema, ProductCatalogSchema } from "@/components/shared/SEOAndTransitions";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#050B15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mrcsoveyalitim.com"),
  title: {
    default: "Malatya Söve & EPS Yalıtım Fabrikası | MRC Söve Yalıtım",
    template: "%s | MRC Söve Yalıtım Malatya",
  },
  description: "Malatya 1. OSB'de yüksek dansite EPS ısı yalıtım levhası, dış cephe mantolama ve dekoratif pencere söve profilleri üreticisi. Fabrikadan doğrudan satış ve toptan fiyat teklifi alın.",
  keywords: [
    // 1. Ana Hedef Aramalar (SERP #1)
    "Malatya söve",
    "Malatya yalıtım",
    "Malatya mantolama",
    "EPS ısı yalıtım levhası",
    "dış cephe kaplama",
    "Malatya söve imalatı",
    "Malatya strafor söve",
    "Malatya mantolama fiyatları",
    "Malatya EPS üreticisi",
    
    // 2. Ürün Bazlı Aramalar
    "pencere söveleri",
    "dış cephe söve modelleri",
    "fugalı dış cephe kaplama",
    "kat silmesi modelleri",
    "saray tacı modelleri",
    "bina köşe taşı",
    "taşyünü söve profili",
    "karbonlu EPS levha",
    "beyaz EPS yalıtım straforu",
    "yüksek dansite EPS",
    "dekoratif payanda ve motif",
    
    // 3. Bölgesel & Fabrika Aramaları
    "1. OSB Malatya yalıtım fabrikası",
    "Yeşilyurt söve firmaları",
    "Elazığ söve mantolama",
    "Adıyaman yalıtım fabrikası",
    "Kahramanmaraş söve imalatçıları",
    "Doğu Anadolu EPS mantolama üreticisi",
    "MRC Söve Yalıtım",
    "MRC Söve Malatya"
  ],
  authors: [{ name: "MRC Söve Yalıtım", url: "https://mrcsoveyalitim.com" }],
  creator: "MRC Söve Yalıtım",
  publisher: "MRC Söve Yalıtım",
  applicationName: "MRC Söve Yalıtım",
  category: "İnşaat ve Dış Cephe Yalıtım Sistemleri",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://mrcsoveyalitim.com",
    languages: {
      "tr-TR": "https://mrcsoveyalitim.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mrcsoveyalitim.com",
    siteName: "MRC Söve Yalıtım",
    title: "Malatya Söve & EPS Yalıtım Fabrikası | MRC Söve Yalıtım",
    description: "Malatya 1. OSB'de yüksek dansite EPS ısı yalıtım levhası, dış cephe söve ve mantolama profilleri üreticisi. Fabrikadan doğrudan en uygun fiyatlar.",
    images: [
      {
        url: "https://mrcsoveyalitim.com/images/hero-factory.jpg",
        width: 1200,
        height: 630,
        alt: "MRC Söve Yalıtım Üretim Tesisi Malatya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malatya Söve & EPS Yalıtım Fabrikası | MRC Söve Yalıtım",
    description: "Malatya 1. Organize Sanayi Bölgesi'nde yüksek dansite EPS yalıtım levhası ve dış cephe söve profilleri üretimi.",
    images: ["https://mrcsoveyalitim.com/images/hero-factory.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo_transparent.png",
  },
  other: {
    "geo.region": "TR-44",
    "geo.placename": "Malatya, Yeşilyurt",
    "geo.position": "38.334732;38.193420",
    "ICBM": "38.334732, 38.193420",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationSchema />
        <FAQSchema />
        <ProductCatalogSchema />
      </head>
      <body className="antialiased bg-white text-slate-900 font-sans">
        <Navbar />
        <PageTransition>
          <div className="min-h-screen">
            {children}
          </div>
        </PageTransition>
        <FloatingAction />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
