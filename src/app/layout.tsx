import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, FloatingAction } from "@/components/shared/LayoutComponents";
import { PageTransition, OrganizationSchema } from "@/components/shared/SEOAndTransitions";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: "#050B15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mrcyalitim.com"),
  title: {
    default: "MRC Yalıtım ve Söve | Yalıtımın ve Estetiğin Buluşma Noktası",
    template: "%s | MRC Yalıtım",
  },
  description: "Malatya 1. OSB'de yüksek dansite EPS ısı yalıtım levhası ve estetik dış cephe söve profilleri üreticisi. Malatya yalıtım, mantolama ve söve çözümleri.",
  keywords: [
    "Malatya yalıtım",
    "Malatya söve",
    "Malatya mantolama",
    "Malatya EPS üreticisi",
    "dış cephe mantolama Malatya",
    "ısı yalıtım levhası Malatya",
    "söve modelleri Malatya",
    "1. OSB yalıtım fabrikası",
    "Yeşilyurt yalıtım firmaları",
    "MRC Yalıtım",
    "MRC Söve",
    "Doğu Anadolu yalıtım fabrikası"
  ],
  authors: [{ name: "MRC Yalıtım ve Söve", url: "https://mrcyalitim.com" }],
  creator: "MRC Yalıtım ve Söve",
  publisher: "MRC Yalıtım ve Söve",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://mrcyalitim.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mrcyalitim.com",
    siteName: "MRC Yalıtım ve Söve",
    title: "MRC Yalıtım ve Söve | Yalıtımın ve Estetiğin Buluşma Noktası",
    description: "Malatya'da yüksek teknolojili EPS ısı yalıtım levhaları ve dış cephe söve profilleri üretimi. Sektörün öncü üretim gücü.",
    images: [
      {
        url: "/images/hero-factory.jpg",
        width: 1200,
        height: 630,
        alt: "MRC Yalıtım Fabrikası ve Üretim Tesisi Malatya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRC Yalıtım ve Söve | Yalıtımın ve Estetiğin Buluşma Noktası",
    description: "Malatya 1. OSB modern üretim tesislerinde EPS yalıtım levhası ve söve imalatı.",
    images: ["/images/hero-factory.jpg"],
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
