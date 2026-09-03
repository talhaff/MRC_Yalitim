import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, FloatingAction } from "@/components/shared/LayoutComponents";
import { PageTransition, OrganizationSchema, FAQSchema, ProductCatalogSchema } from "@/components/shared/SEOAndTransitions";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
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
  metadataBase: new URL("https://mrcyalitimsove.com"),
  title: {
    default: "MRC Yalıtım Söve | Malatya Söve & EPS Isı Yalıtım Fabrikası",
    template: "%s | MRC Yalıtım Söve Malatya",
  },
  description: "MRC Yalıtım Söve - Malatya 1. OSB'de yüksek dansite EPS ısı yalıtım levhası, dış cephe mantolama ve dekoratif pencere söve profilleri imalatçısı. Fabrikadan doğrudan toptan satış ve en uygun fiyat teklifi alın.",
  keywords: [
    // 1. Marka ve Ana SERP Aramaları
    "MRC Yalıtım Söve",
    "mrc yalıtım söve",
    "MRC Yalıtım",
    "MRC Söve",
    "mrc yalitim sove",
    "mrcyalitimsove.com",
    "Malatya söve",
    "Malatya yalıtım",
    "Malatya mantolama",
    "Malatya söve imalatı",
    "Malatya strafor söve",
    "Malatya mantolama fiyatları",
    "Malatya EPS üreticisi",
    "EPS ısı yalıtım levhası",
    "dış cephe kaplama",
    
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
    "Doğu Anadolu EPS mantolama üreticisi"
  ],
  authors: [
    { name: "Talha Özcan", url: "https://talhaozcan.dev" },
    { name: "MRC Yalıtım Söve", url: "https://mrcyalitimsove.com" }
  ],
  creator: "Talha Özcan",
  publisher: "MRC Yalıtım Söve",
  applicationName: "MRC Yalıtım Söve",
  category: "İnşaat ve Dış Cephe Yalıtım Sistemleri",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://mrcyalitimsove.com",
    languages: {
      "tr-TR": "https://mrcyalitimsove.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mrcyalitimsove.com",
    siteName: "MRC Yalıtım Söve",
    title: "Malatya Söve & EPS Yalıtım Fabrikası | MRC Yalıtım Söve",
    description: "Malatya 1. OSB'de yüksek dansite EPS ısı yalıtım levhası, dış cephe söve ve mantolama profilleri üreticisi. Fabrikadan doğrudan en uygun fiyatlar.",
    images: [
      {
        url: "https://mrcyalitimsove.com/images/hero-factory.jpg",
        width: 1200,
        height: 630,
        alt: "MRC Yalıtım Söve Üretim Tesisi Malatya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malatya Söve & EPS Yalıtım Fabrikası | MRC Yalıtım Söve",
    description: "Malatya 1. Organize Sanayi Bölgesi'nde yüksek dansite EPS yalıtım levhası ve dış cephe söve profilleri üretimi.",
    images: ["https://mrcyalitimsove.com/images/hero-factory.jpg"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <OrganizationSchema />
        <FAQSchema />
        <ProductCatalogSchema />
      </head>
      <body className="antialiased bg-white text-slate-900 font-sans">
        <GoogleAnalytics />
        <Navbar />
        <PageTransition>
          <div className="min-h-screen">
            {children}
          </div>
        </PageTransition>
        <FloatingAction />
        <Footer />
        <CookieConsent />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

