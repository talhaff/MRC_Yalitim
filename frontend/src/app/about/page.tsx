import Image from 'next/image';
import { History, Target, Eye, ShieldCheck, Factory } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">Kurumsal Kimliğimiz</h1>
          <p className="text-brand-gold text-xl font-medium tracking-wide">Üretimin Gücü, Yalıtımın Uzmanlığı</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-brand-navy font-bold text-lg uppercase tracking-tighter">
                <div className="w-10 h-1 bg-brand-gold" />
                Fabrikamız Hakkında
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight font-display">
                20 Yıllık Tecrübe İle Geleceğin Yapılarını Yalıtıyoruz.
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  MRC Yalıtım ve Söve olarak, inşaat sektöründeki dış cephe estetiği ve enerji verimliliği ihtiyaçlarını tek bir çatı altında birleştiriyoruz. Modern üretim tesisimizde, en son teknoloji EPS kesim ve kaplama hatlarımızla sektörün öncü tedarikçilerinden biriyiz.
                </p>
                <p>
                  Üretim kapasitemizi her geçen gün artırırken, "Yerli Üretim, Küresel Standart" ilkemizden ödün vermeden, hem yurt içi hem de yurt dışı projelerde güvenilir çözüm ortağı olmaya devam ediyoruz.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="bg-slate-50 p-6 rounded-2xl border-b-4 border-brand-gold">
                  <p className="text-4xl font-bold text-brand-navy mb-1">5000+</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Tamamlanan Proje</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border-b-4 border-brand-gold">
                  <p className="text-4xl font-bold text-brand-navy mb-1">20+</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Yıllık Tecrübe</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="/images/about-factory.jpg" alt="MRC Üretim Bandı" width={800} height={1000} className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-white/5 rounded-[40px] border border-white/10 space-y-6">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center">
                <Eye size={32} className="text-brand-navy" />
              </div>
              <h3 className="text-3xl font-bold">Vizyonumuz</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Yalıtım teknolojilerinde inovasyonu merkeze alarak, estetik ve fonksiyonelliği birleştiren dünya standartlarında bir marka olmak. Sürdürülebilir şehirler ve enerji tasarrufu sağlayan yapılar için en çok tercih edilen üretici konumuna yükselmek.
              </p>
            </div>
            
            <div className="p-12 bg-white/5 rounded-[40px] border border-white/10 space-y-6">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center">
                <Target size={32} className="text-brand-navy" />
              </div>
              <h3 className="text-3xl font-bold">Misyonumuz</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                İnşaat sektörüne yüksek kaliteli, dayanıklı ve ekonomik yalıtım ürünleri sunarak yaşam kalitesini artırmak. Müşteri memnuniyetini üretimden sevkiyata kadar her aşamada en üst seviyede tutmak ve çevre dostu üretim pratiklerini benimsemek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 font-display">Kalite ve Sertifikalarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['ISO 9001', 'ISO 14001', 'TSE Belgesi', 'CE Sertifikası'].map((cert, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                  <ShieldCheck size={48} className="text-brand-navy" />
                </div>
                <p className="font-bold text-slate-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
