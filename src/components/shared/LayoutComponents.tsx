'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. NAVBAR COMPONENT
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Home page has a dark hero, other pages are light
  const isHomePage = pathname === '/';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Kurumsal', href: '/about' },
    { name: 'Katalog', href: '/MRC_2026_Katalog.pdf', external: true },
    { name: 'İletişim', href: '/contact' },
  ];

  // Dynamic Styles
  const navBg = scrolled 
    ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2' 
    : (isHomePage ? 'bg-[#050B15]/30 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2');

  const textColor = scrolled || !isHomePage ? 'text-brand-navy' : 'text-white';
  const linkColor = scrolled || !isHomePage 
    ? 'text-slate-600 hover:text-brand-navy' 
    : 'text-white hover:text-brand-gold drop-shadow-md';

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image 
              src="/logo_transparent.png" 
              alt="MRC Yalıtım Logo" 
              width={140} 
              height={30} 
              className="object-contain scale-[1.7] origin-left" 
              priority 
            />
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`relative font-bold text-xs uppercase tracking-[0.2em] transition-all py-2 group ${
                pathname === link.href ? 'text-brand-gold' : linkColor
              }`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-brand-gold transform origin-left transition-transform duration-300 ease-out ${
                pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
          
          
          <Link 
            href="/contact"
            className="px-6 py-2.5 bg-brand-gold rounded-xl text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-all shadow-md"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-brand-gold p-2">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-navy z-[-1] transition-all duration-500 flex flex-col justify-center items-center gap-8 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-3xl font-bold text-white hover:text-brand-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          className="bg-brand-gold text-brand-navy px-10 py-4 rounded-xl font-bold flex items-center gap-2"
        >
          Teklif Alın
        </Link>
      </div>
    </nav>
  );
}

// 2. FOOTER COMPONENT
export function Footer() {
  return (
    <footer className="bg-[#050B15] pt-32 pb-12 text-white overflow-hidden relative">
      {/* Footer Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
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
                <span className="text-sm leading-relaxed">Organize Sanayi Bölgesi, <br />Malatya</span>
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
                <span className="text-sm">info@mrcyalitim.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-500">
          <p>© 2024 MRC Yalıtım ve Söve A.Ş. Geleceğin yapılarını bugünden yalıtıyoruz.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="#" className="hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
