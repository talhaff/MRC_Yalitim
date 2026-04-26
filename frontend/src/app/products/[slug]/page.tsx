import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SpecsTable, ThreeDViewer, ProductGallery } from '@/components/product/ProductComponents';
import { AddToQuoteButton } from '@/components/product/AddToQuoteButton';
import { 
  ShieldCheck, 
  Settings, 
  Truck, 
  ChevronRight,
  Info
} from 'lucide-react';

// Types
interface ProductPageProps {
  params: { slug: string };
}

// Mock fetching function
async function getProduct(slug: string) {
  // Simulating DB call
  return {
    id: '123',
    name: 'Fuga Kaplı Dış Cephe Sövesi',
    slug: 'fuga-kapli-dis-cephe-sovesi',
    sku: 'MRC-F10',
    description: 'Yüksek yoğunluklu EPS üzerine akrilik esaslı, elastik ve dayanıklı mineral kaplama ile üretilen dış cephe söve profili. Modern binaların estetik görünümünü tamamlarken mükemmel bir ısı yalıtımı sağlar.',
    technical_details: 'Fuga kaplı sövelerimiz, güneş ışınlarına (UV) ve mevsimsel sıcaklık farklarına karşı tam dirençlidir. Çatlama yapmayan özel mineral kaplamamız, boya tutuculuğu en yüksek seviyededir. Uygulama kolaylığı sayesinde işçilikten tasarruf sağlar.',
    category: { name: 'Dış Cephe Söveleri' },
    specs: [
      { key: 'Hammadde', value: 'Yüksek Yoğunluklu EPS', unit: '' },
      { key: 'Yoğunluk', value: '20-22', unit: 'kg/m³' },
      { key: 'Isı İletkenlik', value: '0.034', unit: 'W/mK' },
      { key: 'Yangın Sınıfı', value: 'E Sınıfı (B1)', unit: '' },
      { key: 'Kaplama Kalınlığı', value: '3-4', unit: 'mm' }
    ],
    images: [
      { url: '/images/products/sove-1.jpg', alt: 'Fuga Kaplı Söve' },
      { url: '/images/products/sove-2.jpg', alt: 'Söve Uygulama Detayı' }
    ],
    three_d_model_url: '/models/sove.glb'
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.slug);
  if (!product) return { title: 'Ürün Bulunamadı' };

  return {
    title: `${product.name} - MRC Yalıtım ve Söve`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0].url],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) notFound();

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <a href="/" className="hover:text-brand-navy transition-colors">Ana Sayfa</a>
          <ChevronRight size={14} />
          <a href="/products" className="hover:text-brand-navy transition-colors">Ürünler</a>
          <ChevronRight size={14} />
          <span className="text-brand-gold">{product.category.name}</span>
        </div>
      </nav>

      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Gallery & 3D (Col 7) */}
            <div className="lg:col-span-7 space-y-10">
              <ProductGallery images={product.images} />
              
              <div className="bg-slate-900 rounded-[40px] p-10 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <span className="w-2 h-2 bg-brand-gold rounded-full" />
                      3D Modeli İncele
                    </h3>
                    <p className="text-slate-400 text-sm">Ürünü her açıdan detaylı olarak görüntüleyin.</p>
                  </div>
                  <button className="bg-white text-brand-navy px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                    Görünümü Başlat
                  </button>
                </div>
                {/* Real ThreeDViewer would be hidden until clicked for performance */}
                <div className="mt-10 hidden group-active:block">
                   <ThreeDViewer modelUrl={product.three_d_model_url} />
                </div>
              </div>
            </div>

            {/* Right: Content & Action (Col 5) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-8 space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                  Kod: {product.sku}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight font-display">
                  {product.name}
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 text-center">
                  <ShieldCheck size={20} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase">Garantili</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 text-center">
                  <Settings size={20} className="text-blue-500" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase">TSE Onaylı</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 text-center">
                  <Truck size={20} className="text-brand-gold" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase">Hızlı Sevk</span>
                </div>
              </div>

              {/* Specs Highlights */}
              <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden mb-12 shadow-sm">
                <div className="bg-slate-900 px-8 py-4 flex justify-between items-center">
                  <h2 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                    <Info size={16} className="text-brand-gold" /> Teknik Parametreler
                  </h2>
                </div>
                <SpecsTable specs={product.specs} />
              </div>

              {/* RFQ CTA */}
              <div className="mt-auto">
                <AddToQuoteButton product={product} />
                <p className="mt-4 text-xs text-slate-400 text-center">
                  * Fiyatlandırma için lütfen teklif isteyiniz. Proje bazlı iskontolar uygulanmaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production & Detail Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <h2 className="text-3xl font-bold text-slate-900 font-display">Üretim ve Uygulama Detayları</h2>
          <div className="prose prose-slate lg:prose-xl mx-auto text-slate-500 font-light leading-relaxed">
            <p>{product.technical_details}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-[32px] shadow-sm">
              <h4 className="font-bold text-brand-navy mb-4">Uygulama Alanları</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Villa ve Apartman Dış Cepheleri</li>
                <li>• Isı Yalıtım (Mantolama) Projeleri</li>
                <li>• Dekoratif Pencere ve Kapı Söveleri</li>
                <li>• Restorasyon Çalışmaları</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-[32px] shadow-sm">
              <h4 className="font-bold text-brand-navy mb-4">Avantajlar</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Bina yükünü artırmaz (Hafif malzeme)</li>
                <li>• Yüksek enerji tasarrufu sağlar</li>
                <li>• Uzun ömürlü ve ekonomiktir</li>
                <li>• %100 çevre dostu ve geri dönüştürülebilir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
