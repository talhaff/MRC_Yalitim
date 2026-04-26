'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  Grid2X2, 
  List, 
  ChevronDown,
  ArrowUpRight,
  SlidersHorizontal
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Data
const ALL_PRODUCTS = [
  { id: '1', name: 'Fuga Kaplı Söve - F10', category: 'Söve', density: '20 kg/m³', image: '/images/products/sove-1.jpg', slug: 'fuga-kapli-sove-f10' },
  { id: '2', name: 'EPS Isı Yalıtım Levhası', category: 'Yalıtım', density: '16 kg/m³', image: '/images/products/eps-1.jpg', slug: 'eps-isi-yalitim-levhasi' },
  { id: '3', name: 'Dekoratif Köşe Taşı', category: 'Dekoratif', density: '22 kg/m³', image: '/images/products/kose-1.jpg', slug: 'dekoratif-kose-tasi' },
  { id: '4', name: 'Denizlik Profili - D5', category: 'Söve', density: '20 kg/m³', image: '/images/products/denizlik-1.jpg', slug: 'denizlik-profili-d5' },
  { id: '5', name: 'Karbonlu EPS Levha', category: 'Yalıtım', density: '30 kg/m³', image: '/images/products/carbon-1.jpg', slug: 'karbonlu-eps-levha' },
  { id: '6', name: 'Kat Silmesi - K12', category: 'Söve', density: '20 kg/m³', image: '/images/products/kat-1.jpg', slug: 'kat-silmesi-k12' },
];

const CATEGORIES = ['Tümü', 'Söve', 'Yalıtım', 'Dekoratif', 'Taçlar'];

export default function ProductsArchivePage() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'Tümü' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">
              <span>MRC Yalıtım</span>
              <ChevronDown size={14} className="-rotate-90" />
              <span className="text-white/60">Üretim Kataloğu</span>
            </nav>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
              Profesyonel Çözümler
            </h1>
            <p className="text-slate-400 text-lg">
              {ALL_PRODUCTS.length} farklı model ve ölçüde, yüksek standartlı üretim bandımızdan çıkan ürünlerimizi keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Ürün adı veya kod ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="flex items-center bg-slate-50 p-1 rounded-lg border border-slate-200">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn("p-2 rounded-md transition-all", viewMode === 'grid' ? "bg-white shadow-sm text-brand-navy" : "text-slate-400")}
              >
                <Grid2X2 size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={cn("p-2 rounded-md transition-all", viewMode === 'list' ? "bg-white shadow-sm text-brand-navy" : "text-slate-400")}
              >
                <List size={20} />
              </button>
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 font-bold text-sm text-slate-700 md:hidden"
            >
              <SlidersHorizontal size={18} /> Filtrele
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex gap-12">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-10">
            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Filter size={18} className="text-brand-gold" /> Ürün Kategorileri
              </h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                      activeCategory === cat 
                        ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20" 
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {cat}
                    <ChevronDown size={14} className={cn("-rotate-90 opacity-0 group-hover:opacity-100 transition-all", activeCategory === cat && "opacity-100")} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-brand-gold/5 rounded-2xl border border-brand-gold/10">
              <h4 className="font-bold text-brand-navy mb-2">Özel Üretim</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Katalog dışı ölçü ve modeller için teknik ekibimizle iletişime geçin.
              </p>
              <Link href="/contact" className="text-xs font-bold text-brand-navy underline underline-offset-4">Bize Ulaşın</Link>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className={cn(
              "grid gap-8",
              viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
            )}>
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={product.id}
                    className={cn(
                      "group bg-white rounded-[32px] border border-slate-100 overflow-hidden hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500",
                      viewMode === 'list' && "flex flex-col md:flex-row"
                    )}
                  >
                    {/* Image Area */}
                    <div className={cn(
                      "relative bg-slate-50 overflow-hidden",
                      viewMode === 'grid' ? "aspect-[4/3]" : "aspect-[4/3] md:w-64"
                    )}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-600 shadow-sm">
                        {product.category}
                      </div>
                    </div>

                    {/* Info Area */}
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors leading-tight">
                          {product.name}
                        </h3>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-gold group-hover:text-white transition-all">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between text-xs border-b border-slate-100 pb-2">
                          <span className="text-slate-400">Yoğunluk</span>
                          <span className="text-slate-900 font-bold">{product.density}</span>
                        </div>
                        <div className="flex justify-between text-xs border-b border-slate-100 pb-2">
                          <span className="text-slate-400">Üretim Standardı</span>
                          <span className="text-slate-900 font-bold">TSE / CE</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 flex gap-3">
                        <Link 
                          href={`/products/${product.slug}`}
                          className="flex-1 bg-slate-900 text-white text-center py-3 rounded-xl text-sm font-bold hover:bg-brand-navy transition-colors"
                        >
                          İncele
                        </Link>
                        <button className="px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                          <SlidersHorizontal size={16} className="text-slate-400" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-32 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                <button onClick={() => {setActiveCategory('Tümü'); setSearchQuery('')}} className="text-brand-gold font-bold mt-4 underline">Filtreleri Temizle</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
