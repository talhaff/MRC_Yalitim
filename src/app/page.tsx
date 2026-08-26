'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import ProductMarquee from '@/components/home/ProductMarquee';

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

  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 1000], [0, 300]);
  const yHeroImg = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-[#050B15] overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:py-0">
        {/* Background Overlay / Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-brand-gold/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-blue-900/25 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-15 bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            style={{ y: yHeroText, opacity: opacityHero }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-6 md:space-y-8"
          >
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-transparent border border-brand-gold/30 text-brand-gold font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_2px_15px_rgba(212,175,55,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Geleceği Yalıtıyoruz
            </div>
            
            <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight font-display">
              Yalıtımın ve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] animate-gradient">
                Estetiğin Buluşma Noktası.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              Yüksek yoğunluklu EPS yalıtım çözümleri ve estetik dış cephe söve profilleriyle, yapılarınıza değer katan mühendislik harikaları üretiyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 md:gap-5 pt-2 md:pt-4">
              <Link 
                href="/contact" 
                className="group relative bg-gradient-to-r from-brand-gold via-[#dfb94d] to-brand-gold text-brand-navy px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 text-base md:text-lg overflow-hidden shadow-[0_10px_25px_rgba(212,175,55,0.25)] active:scale-[0.98]"
              >
                <span className="relative z-10">İletişime Geçin</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link 
                href="/MRC_2026_Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-white font-bold hover:text-brand-gold transition-colors py-4 px-8 md:px-10 border border-white/15 hover:border-brand-gold/40 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm active:scale-[0.98]"
              >
                <Award size={22} className="text-brand-gold" strokeWidth={1.75} /> 2026 Kataloğu İndir
              </Link>
            </div>

            {/* Mobile Stats Badge */}
            <div className="flex lg:hidden justify-between items-center bg-gradient-to-r from-white/[0.07] to-white/[0.03] border border-white/10 rounded-2xl p-5 mt-6 backdrop-blur-md shadow-xl">
              <div className="text-center w-1/2 border-r border-white/10 pr-2">
                <p className="text-2xl font-black text-white tracking-tight">25K<span className="text-brand-gold text-lg">+</span></p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">m² Üretim/Ay</p>
              </div>
              <div className="text-center w-1/2 pl-2">
                <p className="text-2xl font-black text-brand-gold tracking-tight">20+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Yıllık Tecrübe</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: yHeroImg }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-[60px] overflow-hidden border-[16px] border-white/5 shadow-2xl">
              <motion.div
                animate={{ scale: [1, 1.1] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="w-full h-full relative"
              >
                <Image 
                  src="/images/arkaplan3.webp" 
                  alt="MRC Yalıtım Fabrika" 
                  fill 
                  priority
                  className="object-cover object-center"
                />
              </motion.div>
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

      {/* 2. PRODUCT SLIDING MARQUEE SECTION */}
      <ProductMarquee />

      {/* 3. SHOWCASE SECTION */}
      <section className="py-16 lg:py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4 flex flex-col items-center">
            <p className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">Katalog & Ürünler</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">Tüm Ürün Gruplarımız</h2>
            <Link 
              href="/MRC_2026_Katalog.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-gold/10 transition-all font-bold text-lg group shadow-xl"
            >
              <Award className="text-brand-gold group-hover:rotate-12 transition-transform" size={24} />
              2026 Ürün Kataloğunu İndir
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'Dış Cephe Söveleri', desc: 'Dekoratif ve ısı yalıtımlı profil çözümleri.', img: '/images/cat-sove.jpg' },
              { name: 'EPS Yalıtım Levhaları', desc: 'Yüksek yoğunluklu enerji tasarrufu.', img: '/images/cat-eps.jpg' },
              { name: 'Dekoratif Kaplamalar', desc: 'Doğal taş ve ahşap görünümlü paneller.', img: '/images/cat-deco.jpg' },
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link href="/contact" className="group relative aspect-[4/5] rounded-[48px] overflow-hidden block">
                  <Image 
                    src={cat.img} 
                    alt={cat.name} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-brand-gold transition-colors duration-500">{cat.name}</h3>
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-500">{cat.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-brand-gold font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Bilgi Al <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTION STRENGTH */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <motion.div 
              whileInView="visible"
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display leading-tight">
                Modern Üretim, <br className="hidden md:block" /> Kusursuz Mühendislik.
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
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-brand-gold/40 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] transition-colors group cursor-default"
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

      {/* 4. CALL TO ACTION */}
      <section className="py-12 md:py-16 bg-brand-gold">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 text-center lg:text-left">
          <div className="text-brand-navy space-y-3">
            <h2 className="text-3xl lg:text-4xl font-black font-display">Projeniz İçin Teklif Alın</h2>
            <p className="text-brand-navy/80 text-base md:text-lg">Özel ölçü ve toptan alımlar için uzman ekibimiz sizi bekliyor.</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-brand-navy text-white px-10 md:px-12 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-navy/20 w-full sm:w-auto"
          >
            Hemen Teklif İste
          </Link>
        </div>
      </section>
    </div>
  );
}
