# MRC Yalıtım ve Söve - B2B Üretim & Teklif Platformu

Bu proje, **MRC Yalıtım ve Söve** fabrikası için geliştirilmiş, yüksek performanslı, modern ve senior düzeyde bir B2B web platformudur. Proje, fabrikasyon ürünlerin (EPS Yalıtım, Dış Cephe Söve vb.) sergilenmesi, teknik detaylarının sunulması ve profesyonel teklif (RFQ) süreçlerinin yönetilmesi için tasarlanmıştır.

## 🚀 Teknolojik Yığın (Tech Stack)

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS (Mobile-first & Custom Brand Colors)
- **Animasyon:** Framer Motion (Senior Level Page Transitions & Hover Effects)
- **State Management:** Zustand (Persistent Quote Basket)
- **İkon Seti:** Lucide React
- **Form Yönetimi:** React Hook Form + Zod (Validation)

### Backend
- **Framework:** FastAPI (Python)
- **Veritabanı:** PostgreSQL (SQLAlchemy ORM)
- **Doğrulama:** Pydantic v2
- **Sunucu:** Uvicorn

## ✨ Temel Özellikler

- **Modern Mimari:** Next.js App Router ile SEO uyumlu ve hızlı sayfa yüklemeleri.
- **Dinamik Ürün Kataloğu:** Ürünleri kategoriye göre filtreleme, arama ve grid/list görünüm seçenekleri.
- **Gelişmiş Teklif Sistemi:** Müşterilerin ürünleri sepete ekleyip fabrikadan toplu teklif isteyebileceği persistence (kalıcı) sepet yapısı.
- **Senior UI/UX:** Navy & Gold kurumsal renk paleti, premium animasyonlar ve tamamen responsive tasarım.
- **Teknik Detay Tabloları:** Ürünlerin yoğunluk, hammadde ve ısı iletkenlik gibi teknik verilerinin sunumu.
- **SEO Optimizasyonu:** JSON-LD Schema markup ve meta etiket yönetimi.

## 🛠️ Kurulum ve Çalıştırma

### 1. Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```
Uygulama `http://localhost:3000` adresinde çalışacaktır.

### 2. Backend Kurulumu
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
API dökümantasyonu `http://localhost:8000/docs` adresinde görüntülenebilir.

## 📂 Proje Yapısı

- `frontend/`: Next.js uygulama kodları, bileşenler ve mağaza yönetimi.
- `backend/`: FastAPI uç noktaları ve iş mantığı.
- `database_schema.sql`: Veritabanı mimarisi ve tabloların SQL tanımları.

## 📞 İletişim
Bu platform **MRC Yalıtım ve Söve A.Ş.** için özel olarak geliştirilmiştir.

---
*Geleceğin yapılarını bugünden yalıtıyoruz.*
