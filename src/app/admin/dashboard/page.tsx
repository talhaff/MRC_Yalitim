'use client';

import { 
  Users, 
  FileText, 
  Package, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  MoreVertical,
  ChevronRight
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Toplam Teklif Talebi', value: '142', icon: <FileText />, color: 'bg-blue-500' },
    { label: 'Bekleyen Talepler', value: '12', icon: <Clock />, color: 'bg-amber-500' },
    { label: 'Aktif Ürün Sayısı', value: '284', icon: <Package />, color: 'bg-emerald-500' },
    { label: 'Aylık Dönüşüm', value: '%18', icon: <TrendingUp />, color: 'bg-purple-500' },
  ];

  const recentQuotes = [
    { id: '1', client: 'Aksoy İnşaat', email: 'ahmet@aksoy.com', date: '2 saat önce', status: 'Yeni' },
    { id: '2', client: 'Modern Yapı A.Ş.', email: 'satis@modernyapi.com', date: '5 saat önce', status: 'İncelendi' },
    { id: '3', client: 'Güven Mimarlık', email: 'info@guven.com', date: 'Dün', status: 'Teklif Gönderildi' },
    { id: '4', client: 'Ege Konut Projeleri', email: 'ege@konut.com', date: '2 gün önce', status: 'Tamamlandı' },
  ];

  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Fabrika Yönetim Paneli</h1>
          <p className="text-slate-500">MRC Yalıtım Söve Operasyonel Özeti</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 flex items-center gap-2">
          <Clock size={16} /> {new Date().toLocaleDateString('tr-TR')}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 ${stat.color} text-white rounded-xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Quotes Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Son Teklif Talepleri</h3>
            <button className="text-blue-600 text-sm font-bold hover:underline">Tümünü Gör</button>
          </div>
          <div className="divide-y divide-slate-100">
            {recentQuotes.map((quote) => (
              <div key={quote.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{quote.client}</p>
                    <p className="text-xs text-slate-400">{quote.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 text-sm">
                  <span className="text-slate-400">{quote.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    quote.status === 'Yeni' ? 'bg-blue-100 text-blue-700' :
                    quote.status === 'İncelendi' ? 'bg-amber-100 text-amber-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {quote.status}
                  </span>
                  <button className="text-slate-300 hover:text-slate-600">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Inventory */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-brand-gold">Hızlı İşlemler</h3>
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-xl flex items-center justify-between transition-all group">
                <span className="font-medium text-sm">Yeni Ürün Ekle</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-xl flex items-center justify-between transition-all group">
                <span className="font-medium text-sm">Stok Güncelle</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-xl flex items-center justify-between transition-all group">
                <span className="font-medium text-sm">Fiyat Listesi Yayınla</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6">Fabrika Durumu</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">EPS Üretim Hattı 1</span>
                  <span className="text-emerald-500 font-bold">%92</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-emerald-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Söve Kaplama Ünitesi</span>
                  <span className="text-blue-500 font-bold">%78</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[78%] h-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
