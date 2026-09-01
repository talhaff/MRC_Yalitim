# MRC Yalıtım Söve B2B Platformu - Proje Özeti

Bu proje, **MRC Yalıtım Söve** firması için geliştirilen modern ve şık bir kurumsal web platformudur.

## Proje Yapısı

Proje tamamen tek bir katmandan oluşmaktadır ve tüm dosyalar ana dizindedir:

### Proje Dosyaları (Next.js)
Tüm uygulama mantığı ve tasarım ana dizinde yer alır.
- **Teknoloji:** Next.js (React), Tailwind CSS, Framer Motion.
- **Görevi:** Firmanın kurumsal kimliğini yansıtmak, hizmetlerini tanıtmak ve müşterilerin kolayca teklif alabilmesini sağlamak.
- **Çalıştırma:** Ana dizinde `npm run dev` komutu ile doğrudan başlatılabilir.

## Sistem İşleyişi
- **Kurumsal Bilgiler:** Firma tanıtımı ve iletişim kanalları statik olarak sunulmaktadır.
- **Teklif Talebi:** Sitedeki tüm "Teklif Al" butonları doğrudan iletişim sayfasına (`/contact`) yönlendirilmektedir.
- **Katalog:** İleride eklenecek olan PDF katalog için altyapı hazırdır.
- **Altyapı İhtiyacı:** Yalnızca statik dosya sunucusu veya Vercel/Netlify gibi platformlarda kolayca barındırılabilir, bakım maliyeti sıfırdır.
