import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, FileText, CheckCircle2, ChevronRight, Mail, Phone, MapPin, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni ve Çerez Politikası',
  description: 'MRC Yalıtım Söve 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca hazırlanan Aydınlatma Metni, Gizlilik ve Çerez Politikası detayları.',
  alternates: {
    canonical: 'https://mrcyalitimsove.com/kvkk',
  },
  openGraph: {
    title: 'KVKK Aydınlatma Metni ve Çerez Politikası | MRC Yalıtım Söve',
    description: 'MRC Yalıtım Söve veri güvenliği politikası ve yasal aydınlatma metni.',
    url: 'https://mrcyalitimsove.com/kvkk',
  },
};

export default function KVKKPage() {
  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#050B15] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-wider mb-4">
            <Shield size={16} />
            <span>Yasal Bilgilendirme & Güvenlik</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-outfit text-white">
            KVKK Aydınlatma Metni ve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">
              Çerez (Cookie) Politikası
            </span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            MRC Yalıtım Söve olarak kişisel verilerinizin güvenliğine ve gizliliğine azami önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla haklarınızı korumakla yükümlüyüz.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm border border-slate-200/80 space-y-12">
          
          {/* 1. Veri Sorumlusu */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Veri Sorumlusunun Kimliği</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              6698 sayılı Kanun uyarınca kişisel verileriniz; veri sorumlusu olarak <strong>MRC Yalıtım Söve</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
            <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 text-sm text-slate-700 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span><strong>Fabrika & Merkez Adres:</strong> 1. Organize Sanayi Bölgesi, 5. Cadde No: 13/2 Yeşilyurt / MALATYA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span><strong>Telefon:</strong> +90 532 258 52 44</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span><strong>E-Posta:</strong> mrcyalitim@gmail.com</span>
              </div>
            </div>
          </section>

          {/* 2. Verilerin İşlenme Amacı */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Kişisel Verilerin İşlenme Amaçları</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Toplanan kişisel verileriniz (ad, soyad, telefon numarası, e-posta adresi, teklif ve mesaj içerikleriniz), Kanun&apos;un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde şu amaçlarla işlenmektedir:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                'EPS ısı yalıtım levhası ve söve ürün taleplerine fiyat teklifi sunulması',
                'İletişim formları veya WhatsApp hattı üzerinden gelen soruların yanıtlanması',
                'Ürün katalogları ve teknik şartnamelerin iletilmesi',
                'Sözleşme ve faturalandırma süreçlerinin yürütülmesi',
                'Web sitesinin bilgi güvenliğinin ve teknik sürekliliğinin temini',
                'Yetkili kamu kurum ve kuruluşlarına yasal bildirimlerin yapılması'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Çerez Politikası */}
          <section id="cerez-politikasi" className="space-y-4 pt-4 border-t border-slate-100 scroll-mt-28">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
                3
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Çerez (Cookie) Politikası</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Web sitemizi (<strong>mrcyalitimsove.com</strong>) ziyaret ettiğinizde, tarayıcınız aracılığıyla cihazınıza küçük metin dosyaları (&quot;Çerezler&quot;) kaydedilebilir. Sitemizde kullanılan çerez kategorileri şunlardır:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Lock size={18} className="text-brand-gold" />
                  1. Zorunlu ve Güvenlik Çerezleri
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Web sitesinin temel işlevlerini yerine getirmesi (sayfa geçişleri, form güvenliği, bot koruması) için teknik olarak gereklidir. Bu çerezler devre dışı bırakılamaz.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Eye size={18} className="text-brand-gold" />
                  2. Analitik ve Performans Çerezleri (Google Analytics 4)
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Ziyaretçilerimizin sitemizi nasıl kullandığını anlamak, sayfa açılış hızlarını ölçmek ve popüler içerikleri analiz etmek için anonim olarak Google Analytics 4 (Ölçüm Kimliği: <code>G-3QN5483JR8</code>) kullanmaktayız.
                </p>
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2.5 mt-2.5 font-medium">
                  🔒 <strong>KVKK Güvencesi:</strong> Sayfamızdaki Çerez Onay kutucuğunda &quot;Tümünü Kabul Et&quot; demediğiniz sürece Google Analytics script&apos;leri kesinlikle yüklenmez ve hiçbir analiz verisi toplanmaz.
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-600 pt-2">
              <p>
                Çerez tercihlerinizi dilediğiniz zaman tarayıcınızın ayarlarından değiştirebilir veya tarayıcı geçmişinizi temizleyerek çerezleri silebilirsiniz.
              </p>
            </div>
          </section>

          {/* 4. Veri Aktarımı */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
                4
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Kişisel Verilerin Aktarılması</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Kişisel verileriniz, Kanun&apos;un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları çerçevesinde yalnızca yasal zorunluluk halinde adli makamlara veya mevzuatın izin verdiği resmi kurumlara aktarılabilir. Verileriniz hiçbir ticari üçüncü tarafa satılmaz veya pazarlama amacıyla paylaşılmaz.
            </p>
          </section>

          {/* 5. İlgili Kişinin Hakları (Madde 11) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
                5
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">KVKK Madde 11 Kapsamındaki Haklarınız</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Veri sahibi olarak MRC Yalıtım Söve&apos;ye başvurarak kendinizle ilgili şu hakları talep edebilirsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-700">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK 7. maddede öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini talep etme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına itiraz etme.</li>
            </ul>
          </section>

          {/* 6. Başvuru ve İletişim */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm">
                6
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Başvuru Yöntemi</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici belgelerle birlikte <strong>mrcyalitim@gmail.com</strong> adresine e-posta gönderebilir ya da <strong>1. OSB 5. Cadde No: 13/2 Yeşilyurt / Malatya</strong> adresimize ıslak imzalı dilekçe ile şahsen veya noter kanalıyla başvurabilirsiniz.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#050B15] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-gold hover:text-slate-950 transition-colors"
              >
                <span>İletişim Formuna Git</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                <span>Ana Sayfaya Dön</span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
