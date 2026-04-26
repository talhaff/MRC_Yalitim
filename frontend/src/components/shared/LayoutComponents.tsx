'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useQuoteStore } from '@/store/useQuoteStore';

// 1. NAVBAR COMPONENT
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const totalItems = useQuoteStore((state) => state.items.length);

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
    { name: 'Ürünler', href: '/products' },
    { name: 'Kurumsal', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  // Dynamic Styles
  const navBg = scrolled 
    ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' 
    : (isHomePage ? 'bg-transparent py-6' : 'bg-white border-b border-slate-100 py-4');

  const textColor = scrolled || !isHomePage ? 'text-brand-navy' : 'text-white';
  const linkColor = scrolled || !isHomePage 
    ? 'text-slate-600 hover:text-brand-navy' 
    : 'text-white/80 hover:text-white';

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          
          <div className={`font-display font-bold text-2xl tracking-tighter transition-colors ${textColor}`}>
            MRC <span className="text-brand-gold">YALITIM</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-bold text-xs uppercase tracking-[0.2em] transition-all hover:translate-y-[-1px] ${
                pathname === link.href ? 'text-brand-gold' : linkColor
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/quote"
            className="relative p-2.5 bg-brand-gold rounded-xl text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-md"
          >
            <ShoppingBag size={20} />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white font-bold animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
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
            key={link.href} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white hover:text-brand-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/quote" 
          onClick={() => setIsOpen(false)}
          className="bg-brand-gold text-brand-navy px-10 py-4 rounded-xl font-bold flex items-center gap-2"
        >
          Teklif Listem ({mounted ? totalItems : 0})
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
            <div className="font-display font-bold text-3xl tracking-tighter">
              MRC <span className="text-brand-gold font-light">YALITIM</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              Yüksek teknoloji üretim hatlarımızla, yapı sektörüne dayanıklı ve estetik çözümler sunuyoruz. Türkiye'nin yalıtım vizyonunu fabrikamızda şekillendiriyoruz.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <div key={social} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all cursor-pointer group">
                   <div className="w-1.5 h-1.5 bg-white group-hover:scale-150 transition-transform rounded-full" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">Hızlı Menü</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/products" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Üretim Kataloğu</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Fabrikamız</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">İletişim Kanalları</Link></li>
              <li><Link href="/quote" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Teklif Sistemi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">Kategoriler</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/products" className="hover:text-brand-gold transition-all">Dış Cephe Söveleri</Link></li>
              <li><Link href="/products" className="hover:text-brand-gold transition-all">EPS Yalıtım Levhaları</Link></li>
              <li><Link href="/products" className="hover:text-brand-gold transition-all">Kat Silmeleri</Link></li>
              <li><Link href="/products" className="hover:text-brand-gold transition-all">Dekoratif Paneller</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-brand-gold">İletişim</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <span className="text-sm leading-relaxed">Organize Sanayi Bölgesi, <br /> 4. Cadde, İstanbul</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <span className="text-sm">+90 212 555 00 00</span>
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
