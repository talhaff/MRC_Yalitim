import Link from 'next/link';
import { Home, PhoneCall, BookOpen, Building2, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 - Sayfa Bulunamadı | MRC Yalıtım Söve Malatya',
  description: 'Aradığınız sayfa silinmiş, taşınmış veya adresi değiştirilmiş olabilir. MRC Yalıtım Söve ana sayfasına veya ürün kataloğuna dönün.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050B15] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Large 404 Badge */}
        <div className="inline-flex items-center justify-center">
          <span className="text-8xl sm:text-9xl font-black font-outfit tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-brand-gold via-amber-200 to-amber-500/20 select-none drop-shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
            404
          </span>
        </div>

        {/* Title and Subtitle */}
        <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
          Aradığınız Sayfa Bulunamadı
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Ulaşmaya çalıştığınız sayfa taşınmış, silinmiş veya adı değiştirilmiş olabilir. Dilerseniz aşağıdaki bağlantıları kullanarak yolunuza devam edebilirsiniz.
        </p>

        {/* Primary Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-[#e5c05d] to-brand-gold text-slate-950 font-bold text-sm sm:text-base shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Home size={18} />
            <span>Ana Sayfaya Dön</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-sm sm:text-base font-semibold hover:border-brand-gold/40 transition-all"
          >
            <PhoneCall size={17} className="text-brand-gold" />
            <span>İletişime Geçin</span>
          </Link>
        </div>

        {/* Quick Links Card */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Popüler Sayfalar
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/about"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-brand-gold/30 transition-all group flex items-center gap-2.5"
            >
              <Building2 size={16} className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white font-medium">Kurumsal</span>
            </Link>

            <Link
              href="/MRC_2026_Katalog.pdf"
              target="_blank"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-brand-gold/30 transition-all group flex items-center gap-2.5"
            >
              <BookOpen size={16} className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white font-medium">Ürün Kataloğu</span>
            </Link>

            <Link
              href="/kvkk"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-brand-gold/30 transition-all group flex items-center gap-2.5 col-span-2 sm:col-span-1"
            >
              <ArrowLeft size={16} className="text-brand-gold shrink-0 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white font-medium">KVKK & Gizlilik</span>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
