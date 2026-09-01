'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  ChevronRight, 
  MessageCircle,
  Home,
  Building2,
  BookOpen,
  PhoneCall,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. NAVBAR COMPONENT
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/', icon: Home },
    { name: 'Kurumsal', href: '/about', icon: Building2 },
    { name: 'Ürün Kataloğu', href: '/MRC_2026_Katalog.pdf', external: true, icon: BookOpen },
    { name: 'İletişim', href: '/contact', icon: MapPin },
  ];

  const headerBg = isOpen 
    ? 'bg-[#050B15] py-3 border-b border-white/10' 
    : scrolled 
      ? 'bg-white/95 border-b border-slate-200/80 shadow-sm py-2.5' 
      : 'bg-[#050B15]/90 border-b border-white/10 py-3.5';

  const textColor = scrolled && !isOpen ? 'text-brand-navy' : 'text-white';
  const linkColor = scrolled && !isOpen
    ? 'text-slate-700 hover:text-brand-navy' 
    : 'text-white hover:text-brand-gold';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[70] transition-colors duration-200 ${headerBg}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center -ml-4 sm:-ml-8 md:-ml-12 lg:-ml-14">
            <Image 
              src="/logo_transparent.png" 
              alt="MRC Yalıtım Söve Logo" 
              width={140} 
              height={30} 
              sizes="140px"
              className="object-contain object-left scale-y-[1.25] scale-x-[1.5] sm:scale-y-[1.45] sm:scale-x-[1.8] md:scale-y-[1.65] md:scale-x-[2.15] origin-left" 
              priority 
            />
          </Link>

          {/* Desktop Navigation & Phone Badge */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Phone Badge Near Menu / Center Area */}
            <a 
              href="tel:+905322585244"
              className={`inline-flex items-center gap-3.5 px-4 py-2 xl:px-5 xl:py-2.5 rounded-2xl border transition-all duration-300 shadow-md group active:scale-95 mr-6 xl:mr-10 ${
                scrolled && !isOpen
                  ? 'bg-brand-navy border-brand-gold/50 text-white hover:bg-brand-gold hover:text-brand-navy hover:border-brand-navy shadow-[0_4px_15px_rgba(5,11,21,0.2)]'
                  : 'bg-white/[0.1] hover:bg-white/[0.18] border-brand-gold/50 text-white backdrop-blur-md shadow-[0_4px_20px_rgba(212,175,55,0.2)]'
              }`}
              title="Doğrudan Fabrika & Satış Hattı - Hemen Arayın"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 relative ${
                scrolled && !isOpen
                  ? 'bg-brand-gold text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold'
                  : 'bg-brand-gold text-brand-navy group-hover:scale-110 shadow-sm'
              }`}>
                <span className="flex h-2.5 w-2.5 absolute -top-1 -right-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <Phone size={17} className="shrink-0 group-hover:rotate-12 transition-transform" />
              </div>

              <div className="flex flex-col text-left">
                <span className={`text-[10px] uppercase font-extrabold tracking-wider ${
                  scrolled && !isOpen ? 'text-amber-300 group-hover:text-brand-navy/90' : 'text-brand-gold'
                }`}>
                  Hızlı İletişim & Sipariş
                </span>
                <span className={`font-black text-sm xl:text-base tracking-wide ${
                  scrolled && !isOpen ? 'text-white group-hover:text-brand-navy' : 'text-white group-hover:text-brand-gold'
                }`}>
                  +90 532 258 52 44
                </span>
              </div>
            </a>

            <div className="w-[1px] h-5 bg-white/20" />

            {/* Desktop Links */}
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`relative font-bold text-xs uppercase tracking-[0.2em] transition-colors py-2 group ${
                  pathname === link.href ? 'text-brand-gold' : linkColor
                }`}
              >
                {link.name}
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-brand-gold transform origin-left transition-transform duration-200 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            
            <a 
              href="https://wa.me/905322585244?text=Merhaba,%20fiyat%20ve%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-brand-gold rounded-xl text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors shadow-md"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Direct Open Phone Badge on Mobile Header */}
            <a 
              href="tel:+905322585244"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border transition-all active:scale-95 shadow-sm font-black tracking-wide ${
                scrolled && !isOpen
                  ? 'bg-brand-navy border-brand-gold/50 text-white shadow-md'
                  : 'bg-white/[0.08] border-brand-gold/40 text-white backdrop-blur-md'
              }`}
              aria-label="Doğrudan Telefonla Arayın"
              title="Hemen Arayın: 0532 258 52 44"
            >
              <div className="w-5 h-5 rounded-md bg-brand-gold text-brand-navy flex items-center justify-center shrink-0">
                <Phone size={11} className="fill-current" />
              </div>
              <span className="text-brand-gold text-[11px] sm:text-xs font-bold tracking-tight">
                0532 258 52 44
              </span>
            </a>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-gold p-1.5 sm:p-2 relative z-50 focus:outline-none"
              aria-label="Menü"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Ultra Luxury & Full View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#050B15] flex flex-col justify-between px-5 pt-28 pb-6 lg:hidden overflow-y-auto"
          >
            {/* Ambient Lights */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-900/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2 px-1 flex items-center gap-1.5">
                <Sparkles size={12} />
                Menü & Sayfalar
              </p>

              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all active:scale-[0.98] ${
                      isActive 
                        ? 'bg-brand-gold text-brand-navy border-brand-gold font-black shadow-lg shadow-brand-gold/20' 
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border-white/5 font-bold'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-brand-navy text-brand-gold' : 'bg-white/5 text-brand-gold'
                      }`}>
                        <IconComponent size={18} />
                      </div>
                      <span className="text-base">{link.name}</span>
                    </div>
                    <ChevronRight size={18} className={isActive ? 'text-brand-navy' : 'text-slate-500'} />
                  </Link>
                );
              })}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                <a 
                  href="https://wa.me/905322585244?text=Merhaba,%20hızlı%20fiyat%20ve%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-gold text-brand-navy py-3.5 px-3 rounded-2xl font-black text-center text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={16} /> Teklif Alın
                </a>
                <a 
                  href="tel:+905322585244"
                  className="bg-white/10 border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-navy py-3.5 px-3 rounded-2xl font-black text-center text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone size={15} /> Hemen Ara
                </a>
              </div>
            </div>
            
            {/* Mobile Footer Contact Info */}
            <div className="pt-5 mt-6 border-t border-white/10 flex flex-col gap-3 text-sm relative z-10 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              <a href="tel:+905322585244" className="flex items-center gap-3 text-white font-bold active:text-brand-gold">
                <div className="w-8 h-8 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={15} />
                </div>
                <span>+90 532 258 52 44</span>
              </a>
              <a href="mailto:mrcyalitim@gmail.com" className="flex items-center gap-3 text-slate-300 text-xs active:text-brand-gold">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={15} />
                </div>
                <span>mrcyalitim@gmail.com</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// 2. FOOTER COMPONENT
export function Footer() {
  return (
    <footer className="bg-[#050B15] pt-24 pb-12 text-white overflow-hidden relative">
      {/* Footer Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image 
                  src="/logo_transparent.png" 
                  alt="MRC Yalıtım Söve Logo" 
                  width={220} 
                  height={60} 
                  className="object-contain" 
                />
              </motion.div>
            </Link>
            <p className="text-slate-400 leading-relaxed font-light">
              Yüksek teknoloji üretim hatlarımızla, yapı sektörüne dayanıklı ve estetik çözümler sunuyoruz. Türkiye'nin yalıtım vizyonunu fabrikamızda şekillendiriyoruz.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.div 
                  key={social} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-colors cursor-pointer group"
                >
                   <div className="w-1.5 h-1.5 bg-white group-hover:bg-white transition-colors rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">Hızlı Menü</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/about" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Fabrikamız</Link></li>
              <li><Link href="/MRC_2026_Katalog.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Ürün Kataloğu</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">İletişim Kanalları</Link></li>
              <li><a href="https://wa.me/905322585244?text=Merhaba,%20fiyat%20ve%20teklif%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Teklif Al</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">Ürün Gruplarımız</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/#soveler" className="hover:text-brand-gold transition-colors">Dış Cephe Söve Modelleri</Link></li>
              <li><Link href="/#eps" className="hover:text-brand-gold transition-colors">EPS Isı Yalıtım Levhaları</Link></li>
              <li><Link href="/#silmeler" className="hover:text-brand-gold transition-colors">Kat Silmeleri & Bordürler</Link></li>
              <li><Link href="/#tac" className="hover:text-brand-gold transition-colors">Dekoratif Taç & Motifler</Link></li>
              <li><Link href="/#kosetasi" className="hover:text-brand-gold transition-colors">Bina Köşe Taşları & L-Köşe</Link></li>
              <li><Link href="/#paneller" className="hover:text-brand-gold transition-colors">Fugalı Dış Cephe Kaplamaları</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">İletişim & Fabrika</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <a 
                  href="https://maps.google.com/?q=38.334732,38.193420" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed hover:text-brand-gold transition-colors"
                >
                  1.OSB Mah, 5. Cd. No: 13/2 <br />44900 Yeşilyurt / Malatya
                </a>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <a 
                  href="tel:+905322585244" 
                  className="text-sm font-semibold hover:text-brand-gold transition-colors"
                >
                  +90 532 258 52 44
                </a>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <a 
                  href="mailto:mrcyalitim@gmail.com" 
                  className="text-sm hover:text-brand-gold transition-colors"
                >
                  mrcyalitim@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional SEO Badges Strip */}
        <div className="py-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-brand-gold font-bold uppercase tracking-wider">Hizmet Bölgelerimiz:</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Malatya (1. OSB / Yeşilyurt / Battalgazi)</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Elazığ</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Adıyaman</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Kahramanmaraş</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Sivas</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Bingöl</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Diyarbakır</span>
            <span className="bg-white/5 px-2.5 py-1 rounded-md text-slate-300">Tüm Türkiye</span>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <p className="text-center lg:text-left">
            © 2026 MRC Yalıtım Söve A.Ş. Yalıtımın ve estetiğin buluşma noktası.
          </p>

          {/* Web Tasarım & Geliştirme İmzası */}
          <div className="flex items-center justify-center">
            <a 
              href="https://talhaozcan.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-brand-gold/50 text-slate-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-sm"
              title="Talha Özcan - Web Tasarım & Yazılım"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold/60 group-hover:bg-brand-gold group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
              <span className="text-[11px] text-slate-400 group-hover:text-slate-300 font-medium tracking-wide">
                Tasarım & Geliştirme:
              </span>
              <span className="font-bold text-white group-hover:text-brand-gold transition-colors tracking-tight flex items-center gap-1.5">
                Talha Özcan
                <ExternalLink size={12} className="text-brand-gold/70 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-500">
            <Link href="/kvkk" className="hover:text-brand-gold transition-colors">KVKK & Gizlilik Politikası</Link>
            <Link href="/kvkk#cerez-politikasi" className="hover:text-brand-gold transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// 3. FLOATING ACTION BUTTONS (Only Direct Phone & WhatsApp)
export function FloatingAction() {
  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-30 flex flex-col gap-3.5 md:gap-4 items-end">
      {/* 1. Direct Phone Call Action */}
      <a href="tel:+905322585244" className="group relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.7 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-brand-navy via-[#0A192F] to-[#172c47] text-brand-gold rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(5,11,21,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 transition-all border border-brand-gold/50 relative"
          title="Telefonla Doğrudan Arayın"
        >
          <div className="absolute inset-0 border border-brand-gold/30 rounded-full animate-ping opacity-30 pointer-events-none" />
          <Phone size={20} className="md:w-6 md:h-6 text-brand-gold" />
          
          <span className="absolute right-full mr-4 bg-[#050B15] text-white border border-brand-gold/30 px-4 py-3 rounded-2xl text-xs md:text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-3 group-hover:translate-x-0 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span>Doğrudan Ara: <strong className="text-brand-gold tracking-wide">+90 532 258 52 44</strong></span>
          </span>
        </motion.div>
      </a>

      {/* 2. Premium WhatsApp Action */}
      <a href="https://wa.me/905322585244" target="_blank" rel="noreferrer" className="group relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.9 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_30px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all relative"
          title="WhatsApp Hattı"
        >
          {/* Subtle Ripple */}
          <div className="absolute inset-0 border-[2px] md:border-[3px] border-[#25D366] rounded-full animate-ping opacity-30 pointer-events-none" />
          
          <MessageCircle size={26} className="md:w-8 md:h-8" />
          
          <span className="absolute right-full mr-4 bg-[#25D366] text-white px-5 py-3.5 rounded-2xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0 flex items-center gap-2">
            WhatsApp Destek
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </span>
        </motion.div>
      </a>
    </div>
  );
}
