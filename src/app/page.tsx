'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Factory, 
  Truck, 
  Award,
  ChevronRight,
  PlayCircle,
  Building2,
  Users2
} from 'lucide-react';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-[#050B15] overflow-hidden">
        {/* Background Overlay / Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-20 bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold"></span>
              </span>
              Sektörün Öncü Üretim Gücü
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] font-display">
              Geleceği <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold bg-[length:200%_auto] animate-gradient">Yalıtıyoruz.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
              Yüksek yoğunluklu EPS yalıtım çözümleri ve estetik dış cephe söve profilleriyle, yapılarınıza değer katan mühendislik harikaları üretiyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Link 
                href="/contact" 
                className="group relative bg-brand-gold text-brand-navy px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-lg overflow-hidden"
              >
                <span className="relative z-10">İletişime Geçin</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <button className="flex items-center justify-center gap-3 text-white font-bold hover:text-brand-gold transition-colors px-10">
                <PlayCircle size={32} strokeWidth={1.5} /> Üretim Videosu
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-[60px] overflow-hidden border-[16px] border-white/5 shadow-2xl">
              <Image 
                src="/images/hero-factory.jpg" 
                alt="MRC Yalıtım Fabrika" 
                fill 
                className="object-cover scale-110"
              />
            </div>
            {/* Stats Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-2xl z-20 flex gap-10 border border-slate-100"
            >
              <div className="text-center border-r border-slate-100 pr-10">
                <p className="text-5xl font-black text-brand-navy">25K<span className="text-brand-gold text-2xl">+</span></p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">m² Üretim/Ay</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-brand-gold">20</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">Yıllık Tecrübe</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCTION STRENGTH */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div 
              whileInView="visible"
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <h2 className="text-4xl font-bold text-brand-navy font-display leading-tight">
                Modern Üretim, <br /> Kusursuz Mühendislik.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Tesisimizdeki tam otomasyonlu sistemler, her ürünün milimetrik hassasiyetle ve aynı kalitede çıkmasını sağlar.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-gold font-bold group">
                Fabrikamızı Tanıyın <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck />, title: 'Sertifikalı Kalite', desc: 'Tüm ürünlerimiz TSE, CE ve ISO standartlarında, zorlu laboratuvar testlerinden geçerek üretilir.' },
                { icon: <Factory />, title: 'Yüksek Kapasite', desc: 'Aylık 25.000 m² üretim kapasitemizle, en büyük projelerin bile zamanında tedarikçisi oluyoruz.' },
                { icon: <Users2 />, title: 'Teknik Danışmanlık', desc: 'Sadece üretim değil, projelendirme ve uygulama aşamasında da mühendislik desteği sunuyoruz.' },
                { icon: <Building2 />, title: 'Geniş Ürün Gamı', desc: 'Söve modellerinden yalıtım levhalarına kadar 150+ farklı modelle zengin seçenekler.' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-brand-gold/20 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-brand-gold flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE SECTION */}
      <section className="py-32 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">Üretim Kataloğu</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-display">Öne Çıkan Ürün Grupları</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'Dış Cephe Söveleri', desc: 'Dekoratif ve ısı yalıtımlı profil çözümleri.', img: '/images/cat-sove.jpg' },
              { name: 'EPS Yalıtım Levhaları', desc: 'Yüksek yoğunluklu enerji tasarrufu.', img: '/images/cat-eps.jpg' },
              { name: 'Dekoratif Kaplamalar', desc: 'Doğal taş ve ahşap görünümlü paneller.', img: '/images/cat-deco.jpg' },
            ].map((cat, idx) => (
              <Link href="/contact" key={idx} className="group relative aspect-[4/5] rounded-[48px] overflow-hidden">
                <Image 
                  src={cat.img} 
                  alt={cat.name} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-brand-gold transition-colors">{cat.name}</h3>
                  <p className="text-slate-400 group-hover:text-white transition-colors">{cat.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-brand-gold font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Bilgi Al <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-brand-gold">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="text-brand-navy space-y-2">
            <h2 className="text-3xl lg:text-4xl font-black font-display">Projeniz İçin Teklif Alın</h2>
            <p className="text-brand-navy/70 text-lg">Özel ölçü ve toptan alımlar için uzman ekibimiz sizi bekliyor.</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-brand-navy text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-navy/20"
          >
            Hemen Teklif İste
          </Link>
        </div>
      </section>
    </div>
  );
}
