'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Factory, Layers, Building2 } from 'lucide-react';

export interface SlideItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: typeof Factory;
}

const slides: SlideItem[] = [
  {
    id: 'cnc-sove',
    src: '/images/hero/hero_cnc_facility.jpg',
    alt: 'CNC Otomasyonlu Söve ve Dış Cephe Profil Üretim Tesisi',
    title: 'CNC Milimetrik Söve Üretimi',
    subtitle: 'Son teknoloji tel kesim ve mikronize kaplama',
    tag: 'Tam Otomasyon CNC',
    icon: Factory,
  },
  {
    id: 'sove-mouldings',
    src: '/images/hero/hero_sove_production.jpg',
    alt: 'Mimari Dış Cephe Söve Profilleri ve Kat Silmeleri Deposu',
    title: 'Mimari Söve & Taç Profilleri',
    subtitle: 'Estetik, hafif ve darbelere karşı zırhlı yüzey',
    tag: 'Dış Cephe Estetiği',
    icon: Layers,
  },
  {
    id: 'eps-insulation',
    src: '/images/hero/hero_eps_insulation.jpg',
    alt: 'Yüksek Yoğunluklu Karbonlu ve Beyaz EPS Isı Yalıtım Levhaları',
    title: 'Yüksek Dansite EPS Yalıtım',
    subtitle: 'Binalarda %50 enerji tasarrufu sağlayan bloklar',
    tag: 'Maksimum Isı Yalıtımı',
    icon: Building2,
  },
  {
    id: 'sove-architecture',
    src: '/images/hero/hero_sove_architecture.jpg',
    alt: 'Kusursuz Mimari Cephe Uygulaması ve Söve Montajı',
    title: 'Kusursuz Cephe Çözümleri',
    subtitle: 'Her mimari projeye özel ölçü ve milimetrik işçilik',
    tag: 'Mimari Uygulama',
    icon: Sparkles,
  },
];

export default function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.7 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.7 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.7 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const activeSlide = slides[currentIndex];
  const IconComponent = activeSlide.icon;

  return (
    <div 
      className="relative z-10 w-full aspect-[4/5] rounded-[60px] overflow-hidden border-[16px] border-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B15]/90 via-[#050B15]/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-brand-gold/30 rounded-[44px] z-20 pointer-events-none" />

      {/* Top Floating Category Pill & Counter */}
      <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none">
        <motion.div
          key={activeSlide.id + '-tag'}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B15]/80 border border-brand-gold/40 text-brand-gold text-xs font-black tracking-widest uppercase backdrop-blur-md shadow-lg"
        >
          <IconComponent size={14} className="text-brand-gold" />
          <span>{activeSlide.tag}</span>
        </motion.div>

        <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-white/90 font-mono text-xs font-bold tracking-widest backdrop-blur-md">
          <span className="text-brand-gold">0{currentIndex + 1}</span> / 0{slides.length}
        </div>
      </div>

      {/* Sliding Images Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              animate={{ scale: [1, 1.06] }}
              transition={{ duration: 6, ease: 'easeOut' }}
              className="relative w-full h-full"
            >
              <Image
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Content Tag on Slide - Elevated above bottom stats card */}
      <div className="absolute bottom-28 md:bottom-32 left-6 right-6 z-20 pointer-events-none">
        <motion.div
          key={activeSlide.id + '-content'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-r from-[#050B15]/90 via-[#050B15]/80 to-transparent p-4 md:p-5 rounded-2xl border border-white/10 backdrop-blur-md max-w-md shadow-2xl"
        >
          <h3 className="text-base md:text-lg font-black text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
            {activeSlide.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-300 font-light mt-1 line-clamp-1">
            {activeSlide.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Left / Right Slide Navigation Buttons */}
      <div className="absolute inset-y-0 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Önceki Görsel"
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#050B15]/70 hover:bg-brand-gold text-white hover:text-brand-navy border border-white/20 hover:border-brand-gold flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 active:scale-95 focus:outline-none"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Sonraki Görsel"
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#050B15]/70 hover:bg-brand-gold text-white hover:text-brand-navy border border-white/20 hover:border-brand-gold flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 active:scale-95 focus:outline-none"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 right-6 z-30 flex items-center gap-1.5">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            aria-label={`${slide.title} görseline geç`}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              currentIndex === idx 
                ? 'w-6 h-1.5 bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' 
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Top Animated Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: isPaused ? '100%' : '100%' }}
          transition={{ duration: isPaused ? 0 : 4.5, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-brand-gold to-amber-300"
        />
      </div>
    </div>
  );
}
