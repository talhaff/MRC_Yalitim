import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  Factory, 
  Truck, 
  Award, 
  ChevronRight, 
  Building2, 
  Users2,
  Phone,
  PhoneCall,
  MapPin,
  Navigation,
  HelpCircle,
  Layers,
  Flame,
} from 'lucide-react';
import ProductMarquee from '@/components/home/ProductMarquee';
import HeroImageSlider from '@/components/home/HeroImageSlider';
import FaqAccordion from '@/components/home/FaqAccordion';

const faqItems = [
  {
    question: "Malatya'da EPS ısı yalıtım levhası ve söve imalatı nerede yapılır?",
    answer: "MRC Yalıtım Söve, Malatya 1. Organize Sanayi Bölgesi (1. OSB Mah. 5. Cd. No: 13/2 Yeşilyurt / Malatya) tesislerinde son teknoloji tam otomasyonlu CNC makineleriyle yüksek dansite EPS ısı yalıtım levhaları, dış cephe pencere söveleri, kat silmeleri ve dekoratif taç profilleri üretmektedir."
  },
  {
    question: "Dış cephe mantolamada hangi EPS yoğunluğu (dansite) tercih edilmelidir?",
    answer: "Binalarda maksimum ısı yalıtım performansı ve enerji tasarrufu için 16-30 kg/m³ aralığındaki yüksek yoğunluklu (dansiteli) karbonlu veya beyaz EPS yalıtım levhaları tercih edilmelidir. MRC Yalıtım Söve ürünleri, yüksek yoğunluklu polimer yapısıyla %50'ye varan enerji tasarrufu sağlar."
  },
  {
    question: "Söve profilleri dış hava şartlarına, kara ve yağmura dayanıklı mıdır?",
    answer: "Evet. MRC Yalıtım Söve ürünleri, elastik akrilik polimer ve mikronize kalsit harcıyla kaplanarak zırhlandırılır. Güneşin UV ışınlarına, dona, yağmura ve mekanik darbelere karşı çatlama yapmadan binalarınızın ömrü boyunca estetik ve yalıtım koruması sağlar."
  },
  {
    question: "Özel mimari projeler için özel ölçü ve CNC söve üretimi yapıyor musunuz?",
    answer: "Evet, villa, toplu konut, rezidans, otel ve kamu projeleri için mimari projelerinize özel CAD çizimlerine göre milimetrik CNC kesim kalıp ve özel ölçü söve imalatı gerçekleştirmekteyiz."
  },
  {
    question: "Malatya dışındaki çevre illere (Elazığ, Adıyaman, Kahramanmaraş vb.) sevkiyat var mı?",
    answer: "Evet. Malatya merkez fabrikamızdan Elazığ, Adıyaman, Kahramanmaraş, Bingöl, Sivas, Diyarbakır, Şanlıurfa, Gaziantep başta olmak üzere tüm Doğu, Güneydoğu ve Türkiye geneline güvenli ve hızlı sevkiyat sağlamaktayız."
  },
  {
    question: "Söve ve yalıtım levhası toptan/perakende fiyat teklifi nasıl alınır?",
    answer: "+90 532 258 52 44 numaralı fabrika ve satış hattımızı doğrudan arayabilir veya WhatsApp üzerinden projenizi göndererek dakikalar içinde en uygun toptan ve perakende fabrika satış fiyat teklifi alabilirsiniz."
  }
];

export default function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#050B15] overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 lg:py-0">
        {/* Background Overlay / Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-brand-gold/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-blue-900/25 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-15 bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-6 md:space-y-8">
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-transparent border border-brand-gold/30 text-brand-gold font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_2px_15px_rgba(212,175,55,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              MRC Yalıtım Söve Malatya
            </div>
            
            <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight font-display">
              MRC Yalıtım Söve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] animate-gradient">
                Malatya Söve & EPS Fabrikası
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              Malatya 1. OSB tesislerimizde yüksek yoğunluklu EPS ısı yalıtım levhaları, dış cephe mantolama sistemleri ve estetik pencere söve profilleriyle yapılarınıza değer katan çözümler üretiyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 md:gap-5 pt-2 md:pt-4">
              <a 
                href="https://wa.me/905322585244?text=Merhaba,%20yalıtım%20ve%20söve%20ürünleriniz%20için%20fiyat%20ve%20teklif%20almak%20istiyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-brand-gold via-[#dfb94d] to-brand-gold text-brand-navy px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 text-base md:text-lg overflow-hidden shadow-[0_10px_25px_rgba(212,175,55,0.25)] active:scale-[0.98]"
              >
                <span className="relative z-10">Hemen Teklif Alın</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <Link 
                href="/MRC_2026_Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-white font-bold hover:text-brand-gold transition-colors py-4 px-8 md:px-10 border border-white/15 hover:border-brand-gold/40 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm active:scale-[0.98]"
              >
                <Award size={22} className="text-brand-gold" strokeWidth={1.75} />Kataloğu İndir
              </Link>
            </div>

            {/* Direct Phone Assistance Strip */}
            <div className="pt-2">
              <a 
                href="tel:+905322585244" 
                className="inline-flex items-center gap-4 p-3 md:p-3.5 pr-6 md:pr-8 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-brand-gold/40 hover:border-brand-gold hover:bg-white/[0.12] transition-all group backdrop-blur-md shadow-lg active:scale-[0.98]"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-gold to-[#b89528] text-brand-navy flex items-center justify-center shadow-md shadow-brand-gold/20 group-hover:scale-110 transition-transform shrink-0">
                  <PhoneCall size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] md:text-xs font-bold text-brand-gold uppercase tracking-[0.18em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Doğrudan Fabrika & Satış Hattı
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-black text-white group-hover:text-brand-gold transition-colors tracking-wider mt-0.5">
                    +90 532 258 52 44
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Stats Badge */}
            <div className="flex lg:hidden justify-between items-center bg-gradient-to-r from-white/[0.07] to-white/[0.03] border border-white/10 rounded-2xl p-5 mt-6 backdrop-blur-md shadow-xl">
              <div className="text-center w-1/2 border-r border-white/10 pr-2">
                <p className="text-2xl font-black text-white tracking-tight">25K<span className="text-brand-gold text-lg">+</span></p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">m² Üretim/Ay</p>
              </div>
              <div className="text-center w-1/2 pl-2">
                <p className="text-2xl font-black text-brand-gold tracking-tight">20+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Yıllık Tecrübe</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Premium Sliding AI Hero Images */}
            <HeroImageSlider />
            {/* Stats Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-2xl z-40 flex gap-10 border border-slate-100">
              <div className="text-center border-r border-slate-100 pr-10">
                <p className="text-5xl font-black text-brand-navy">25K<span className="text-brand-gold text-2xl">+</span></p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">m² Üretim/Ay</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-brand-gold">20</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">Yıllık Tecrübe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SLIDING MARQUEE SECTION */}
      <ProductMarquee />

      {/* 3. SHOWCASE SECTION */}
      <section className="py-16 lg:py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4 flex flex-col items-center">
            <p className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">Katalog & Ürün Çözümleri</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">Tüm Dış Cephe & Yalıtım Gruplarımız</h2>
            <p className="text-slate-300 text-sm md:text-base max-w-xl">
              Yüksek dansite EPS ısı yalıtım levhaları, mimari pencere söveleri ve dekoratif cephe kaplamalarında fabrika kalitesi.
            </p>
            <Link 
              href="/MRC_2026_Katalog.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-brand-gold/10 transition-all font-bold text-lg group shadow-xl"
            >
              <Award className="text-brand-gold group-hover:rotate-12 transition-transform" size={24} />
              Ürün Kataloğunu İndir (PDF)
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'Dış Cephe Söveleri', desc: 'Dekoratif, akrilik zırh kaplamalı ve ısı yalıtımlı pencere söve profilleri.', img: '/images/cat-sove.webp' },
              { name: 'EPS Yalıtım Levhaları', desc: 'Yüksek yoğunluklu beyaz ve karbonlu EPS ile maksimum enerji tasarrufu.', img: '/images/cat-eps.webp' },
              { name: 'Dekoratif Kaplamalar', desc: 'Fugalı mantolama panelleri, ahşap ve doğal taş görünümlü cephe sistemleri.', img: '/images/cat-deco.webp' },
            ].map((cat, idx) => (
              <div 
                key={idx}
                className="transform transition-transform duration-300 hover:-translate-y-2"
              >
                <a 
                  href={`https://wa.me/905322585244?text=${encodeURIComponent(`Merhaba, ${cat.name} hakkında detaylı bilgi ve fabrika fiyat teklifi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/5] rounded-[48px] overflow-hidden block shadow-2xl"
                >
                  <Image 
                    src={cat.img} 
                    alt={`Malatya ${cat.name} - MRC Yalıtım Söve Üretimi`} 
                    fill 
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">{cat.name}</h3>
                    <p className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">{cat.desc}</p>
                    <div className="mt-4 sm:mt-6 flex items-center gap-2 text-brand-gold font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Fiyat Teklifi Al <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION STRENGTH & ENGINEERING */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-1 space-y-6 sm:space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display leading-tight">
                Modern Üretim, <br className="hidden md:block" /> Kusursuz Mühendislik.
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                Malatya 1. OSB&apos;deki tam otomasyonlu sistemlerimiz, her söve profili ve yalıtım levhasının milimetrik hassasiyetle ve standart yüksek kalitede çıkmasını sağlar.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-gold font-bold group">
                Fabrikamızı Tanıyın <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-5 sm:gap-8">
              {[
                { icon: <ShieldCheck size={28} />, title: 'Sertifikalı Kalite', desc: 'Tüm ürünlerimiz TSE, CE ve ISO standartlarında, zorlu laboratuvar testlerinden geçerek üretilir.' },
                { icon: <Factory size={28} />, title: 'Yüksek Kapasite', desc: 'Aylık 25.000 m² üretim kapasitemizle, Doğu ve Güneydoğu Anadolu&apos;nun en büyük projelerinin zamanında tedarikçisiyiz.' },
                { icon: <Users2 size={28} />, title: 'Teknik Danışmanlık', desc: 'Sadece üretim değil, projelendirme ve uygulama aşamasında da uzman mühendislik desteği sunuyoruz.' },
                { icon: <Building2 size={28} />, title: 'Geniş Ürün Gamı', desc: 'Pencere söveleri, kat silmeleri, taç, köşe taşları ve yalıtım levhalarında 150+ farklı model seçeneği.' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-[32px] bg-slate-50 border border-slate-100 hover:border-brand-gold/40 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-brand-gold flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOPICAL AUTHORITY & SEO CONTENT STRIP (Bölgesel Liderlik) */}
      <section className="py-14 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0 shadow-md">
                <Layers size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-brand-navy">Malatya Söve & EPS İmalatı</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  1. OSB fabrikamızda CNC kesim pencere söveleri, taç, fuga ve kat silmesi profillerinde doğrudan toptan satış.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0 shadow-md">
                <Flame size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-brand-navy">EPS & Mantolama Çözümleri</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  26-30 kg/m³ yüksek dansite karbonlu ve beyaz EPS yalıtım levhaları ile binalarda %50 enerji tasarrufu.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0 shadow-md">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-brand-navy">Bölgesel Hızlı Sevkiyat</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Malatya, Elazığ, Adıyaman, Kahramanmaraş, Bingöl ve tüm Doğu Anadolu&apos;ya güvenli şantiye teslimatı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (SIKÇA SORULAN SORULAR) ACCORDION SECTION - GOOGLE RICH RESULTS #1 */}
      <section className="py-16 lg:py-24 bg-[#050B15] text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="text-center mb-12 md:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-bold text-xs uppercase tracking-widest">
              <HelpCircle size={14} />
              Merak Edilenler & Rehber
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Sorular</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              Malatya söve, EPS ısı yalıtım levhası ve dış cephe mantolama ürünlerimiz hakkında en çok merak edilen konular.
            </p>
          </div>

          <FaqAccordion items={faqItems} />

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-brand-gold/15 to-transparent border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-white font-bold text-base">Farklı bir sorunuz veya projeniz mi var?</h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">Teknik mühendislik ekibimiz sorularınızı yanıtlamaktan memnuniyet duyar.</p>
            </div>
            <a 
              href="tel:+905322585244"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gold text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 shadow-md"
            >
              <PhoneCall size={16} /> Hemen Danışın
            </a>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-12 md:py-16 bg-brand-gold">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 text-center lg:text-left">
          <div className="text-brand-navy space-y-3">
            <h2 className="text-3xl lg:text-4xl font-black font-display">Projeniz İçin Fabrikadan Fiyat Teklifi Alın</h2>
            <p className="text-brand-navy/80 text-base md:text-lg">Özel ölçü, toptan alımlar ve mühendislik çözümleri için uzman ekibimiz sizi bekliyor.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a 
              href="https://wa.me/905322585244?text=Merhaba,%20projemiz%20için%20fiyat%20ve%20teklif%20almak%20istiyoruz." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl shadow-brand-navy/20 w-full sm:w-auto text-center"
            >
              Hemen Teklif İste
            </a>
            <a 
              href="tel:+905322585244" 
              className="flex items-center justify-center gap-2.5 bg-brand-navy/10 hover:bg-brand-navy text-brand-navy hover:text-white px-7 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:scale-105 transition-all w-full sm:w-auto text-center border border-brand-navy/20"
            >
              <PhoneCall size={20} />
              <span>+90 532 258 52 44</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. FACTORY LOCATION & GOOGLE MAPS */}
      <section className="py-16 md:py-20 bg-[#050B15] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
                <MapPin size={14} className="animate-bounce" />
                Fabrika & Merkez Ofis
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
                MRC YALITIM SÖVE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">
                  Üretim Tesisimiz
                </span>
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                Malatya 1. Organize Sanayi Bölgesi&apos;ndeki modern fabrikamıza gelerek ürünlerimizi yerinde inceleyebilir, projeniz için teknik ekibimizle birebir görüşebilirsiniz.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 space-y-3 backdrop-blur-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin size={20} className="text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Açık Adres:</strong>
                    <p className="text-xs sm:text-sm text-slate-300">1.OSB Mah, 5. Cd. No: 13/2, 44900 Yeşilyurt / Malatya</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300 pt-2 border-t border-white/10">
                  <Phone size={18} className="text-brand-gold shrink-0" />
                  <a href="tel:+905322585244" className="text-xs sm:text-sm text-white font-bold hover:text-brand-gold transition-colors">
                    +90 532 258 52 44
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a 
                  href="https://maps.google.com/?q=38.334732,38.193420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-gold text-brand-navy font-bold text-sm hover:bg-white transition-all shadow-lg active:scale-95 text-center"
                >
                  <Navigation size={18} />
                  Google Haritalarda Aç
                </a>
                <a 
                  href="tel:+905322585244"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 border border-brand-gold/40 text-brand-gold hover:bg-white/20 font-bold text-sm transition-all active:scale-95 text-center"
                >
                  <PhoneCall size={18} />
                  Hemen Ara
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-7 h-[290px] sm:h-[360px] md:h-[420px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/15 shadow-2xl relative bg-slate-900">
              <iframe 
                title="MRC YALITIM SÖVE Malatya Fabrika Harita Konumu"
                src="https://maps.google.com/maps?q=38.334732,38.193420&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 absolute inset-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
