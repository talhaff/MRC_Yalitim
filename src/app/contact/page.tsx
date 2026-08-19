'use client';

import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="w-full bg-[#FAFAFB]">
      {/* 1. PREMIUM HEADER */}
      <section className="relative pt-40 pb-32 bg-[#050B15] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              İletişim Kanallarımız
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-display leading-[1.1]">
              Sorularınız İçin <br />
              <span className="text-brand-gold">Buradayız.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed font-light max-w-2xl">
              Projeleriniz için teknik destek, toptan alım talepleri veya fabrikamız hakkında detaylı bilgi almak için ekibimizle doğrudan iletişime geçebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CARDS & FORM */}
      <section className="pb-32 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: CONTACT INFO */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-4 space-y-6"
            >
              {[
                { 
                  icon: <MapPin size={24} />, 
                  title: 'Merkez Fabrika', 
                  content: 'Organize Sanayi Bölgesi, Malatya',
                  action: 'Yol Tarifi Al',
                  color: 'bg-brand-navy'
                },
                { 
                  icon: <Phone size={24} />, 
                  title: 'Doğrudan Hat', 
                  content: '+90 532 258 52 44',
                  action: 'Şimdi Ara',
                  color: 'bg-brand-navy'
                },
                { 
                  icon: <Mail size={24} />, 
                  title: 'E-Posta Adresi', 
                  content: 'info@mrcyalitim.com',
                  action: 'Mail Gönder',
                  color: 'bg-brand-navy'
                },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} text-brand-gold flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.title}</h3>
                  <p className="text-lg font-bold text-brand-navy mb-4">{item.content}</p>
                  <button className="flex items-center gap-2 text-brand-gold font-bold text-sm group-hover:gap-3 transition-all">
                    {item.action} <ChevronRight size={16} />
                  </button>
                </motion.div>
              ))}

              <motion.div 
                variants={itemVariants}
                className="bg-brand-gold p-8 rounded-[32px] text-brand-navy"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-bold">Çalışma Saatleri</h4>
                </div>
                <div className="space-y-4 font-medium opacity-90">
                  <div className="flex justify-between border-b border-brand-navy/10 pb-2">
                    <span>Hafta İçi</span>
                    <span>08:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-navy/10 pb-2">
                    <span>Cumartesi</span>
                    <span>09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: REFINED FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-white p-8 lg:p-16 rounded-[48px] border border-slate-100 shadow-2xl relative overflow-hidden">
                {/* Subtle Form Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-[100px]" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4 font-display">Bize Mesaj Gönderin</h2>
                  <p className="text-slate-500 mb-12 max-w-xl">
                    Sizden haber almaktan memnuniyet duyarız. Formu doldurduğunuzda teknik ekibimiz 24 saat içinde size geri dönüş yapacaktır.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Ad Soyad</label>
                        <input 
                          {...register('name')}
                          className={`w-full bg-slate-50 px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-brand-navy font-medium ${
                            errors.name ? 'border-red-100 bg-red-50/30' : 'border-transparent focus:border-brand-gold focus:bg-white focus:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                          }`}
                          placeholder="Ahmet Yılmaz"
                        />
                        {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter ml-1">{errors.name.message as string}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-Posta</label>
                        <input 
                          {...register('email')}
                          className={`w-full bg-slate-50 px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-brand-navy font-medium ${
                            errors.email ? 'border-red-100 bg-red-50/30' : 'border-transparent focus:border-brand-gold focus:bg-white focus:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                          }`}
                          placeholder="ahmet@example.com"
                        />
                        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter ml-1">{errors.email.message as string}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Konu Başlığı</label>
                      <input 
                        {...register('subject')}
                        className={`w-full bg-slate-50 px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-brand-navy font-medium ${
                          errors.subject ? 'border-red-100 bg-red-50/30' : 'border-transparent focus:border-brand-gold focus:bg-white focus:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        }`}
                        placeholder="Teklif Talebi, Ürün Bilgisi vb."
                      />
                      {errors.subject && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter ml-1">{errors.subject.message as string}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Mesajınız</label>
                      <textarea 
                        {...register('message')}
                        rows={5}
                        className={`w-full bg-slate-50 px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-brand-navy font-medium resize-none ${
                          errors.message ? 'border-red-100 bg-red-50/30' : 'border-transparent focus:border-brand-gold focus:bg-white focus:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        }`}
                        placeholder="Mesajınızı buraya yazınız..."
                      />
                      {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter ml-1">{errors.message.message as string}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full lg:w-auto min-w-[240px] bg-brand-navy text-white h-16 rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:shadow-[0_20px_40px_-15px_rgba(5,11,21,0.3)]"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-brand-gold rounded-full animate-spin" />
                        ) : (
                          <>
                            Mesajı Gönder
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ELEGANT MAP SECTION */}
      <section className="relative h-[600px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          {/* Fallback pattern while map loads or if no iframe */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/dots.svg')] bg-repeat" />
          <div className="text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-brand-navy/10 flex items-center justify-center mx-auto mb-6">
              <MapPin size={32} className="text-brand-gold" />
            </div>
            <p className="text-brand-navy font-bold uppercase tracking-[0.3em] text-sm mb-2">Konumumuz</p>
            <p className="text-slate-500">Google Maps Entegrasyonu Bekleniyor</p>
          </div>
        </div>
        {/* Real iframe integration example:
        <iframe 
          src="https://www.google.com/maps/embed?..." 
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy"
        ></iframe> 
        */}
      </section>

      {/* 4. CALL TO ACTION - FAST CONTACT */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-brand-navy font-display">Daha hızlı bir yanıt mı arıyorsunuz?</h2>
              <p className="text-slate-500">Müşteri temsilcilerimizle WhatsApp üzerinden anında yazışmaya başlayın.</p>
            </div>
            <a 
              href="https://wa.me/905322585244" 
              target="_blank" 
              className="flex items-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-[24px] font-bold text-xl hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02]"
            >
              <MessageCircle size={32} />
              WhatsApp Destek Hattı
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp for all sections */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="https://wa.me/905322585244" 
        target="_blank" 
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-24 bg-brand-navy text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0">
          WhatsApp'tan Yazın
        </span>
      </motion.a>
    </main>
  );
}
