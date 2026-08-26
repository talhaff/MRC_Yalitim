'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  Maximize2, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  FileDown,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Layers
} from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  code: string;
  image: string;
  description: string;
  specs: string[];
}

const allProducts: ProductItem[] = [
  // Söveler
  {
    id: 'sove-01',
    name: '3 Kanallı Pencere Sövesi',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV101',
    image: '/kayanresimler/sove1.png',
    description: 'Pencere ve kapı kenarlarında modern ve kademeli mimari hatlar sunan yalıtımlı söve profili.',
    specs: ['26-30 kg/m³ EPS', 'Akrilik Polimer Kaplama', 'UV & Dış Hava Dayanımı']
  },
  {
    id: 'sove-02',
    name: 'Kavisli Mimari Söve',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV102',
    image: '/kayanresimler/sove2.png',
    description: 'Yumuşak kavis geçişleriyle klasik ve neoklasik binalara zarafet katan dış cephe profili.',
    specs: ['Estetik Kavis Formu', 'B1 Alev Yürütmez', 'Pürüzsüz Yüzey']
  },
  {
    id: 'sove-03',
    name: 'Modern Düz Söve Profili',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV103',
    image: '/kayanresimler/sove3.png',
    description: 'Minimalist ve çağdaş cephe tasarımları için net keskin kenarlı düz söve profili.',
    specs: ['Minimalist Çizgi', 'Net Geometrik Hatlar', 'Esnek Montaj']
  },
  {
    id: 'sove-04',
    name: 'Çift Kademeli Söve',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV104',
    image: '/kayanresimler/sove4.png',
    description: 'Derinlik hissi veren iki kademeli kabartma yüzeyiyle dikkat çeken söve modeli.',
    specs: ['3 Boyutlu Derinlik', 'Akrilik Elyaflı Kaplama', 'Çatlama Yapmaz']
  },
  {
    id: 'sove-05',
    name: 'Geniş Yanaklı Pencere Sövesi',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV105',
    image: '/kayanresimler/sove5.png',
    description: 'Geniş cepheli pencerelerde güçlü çerçeveleme etkisi yaratan kalın gövdeli söve.',
    specs: ['Geniş Profil Ebatı', 'Yüksek Mukavemet', 'Güneş Işınlarına Dayanıklı']
  },
  {
    id: 'sove-06',
    name: 'İnce Hatlı Söve Profili',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV106',
    image: '/kayanresimler/sove6.png',
    description: 'Dar pencereler ve minimal cephe çizgileri için ideal ince kesitli söve modeli.',
    specs: ['Dar Alan Uyumu', 'Hafif Ağırlık', 'Kusursuz Köşe Birleşimi']
  },
  {
    id: 'sove-07',
    name: 'Geniş Gövdeli Söve',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV107',
    image: '/kayanresimler/sove7.png',
    description: 'Geniş açıklıklı cephe camlarında tok ve zengin bir çerçeve görüntüsü sunar.',
    specs: ['Tok & Sağlam Yapı', 'Su İtici Harç Kaplaması', 'Isı Yalıtımına Destek']
  },
  {
    id: 'sove-08',
    name: 'Lüks Mimari Profil',
    category: 'Söve Profilleri',
    categorySlug: 'sove',
    code: 'MRC-SV108',
    image: '/kayanresimler/sove8.png',
    description: 'Özel villa, konut ve otel projelerinde kullanılan üst segment söve profili.',
    specs: ['Özel Proje Serisi', 'Ekstra Yüksek Yoğunluk', 'Kusursuz Detay']
  },

  // Taç ve Motifler
  {
    id: 'tac-01',
    name: 'Klasik Saray Tacı',
    category: 'Dekoratif Taç & Motif',
    categorySlug: 'tac',
    code: 'MRC-TC201',
    image: '/kayanresimler/dekoratif.png',
    description: 'Pencere üstü ve kapı girişlerinde estetik saray mimarisi sunan el işçiliği motifli taç.',
    specs: ['Yüksek Kabartma Rölyef', 'Elastik Akrilik Astar', 'Hafif & Kolay Montaj']
  },
  {
    id: 'tac-02',
    name: 'Osmanlı Taç Motifi',
    category: 'Dekoratif Taç & Motif',
    categorySlug: 'tac',
    code: 'MRC-TC202',
    image: '/kayanresimler/tasdesen.png',
    description: 'Geleneksel motiflerin modern CNC teknolojisiyle buluştuğu dekoratif cephe tacı.',
    specs: ['Geleneksel Çiçek Motifi', 'CNC Hassas Kesim', 'Her Renge Boyanabilir']
  },
  {
    id: 'tac-03',
    name: 'Barok Kabartma Taç',
    category: 'Dekoratif Taç & Motif',
    categorySlug: 'tac',
    code: 'MRC-TC203',
    image: '/kayanresimler/tasdesen2.png',
    description: 'Barok dönem mimarisinden esinlenilmiş, zengin detaylı pencere üstü taç süslemesi.',
    specs: ['İnce Heykelimsi Detay', 'Hava Koşullarına Dirençli', 'Hızlı Vidalama/Yapıştırma']
  },
  {
    id: 'tac-04',
    name: 'Saray Tipi Taç Deseni',
    category: 'Dekoratif Taç & Motif',
    categorySlug: 'tac',
    code: 'MRC-TC204',
    image: '/kayanresimler/tasdesen3.png',
    description: 'Bina ana girişleri ve ana pencerelerde prestij katan saray tipi taç modeli.',
    specs: ['Görkemli Merkez Deseni', 'Akrilik Zırh Kaplama', 'Solmaz Yüzey']
  },
  {
    id: 'ahsap-01',
    name: 'Ahşap Desenli Söve',
    category: 'Özel Yüzeyler',
    categorySlug: 'cephe',
    code: 'MRC-AH301',
    image: '/kayanresimler/ahsapsove.png',
    description: 'Doğal ahşap dokusu ve damar efektli, boyanabilir dış cephe yalıtım profili.',
    specs: ['Doğal Ağaç Damar Dokusu', 'Bakım Gerektirmez', 'Su ve Neme Tam Dayanım']
  },

  // Köşe Elemanları ve Taşları
  {
    id: 'kose-01',
    name: 'L-Köşe Yalıtım Elemanı',
    category: 'Köşe Profilleri',
    categorySlug: 'kose',
    code: 'MRC-KS401',
    image: '/kayanresimler/koseelemanı.png',
    description: 'Bina köşelerinde ısı köprüsü oluşumunu engelleyen ve simetrik görünüm sağlayan eleman.',
    specs: ['90° Milimetrik Açı', 'Isı Köprüsü Önleyici', 'Darbe Dayanımlı']
  },
  {
    id: 'kose-02',
    name: 'Çift Kanallı L-Köşe',
    category: 'Köşe Profilleri',
    categorySlug: 'kose',
    code: 'MRC-KS402',
    image: '/kayanresimler/koseelemanı2.png',
    description: 'Çift kademeli kanal detayı ile modern binaların köşe birleşimlerine şıklık katar.',
    specs: ['Çift Kanal Deseni', 'Köşe Çarpma Koruması', 'Pratik Geçme Kanallı']
  },
  {
    id: 'kose-03',
    name: 'Kademeli Köşe Çözümü',
    category: 'Köşe Profilleri',
    categorySlug: 'kose',
    code: 'MRC-KS403',
    image: '/kayanresimler/koseelemanı3.png',
    description: 'Üç kademeli köşe profiliyle binalara anıtsal ve güçlü bir siluet kazandırır.',
    specs: ['3 Kademeli Geometri', 'Milimetrik CNC Üretim', 'Tam Açı Oturumu']
  },
  {
    id: 'ktas-01',
    name: 'Pahlı Köşe Taşı',
    category: 'Köşe Taşları',
    categorySlug: 'kose',
    code: 'MRC-KT601',
    image: '/kayanresimler/kosetasi.png',
    description: 'Bina köşe hatlarında masif taş görünümü ve ekstra darbe direnci sağlayan dekoratif taş.',
    specs: ['Pahlı Kenar Detayı', 'Taş Doku Görünümü', 'Kolay Harçlı Montaj']
  },
  {
    id: 'ktas-02',
    name: 'Rustik Doğal Köşe Taşı',
    category: 'Köşe Taşları',
    categorySlug: 'kose',
    code: 'MRC-KT602',
    image: '/kayanresimler/kosetasi2.png',
    description: 'Tarihi ve rustik konseptli binalar için eskitme taş görünümlü dekoratif köşe elemanı.',
    specs: ['Rustik Yontma Efekti', 'Yüksek Darbe Direnci', 'Kolay Boyanabilirlik']
  },

  // Dış Cephe & Yalıtım Panelleri
  {
    id: 'cephe-01',
    name: 'Fugalı Dış Cephe Paneli',
    category: 'Dış Cephe Panelleri',
    categorySlug: 'cephe',
    code: 'MRC-CP501',
    image: '/kayanresimler/cephe1.png',
    description: 'Modern çizgili fugalı yüzeyiyle binalara modern ve dinamik mimari katan mantolama paneli.',
    specs: ['Entegre Fugalı Sistem', 'Yüksek Isı Yalıtımı (0.038 W/mK)', 'Hızlı Uygulama']
  },
  {
    id: 'cephe-02',
    name: 'Taş Desenli Yalıtım Paneli',
    category: 'Dış Cephe Panelleri',
    categorySlug: 'cephe',
    code: 'MRC-CP502',
    image: '/kayanresimler/cephe2.png',
    description: 'Doğal taş görünümlü, hem ısı hem de ses yalıtımı sağlayan hazır dış cephe plakası.',
    specs: ['3D Doğal Taş Dokusu', 'Isı & Ses İzolasyonu', 'Boya Tutuculuk']
  },
  {
    id: 'cephe-03',
    name: 'Ahşap Görünümlü Panel',
    category: 'Dış Cephe Panelleri',
    categorySlug: 'cephe',
    code: 'MRC-CP503',
    image: '/kayanresimler/cephe3.png',
    description: 'Doğal ahşap sıcaklığını EPS yalıtım avantajıyla buluşturan mantolama paneli.',
    specs: ['Ahşap Lamba Zıvana Efekti', 'Çürümez ve Kurtlanmaz', 'A1/B1 Yangın Uyumu']
  },
  {
    id: 'tasyunu-01',
    name: 'Taşyünü Yangın Sövesi',
    category: 'A1 Yanmaz Yalıtım',
    categorySlug: 'cephe',
    code: 'MRC-TY901',
    image: '/kayanresimler/tasyunusove.png',
    description: 'A1 sınıfı yanmaz taşyünü çekirdekli, yüksek güvenlikli dış cephe mimari söve profili.',
    specs: ['A1 Yanmaz Sınıfı', '150 kg/m³ Taşyünü', 'Maksimum Yangın Güvenliği']
  },

  // Sütun, Kat Silmesi ve Denizlikler
  {
    id: 'sutun-01',
    name: 'Klasik Mimari Sütun',
    category: 'Sütun & Başlık',
    categorySlug: 'sutun',
    code: 'MRC-ST701',
    image: '/kayanresimler/sutun.png',
    description: 'Giriş portalleri, balkon ve teras desteklerinde görkemli sütun kaplama sistemi.',
    specs: ['Silindirik / Yivli Gövde', 'Yüksek Taşıma Görünümü', 'Hafif EPS Çekirdek']
  },
  {
    id: 'sutun-02',
    name: 'Korint Sütun Başlığı',
    category: 'Sütun & Başlık',
    categorySlug: 'sutun',
    code: 'MRC-ST702',
    image: '/kayanresimler/sutun2.png',
    description: 'Geleneksel yaprak ve motif oymalı Korint tarzı sütun başlığı mimari elemanı.',
    specs: ['Oymalı Başlık Deseni', 'Geniş Yük Dağılımı Efekti', 'Akrilik Koruyucu Katman']
  },
  {
    id: 'silme-01',
    name: 'Dekoratif Kat Silmesi',
    category: 'Kat Silmeleri',
    categorySlug: 'sutun',
    code: 'MRC-SL801',
    image: '/kayanresimler/dekoratif2.png',
    description: 'Kat aralarında su tahliyesini yönlendiren ve cepheyi estetik olarak bölen silme profili.',
    specs: ['Damlalıklı Alt Kenar', 'Yağmur Suyu Yönlendirme', 'Hafif Yapı']
  },
  {
    id: 'bordur-01',
    name: 'İnce Bordür & Çıta Profili',
    category: 'Bordürler & Çıtalar',
    categorySlug: 'sutun',
    code: 'MRC-BD802',
    image: '/kayanresimler/dekoratif3.png',
    description: 'İç ve dış cephelerde duvar panelleri, ayna ve çerçeveleme için ince zarif bordür.',
    specs: ['Hassas İnce Kesit', 'Kolay Büküm/Açı', 'Pürüzsüz Zemin']
  },
  {
    id: 'denizlik-01',
    name: 'Dekoratif Denizlik Profili',
    category: 'Denizlik & Silme',
    categorySlug: 'sutun',
    code: 'MRC-DN803',
    image: '/kayanresimler/dekoratif4.png',
    description: 'Pencere altlarında su tahliyesi sağlayan ve cepheye derinlik katan denizlik profili.',
    specs: ['Entegre Damlalık Kanalı', 'Su İtici Harç', 'Uzun Ömürlü']
  }
];

const categories = [
  { name: 'Tümü', count: 27, slug: 'all' },
  { name: 'Söveler', count: 8, slug: 'sove' },
  { name: 'Dış Cephe', count: 4, slug: 'cephe' },
  { name: 'Taç & Motif', count: 4, slug: 'tac' },
  { name: 'Köşe Taşları', count: 5, slug: 'kose' },
  { name: 'Sütun & Silme', count: 6, slug: 'sutun' }
];

export default function ProductMarquee() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const trackRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Filtered products for active tab
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.categorySlug === activeCategory);

  // Duplicate for smooth infinite loop (optimized 2x)
  const displayList = [...filteredProducts, ...filteredProducts];

  // Manual step scroll handlers
  const handleScrollManual = (direction: 'left' | 'right') => {
    const offset = direction === 'left' ? -360 : 360;
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (slug: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(slug);
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#060D1A] overflow-hidden border-y border-white/10 select-none">
      {/* Ambient Lighting & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-gold/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-8 sm:mb-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] backdrop-blur-md">
              <Sparkles size={13} className="text-brand-gold" />
              150+ Zengin Model Seçeneği
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Öne Çıkan Ürünlerimiz & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
                Mimari Profil Modelleri
              </span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Yüksek yoğunluklu EPS ve akrilik zırh kaplama ile milimetrik CNC teknolojisinde üretilen dış cephe modellerimiz.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/MRC_2026_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white/[0.06] hover:bg-brand-gold hover:text-brand-navy border border-white/15 hover:border-brand-gold text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg group backdrop-blur-sm active:scale-[0.98]"
            >
              <FileDown size={17} className="text-brand-gold group-hover:text-brand-navy transition-colors shrink-0" />
              <span>Tüm Kataloğu İndir (PDF)</span>
            </Link>
          </div>
        </div>

        {/* Category Tabs & Interactive Control Toolbar */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 border-t border-white/10">
          
          {/* Categories with Horizontal Scroll & Indicator */}
          <div className="relative w-full lg:max-w-3xl overflow-hidden py-1">
            <div 
              ref={tabsContainerRef}
              className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth px-1"
            >
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={(e) => handleCategorySelect(cat.slug, e)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 active:scale-95 ${
                    activeCategory === cat.slug
                      ? 'bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/25 font-black scale-[1.02]'
                      : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/[0.1] border border-white/10'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    activeCategory === cat.slug
                      ? 'bg-brand-navy/20 text-brand-navy font-black'
                      : 'bg-white/10 text-brand-gold'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Player Controls: Play/Pause, Prev, Next */}
          <div className="flex items-center justify-between sm:justify-end gap-3 self-end lg:self-auto w-full lg:w-auto">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer ${
                isPlaying 
                  ? 'bg-white/[0.06] text-brand-gold border-brand-gold/30 hover:bg-brand-gold/15'
                  : 'bg-brand-gold text-brand-navy border-brand-gold shadow-lg shadow-brand-gold/25 animate-pulse'
              }`}
              title={isPlaying ? 'Akışı Duraklat' : 'Akışı Başlat'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
              <span>{isPlaying ? 'Otomatik Akış: Açık' : 'Akışı Başlat'}</span>
            </button>

            {/* Manual Navigation Buttons */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => handleScrollManual('left')}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-gold hover:text-brand-navy text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                aria-label="Sola Kaydır"
                title="Sola Kaydır"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScrollManual('right')}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-gold hover:text-brand-navy text-white flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                aria-label="Sağa Kaydır"
                title="Sağa Kaydır"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Single Row Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-36 lg:w-48 bg-gradient-to-r from-[#060D1A] via-[#060D1A]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-36 lg:w-48 bg-gradient-to-l from-[#060D1A] via-[#060D1A]/80 to-transparent z-20" />

        {/* Single Row Track */}
        <div 
          ref={trackRef}
          className="overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className={`${isPlaying ? 'animate-marquee-left' : 'marquee-paused'} flex gap-4 sm:gap-6 px-3 sm:px-6`}>
            {displayList.map((product, idx) => (
              <ProductCard 
                key={`single-${product.id}-${idx}`} 
                product={product} 
                onSelect={() => setSelectedProduct(product)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 text-left">
          {[
            { title: 'Milimetrik CNC Kesim', desc: 'Sıfır hata ve kusursuz birleşim' },
            { title: '26-30 kg/m³ EPS Yoğunluk', desc: 'Üstün mukavemet ve yalıtım' },
            { title: 'Elastik Akrilik Zırh', desc: 'Dört mevsime dayanıklı kaplama' },
            { title: 'Özel Proje & Ölçü Üretimi', desc: 'İsteğe göre özel kalıp ve modeller' },
          ].map((feat, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-gold shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <div>
                <p className="text-white font-bold text-xs sm:text-sm">{feat.title}</p>
                <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProductCard({ product, onSelect }: { product: ProductItem; onSelect: () => void }) {
  return (
    <div 
      onClick={onSelect}
      className="group relative w-[230px] sm:w-[280px] md:w-[320px] shrink-0 bg-gradient-to-b from-white/[0.09] via-white/[0.05] to-white/[0.02] hover:from-white/[0.15] hover:to-white/[0.05] border border-white/10 hover:border-brand-gold/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)] hover:-translate-y-1 sm:hover:-translate-y-1.5 active:scale-[0.98] flex flex-col justify-between"
    >
      {/* Top Header inside Card */}
      <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/40 truncate max-w-[140px] sm:max-w-none">
          {product.category}
        </span>
        <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-300 shrink-0">
          {product.code}
        </span>
      </div>

      {/* Image Stage Container - Pure White Canvas */}
      <div className="relative w-full h-36 sm:h-44 md:h-48 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center p-3 sm:p-4 overflow-hidden shadow-inner border border-white/10 group-hover:border-brand-gold/50 transition-colors">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={product.image}
            alt={`Malatya ${product.name} (${product.category}) - MRC Söve Yalıtım`}
            width={280}
            height={160}
            loading="lazy"
            sizes="(max-width: 640px) 230px, (max-width: 768px) 280px, 320px"
            className="max-h-full w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Quick View Icon */}
        <div className="absolute bottom-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-navy/90 text-brand-gold border border-brand-gold/40 flex items-center justify-center opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
          <Maximize2 size={14} className="sm:hidden" />
          <Maximize2 size={16} className="hidden sm:block" />
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-sm sm:text-base font-black text-white group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug min-h-[2.4rem] sm:min-h-[2.8rem]">
            {product.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1 mt-1 font-light">
            {product.description}
          </p>
        </div>

        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-brand-gold font-bold">
          <span>İncele & Teklif Al</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose }: { product: ProductItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0B1526] border border-brand-gold/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 active:scale-95"
          aria-label="Kapat"
        >
          <X size={18} />
        </button>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-center pt-2 sm:pt-0">
          {/* Image Stage - Pure White Canvas */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-xl sm:rounded-2xl bg-white flex items-center justify-center p-4 sm:p-6 shadow-inner border border-white/20">
            <Image
              src={product.image}
              alt={`Malatya ${product.name} - ${product.category} İmalatı MRC Söve`}
              width={350}
              height={350}
              loading="lazy"
              sizes="(max-width: 640px) 280px, 350px"
              className="max-h-full w-auto object-contain drop-shadow-md"
            />
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-gold text-brand-navy font-black text-[9px] sm:text-[10px] tracking-wider uppercase shadow">
              {product.code}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest">
                {product.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-snug">
                {product.name}
              </h3>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-1.5 sm:space-y-2 py-1 sm:py-2">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Teknik Avantajlar</p>
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a
                href={`https://wa.me/905322585244?text=${encodeURIComponent(`Merhaba, "${product.name}" (${product.category}) ürünü için fiyat ve teklif almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-brand-gold to-[#dfb94d] text-brand-navy font-bold py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl text-center text-xs sm:text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/20 active:scale-[0.98]"
              >
                <PhoneCall size={15} />
                Fiyat & Teklif İste
              </a>
              <Link
                href="/MRC_2026_Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl text-center text-xs sm:text-sm border border-white/15 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Award size={15} className="text-brand-gold" />
                Katalog
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
