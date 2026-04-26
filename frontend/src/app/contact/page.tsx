'use client';

import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Lütfen adınızı giriniz'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  subject: z.string().min(5, 'Konu başlığı en az 5 karakter olmalıdır'),
  message: z.string().min(10, 'Mesajınız en az 10 karakter olmalıdır'),
});

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    console.log('Sending message:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Mesajınız başarıyla iletildi. Teşekkür ederiz.');
    reset();
  };

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 font-display">Bize Ulaşın</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Projeleriniz için teknik destek almak veya ürünlerimiz hakkında detaylı bilgi için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">İletişim Bilgileri</h3>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Fabrika Adresi</p>
                    <p className="text-slate-500">Organize Sanayi Bölgesi, 4. Cadde No: 12, Başakşehir / İstanbul</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Müşteri Hizmetleri</p>
                    <p className="text-slate-500">+90 (212) 555 00 00</p>
                    <p className="text-slate-500">+90 (532) 000 00 00 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">E-Posta</p>
                    <p className="text-slate-500">info@mrcyalitim.com</p>
                    <p className="text-slate-500">satis@mrcyalitim.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-brand-navy rounded-3xl text-white space-y-6">
                <h4 className="text-xl font-bold">Çalışma Saatlerimiz</h4>
                <div className="space-y-3 opacity-80 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Pazartesi - Cuma</span>
                    <span>08:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Cumartesi</span>
                    <span>09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between text-brand-gold font-bold">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-premium">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Mesaj Gönderin</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Ad Soyad</label>
                      <input 
                        {...register('name')}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        placeholder="Adınız Soyadınız"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message as string}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">E-posta</label>
                      <input 
                        {...register('email')}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                        placeholder="ornek@mail.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Konu</label>
                    <input 
                      {...register('subject')}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="Başvuru, Teklif Talebi vb."
                    />
                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message as string}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız</label>
                    <textarea 
                      {...register('message')}
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message as string}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-700 text-white h-16 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-lg shadow-blue-100"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Mesajı Gönder
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[500px] bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest">Google Maps Entegrasyon Alanı</p>
        </div>
        {/* Real iframe would go here */}
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/905320000000" 
        target="_blank" 
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-20 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Hızlı Destek Hattı
        </span>
      </a>
    </main>
  );
}
