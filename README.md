# MRC Söve Yalıtım - B2B Üretim & Teklif Platformu

Bu proje, **MRC Söve Yalıtım** fabrikası için geliştirilmiş, yüksek performanslı, modern ve senior düzeyde bir B2B web platformudur. Proje, fabrikasyon ürünlerin (EPS Yalıtım, Dış Cephe Söve vb.) sergilenmesi, teknik detaylarının sunulması ve profesyonel teklif (RFQ) süreçlerinin yönetilmesi için tasarlanmıştır.

## 🚀 Proje Genel Bakış & Hedefler

- **100/100 Google Lighthouse Skoru:** Maksimum SEO, Erişilebilirlik (a11y), Best Practices ve Performans.
- **Modern & Kurumsal UI/UX:** TailwindCSS, Framer Motion animasyonları, Lucide ikonları, lüks altın ve lacivert kurumsal kimlik.
- **Hızlı Teklif & İletişim:** WhatsApp entegrasyonu ve doğrudan fabrika arama hatları.
- **Erişilebilirlik & Tipografi:** Google Fonts (Outfit & Inter), zengin görsel optimizasyonları ve mikro-etkileşimler.

## 📁 Proje Mimarisi

```
src/
├── app/                  # Next.js 14 App Router
│   ├── about/            # Kurumsal & Fabrika sayfası
│   ├── admin/            # Fabrika yönetim paneli
│   ├── api/contact/      # İletişim formu API rotası
│   ├── contact/          # İletişim ve fabrika adresi sayfası
│   ├── layout.tsx        # Ana Layout & Global SEO Meta Verileri
│   ├── page.tsx          # Ana Sayfa (Hero, Ürünler, Özellikler, SSS)
│   ├── manifest.ts       # PWA Manifest
│   ├── sitemap.ts        # Dinamik Site Haritası
│   └── robots.ts         # Robotlar ve arama motoru indeksleme
├── components/           # Yeniden kullanılabilir UI bileşenleri
│   ├── home/             # Ana sayfa bileşenleri (Ürün vitrini vb.)
│   └── shared/           # Navbar, Footer, Floating Buttons, SEO Şemaları
```

## 🛠️ Kurulum & Çalıştırma

Projeyi yerel ortamda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```
- `frontend/`: Next.js uygulama kodları, bileşenler ve mağaza yönetimi.
- `backend/`: FastAPI uç noktaları ve iş mantığı.
- `database_schema.sql`: Veritabanı mimarisi ve tabloların SQL tanımları.

## 📞 İletişim
Bu platform **MRC Söve Yalıtım A.Ş.** için özel olarak geliştirilmiştir.

---
*Geleceğin yapılarını bugünden yalıtıyoruz.*
