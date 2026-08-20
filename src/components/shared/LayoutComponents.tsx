'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Mail, Phone, ChevronRight, MessageCircle } from 'lucide-react';
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
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Kurumsal', href: '/about' },
    { name: 'Katalog', href: '/MRC_2026_Katalog.pdf', external: true },
    { name: 'İletişim', href: '/contact' },
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${headerBg}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo_transparent.png" 
              alt="MRC Yalıtım Logo" 
              width={140} 
              height={30} 
              className="object-contain scale-[1.7] origin-left -ml-4 md:ml-0" 
              priority 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
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
            
            <Link 
              href="/contact"
              className="px-6 py-2.5 bg-brand-gold rounded-xl text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors shadow-md"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-brand-gold p-2 relative z-50 focus:outline-none"
            aria-label="Menü"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Clean & High Performance */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#050B15] flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`text-xl font-bold py-3 border-b border-white/5 transition-colors ${
                  pathname === link.href ? 'text-brand-gold' : 'text-white active:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-gold text-brand-navy w-full py-3.5 rounded-xl font-bold text-center text-sm uppercase tracking-wider mt-4 shadow-lg active:scale-95 transition-transform"
            >
              Hemen Teklif Alın
            </Link>
          </div>
          
          {/* Mobile Contact Info */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 text-slate-400 text-sm">
            <a href="tel:+905322585244" className="flex items-center gap-3 active:text-brand-gold">
              <Phone size={16} className="text-brand-gold shrink-0"/> +90 532 258 52 44
            </a>
            <a href="mailto:mrcyalitim@gmail.com" className="flex items-center gap-3 active:text-brand-gold">
              <Mail size={16} className="text-brand-gold shrink-0"/> mrcyalitim@gmail.com
            </a>
          </div>
        </div>
      )}
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
                  alt="MRC Yalıtım Logo" 
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
              <li><Link href="/MRC_2026_Katalog.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">2026 Ürün Kataloğu</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">İletişim Kanalları</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Teklif Al</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">Kategoriler</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Dış Cephe Söveleri</li>
              <li>EPS Yalıtım Levhaları</li>
              <li>Kat Silmeleri</li>
              <li>Dekoratif Paneller</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">İletişim</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <span className="text-sm leading-relaxed">1.OSB Mahallesi 5.Cd. No: 13/2 <br />Yeşilyurt / Malatya</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <span className="text-sm">+90 532 258 52 44</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <span className="text-sm">mrcyalitim@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-xs text-slate-500">
          <p>© 2026 MRC Yalıtım ve Söve A.Ş. Yalıtımın ve estetiğin buluşma noktası.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="#" className="hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// 3. FLOATING ACTION BUTTONS
export function FloatingAction() {
  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-30 flex flex-col gap-3 md:gap-4 items-end">
      {/* Get a Quote Action */}
      <Link href="/contact" className="group relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.8 }}
          className="w-10 h-10 md:w-12 md:h-12 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-110 active:scale-95 transition-all border border-transparent hover:border-white/50"
        >
          <Mail size={18} className="md:w-5 md:h-5" />
          <span className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2.5 rounded-2xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 flex items-center gap-2">
            Hemen Teklif Al
          </span>
        </motion.div>
      </Link>
      
      {/* Premium WhatsApp Action */}
      <a href="https://wa.me/905322585244" target="_blank" rel="noreferrer" className="group relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all relative"
        >
          {/* Subtle Ripple */}
          <div className="absolute inset-0 border-[2px] md:border-[3px] border-[#25D366] rounded-full animate-ping opacity-30" />
          
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
