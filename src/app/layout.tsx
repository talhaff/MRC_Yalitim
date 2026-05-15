import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/shared/LayoutComponents";
import { PageTransition, OrganizationSchema } from "@/components/shared/SEOAndTransitions";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "MRC Yalıtım ve Söve | Profesyonel Yalıtım Çözümleri",
  description: "Türkiye'nin lider yalıtım ve söve üreticisi. EPS yalıtım levhaları, dış cephe söveleri ve dekoratif kaplamalar.",
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
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
