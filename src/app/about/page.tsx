'use client';

import React from 'react';
import Image from 'next/image';
import { History, Target, Eye, ShieldCheck, Factory, Award, Building2, Globe2, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
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

  const { scrollYProgress, scrollY } = useScroll();
  const yHeader = useTransform(scrollY, [0, 600], [0, 200]);
  const opacityHeader = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="flex flex-col w-full bg-white overflow-x-hidden">
      {/* 1. PREMIUM HEADER */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-40 lg:pb-28 bg-[#050B15] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <motion.div 
            style={{ y: yHeader, opacity: opacityHeader }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-transparent border border-brand-gold/30 text-brand-gold font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_2px_15px_rgba(212,175,55,0.15)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Kurumsal Kimliğimiz
            </div>
            
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 font-display leading-[1.08] tracking-tight">
              Geleceği <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] animate-gradient">
                Şekillendiriyoruz.
              </span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Yarım asra yaklaşan vizyonumuzla, yalıtım sektöründe kaliteyi ve estetiği en üst seviyede buluşturuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-brand-gold font-bold text-sm uppercase tracking-[0.2em] relative">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: 48 }} 
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-0.5 bg-brand-gold" 
                />
                Hikayemiz
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight font-display relative pl-6">
                <motion.div 
                  style={{ scaleY: scrollYProgress }}
                  className="absolute left-0 top-0 w-1 h-full bg-brand-gold origin-top rounded-full"
                />
                Üretimin Gücü, <br /> Uzmanlığın İmzası.
              </h2>
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>
                  MRC Yalıtım ve Söve olarak, 20 yılı aşkın süredir inşaat sektörüne dış cephe estetiği ve ısı yalıtım çözümleri sunuyoruz. Malatya'daki modern üretim tesisimizde, tam otomasyonlu sistemlerle her yıl milyonlarca metrekarelik yalıtım gücü üretiyoruz.
                </p>
                <p>
                  Sadece ürün değil, mühendislik çözümleri sunan bir yapıdayız. Her bir söve profilinde ve yalıtım levhasında, "Kusursuz Üretim" ilkemizi temsil eden hassas bir işçilik bulunmaktadır.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-6">
                {[
                  { label: 'Yıllık Kapasite', value: '300K+', unit: 'm²' },
                  { label: 'İhracat Noktası', value: '15+', unit: 'Ülke' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all flex flex-col justify-center">
                    <p className="text-4xl font-bold text-brand-navy mb-1 lg:mb-2">{stat.value}<span className="text-brand-gold text-2xl ml-1">{stat.unit}</span></p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0 max-w-lg mx-auto lg:max-w-none"
            >
              <div className="relative z-10 rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl border-[6px] lg:border-[10px] border-slate-100/80 aspect-[3/4]">
                <Image 
                  src="/images/about-factory.jpg" 
                  alt="MRC Yalıtım Üretim Tesisi" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-36 lg:h-36 bg-brand-gold/80 rounded-2xl lg:rounded-[36px] -z-10 rotate-12 shadow-lg" />
              <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 w-24 h-24 lg:w-36 lg:h-36 bg-brand-navy rounded-2xl lg:rounded-[36px] -z-10 -rotate-6 shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES - DARK GLASS */}
      <section className="py-16 lg:py-24 bg-[#050B15] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/dots.svg')] bg-repeat" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <p className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Vizyon & Misyon</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">Geleceğin Yapılarını Bugün İnşa Ediyoruz</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { 
                icon: <Eye size={32} />, 
                title: 'Vizyonumuz', 
                desc: 'Yalıtım teknolojilerinde küresel bir oyuncu olarak, sürdürülebilir şehirler ve enerji tasarrufu sağlayan yapılar için en çok tercih edilen estetik çözüm ortağı olmak.' 
              },
              { 
                icon: <Target size={32} />, 
                title: 'Misyonumuz', 
                desc: 'İnşaat sektörüne yüksek kaliteli, dayanıklı ve ekonomik yalıtım ürünleri sunarak yaşam kalitesini artırmak ve çevreci üretim pratikleriyle yarınlara değer katmak.' 
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 lg:p-12 bg-white/5 rounded-[32px] lg:rounded-[48px] border border-white/10 hover:border-brand-gold/30 hover:bg-white/[0.07] transition-all group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] lg:rounded-[28px] bg-brand-gold text-brand-navy flex items-center justify-center mb-8 lg:mb-10 shadow-lg shadow-brand-gold/20 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 font-display">{value.title}</h3>
                <p className="text-slate-400 text-base lg:text-lg leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY US - QUALITY GRID */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display mb-4">Neden MRC Yalıtım?</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck />, title: 'Sertifikalı Kalite', sub: 'TSE & CE Belgeli' },
              { icon: <Factory />, title: 'Modern Üretim', sub: 'Tam Otomasyon' },
              { icon: <Globe2 />, title: 'Global Vizyon', sub: '15+ Ülkeye İhracat' },
              { icon: <Award />, title: 'Üstün Hizmet', sub: 'Teknik Destek' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 rounded-[32px] bg-slate-50 text-brand-navy flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-navy group-hover:text-brand-gold transition-all duration-500 shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-1">{item.title}</h4>
                <p className="text-xs font-bold text-brand-gold uppercase tracking-widest">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA - EXPERIENCE */}
      <section className="py-12 md:py-16 bg-brand-gold">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 text-center lg:text-left">
          <div className="text-brand-navy space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display">Tecrübemize Güvenin.</h2>
            <p className="text-brand-navy/80 text-base md:text-xl font-medium">Büyük projeleriniz için özel üretim ve teknik danışmanlık sağlıyoruz.</p>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl w-full sm:w-auto">
              Projeleri İncele
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
