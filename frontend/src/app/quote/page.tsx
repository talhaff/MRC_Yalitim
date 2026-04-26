'use client';

import { useQuoteStore } from '@/store/useQuoteStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { Trash2, Send, ArrowRight, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

const quoteFormSchema = z.object({
  fullName: z.string().min(3, 'Ad Soyad en az 3 karakter olmalıdır'),
  companyName: z.string().optional(),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export default function QuoteRequestPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, clearBasket } = useQuoteStore();

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormValues) => {
    if (items.length === 0) {
      toast.error('Teklif listeniz boş.');
      return;
    }

    try {
      const payload = {
        contact: data,
        items: items.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
          unit: item.unit
        }))
      };

      // Mock API call
      console.log('Sending RFQ:', payload);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Teklif talebiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.');
      clearBasket();
    } catch (error) {
      toast.error('Bir hata oluştu, lütfen tekrar deneyiniz.');
    }
  };

  if (!mounted) return <div className="min-h-screen" />;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="text-slate-400" size={40} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Teklif Listeniz Boş</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          Henüz listeye ürün eklemediniz. Ürünlerimizi inceleyerek ihtiyacınız olanları ekleyebilirsiniz.
        </p>
        <a href="/products" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
          Ürünleri İncele <ArrowRight size={20} />
        </a>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center lg:text-left">Teklif Talebi Oluştur</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 hidden md:grid grid-cols-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="col-span-2">Ürün Bilgisi</div>
              <div className="text-center">Miktar</div>
              <div className="text-right">İşlem</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {items.map((item) => (
                <div key={item.id} className="p-6 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-slate-50 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">Ürün Kodu: {item.id.slice(0, 8).toUpperCase()}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="flex items-center border border-slate-200 rounded-lg h-10">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 hover:text-blue-600 transition-colors">-</button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 hover:text-blue-600 transition-colors">+</button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg shadow-slate-100 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-6">İletişim Bilgileriniz</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad *</label>
                <input 
                  {...register('fullName')}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-slate-200'}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Firma Adı</label>
                <input 
                  {...register('companyName')}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Şirket Limited Şti."
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-posta *</label>
                  <input 
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="info@firma.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefon *</label>
                  <input 
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="05XX XXX XX XX"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mesajınız / Özel Talepleriniz</label>
                <textarea 
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Eklemek istediğiniz detaylar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white h-14 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Teklifi Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
