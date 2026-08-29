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
    try {
      // 1. Send to Email API (mrcyalitim@gmail.com)
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // 2. Format & Open WhatsApp
      const waText = `*Yeni Web İletişim Mesajı (mrcsoveyalitim.com)*\n\n👤 *Ad Soyad:* ${data.name}\n📧 *E-Posta:* ${data.email}\n🏷️ *Konu:* ${data.subject}\n\n📝 *Mesaj:*\n${data.message}`;
      const waUrl = `https://wa.me/905322585244?text=${encodeURIComponent(waText)}`;
      
      toast.success('Mesajınız iletildi! WhatsApp hattımıza yönlendiriliyorsunuz...');
      window.open(waUrl, '_blank');
      
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Mesaj iletilirken bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
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
    <main className="flex flex-col w-full bg-[#FAFAFB] overflow-x-hidden">
      {/* 1. PREMIUM HEADER */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-28 lg:pt-40 lg:pb-32 bg-[#050B15] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-transparent border border-brand-gold/30 text-brand-gold font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_2px_15px_rgba(212,175,55,0.15)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              İletişim Kanallarımız
            </div>
            
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 lg:mb-8 font-display leading-[1.08] tracking-tight">
              Sorularınız İçin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] animate-gradient">
                Buradayız.
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Projeleriniz için teknik destek, toptan alım talepleri veya fabrikamız hakkında detaylı bilgi almak için ekibimizle doğrudan iletişime geçebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CARDS & FORM */}
      <section className="pt-8 pb-16 md:pt-0 md:pb-24 md:-mt-16 lg:-mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: CONTACT INFO CARDS */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-4 space-y-4"
            >
              {[
                { 
                  icon: <MapPin size={22} />, 
                  title: 'Merkez Fabrika', 
                  content: '1.OSB Mah, 5. Cd. No: 13/2, 44900 Yeşilyurt / Malatya',
                  action: 'Yol Tarifi Al',
                  link: 'https://maps.google.com/?q=38.334732,38.193420'
                },
                { 
                  icon: <Phone size={22} />, 
                  title: 'Doğrudan Hat', 
                  content: '+90 532 258 52 44',
                  action: 'Şimdi Ara',
                  link: 'tel:+905322585244'
                },
                { 
                  icon: <Mail size={22} />, 
                  title: 'E-Posta Adresi', 
                  content: 'mrcyalitim@gmail.com',
                  action: 'Mail Gönder',
                  link: 'mailto:mrcyalitim@gmail.com'
                },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-[28px] border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl bg-[#050B15] text-brand-gold flex items-center justify-center mb-3 md:mb-5 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{item.title}</h3>
                  <p className="text-base md:text-lg font-bold text-brand-navy mb-3">{item.content}</p>
                  <a 
                    href={item.link} 
                    target={item.link.startsWith('http') ? '_blank' : undefined} 
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs md:text-sm group-hover:gap-2.5 transition-all"
                  >
                    {item.action} <ChevronRight size={15} />
                  </a>
                </motion.div>
              ))}

              {/* Working Hours Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-brand-gold to-[#cca232] p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-[28px] text-brand-navy shadow-md"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shadow-sm">
                    <Clock size={18} />
                  </div>
                  <h4 className="font-black text-sm md:text-base">Çalışma Saatleri</h4>
                </div>
                <div className="space-y-3 text-xs md:text-sm font-semibold">
                  <div className="flex justify-between border-b border-brand-navy/15 pb-2">
                    <span>Hafta İçi</span>
                    <span>08:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-navy/15 pb-2">
                    <span>Cumartesi</span>
                    <span>09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Pazar</span>
                    <span className="font-black text-red-950">Kapalı</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: REFINED FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-8"
            >
              <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl md:rounded-[36px] border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-navy mb-3 font-display">Bize Mesaj Gönderin</h2>
                  <p className="text-slate-500 mb-6 md:mb-10 text-xs sm:text-sm md:text-base leading-relaxed">
                    Sizden haber almaktan memnuniyet duyarız. Formu doldurduğunuzda teknik ekibimiz 24 saat içinde size geri dönüş yapacaktır.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Ad Soyad</label>
                        <input 
                          {...register('name')}
                          className={`w-full bg-slate-50 px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border transition-all outline-none text-brand-navy font-medium text-sm md:text-base ${
                            errors.name ? 'border-red-300 bg-red-50/40' : 'border-slate-200 focus:border-brand-gold focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          }`}
                          placeholder="Ahmet Yılmaz"
                        />
                        {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name.message as string}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">E-Posta</label>
                        <input 
                          {...register('email')}
                          className={`w-full bg-slate-50 px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border transition-all outline-none text-brand-navy font-medium text-sm md:text-base ${
                            errors.email ? 'border-red-300 bg-red-50/40' : 'border-slate-200 focus:border-brand-gold focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          }`}
                          placeholder="ahmet@example.com"
                        />
                        {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email.message as string}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Konu Başlığı</label>
                      <input 
                        {...register('subject')}
                        className={`w-full bg-slate-50 px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border transition-all outline-none text-brand-navy font-medium text-sm md:text-base ${
                          errors.subject ? 'border-red-300 bg-red-50/40' : 'border-slate-200 focus:border-brand-gold focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        }`}
                        placeholder="Teklif Talebi, Ürün Bilgisi vb."
                      />
                      {errors.subject && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.subject.message as string}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Mesajınız</label>
                      <textarea 
                        {...register('message')}
                        rows={4}
                        className={`w-full bg-slate-50 px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border transition-all outline-none text-brand-navy font-medium text-sm md:text-base resize-none ${
                          errors.message ? 'border-red-300 bg-red-50/40' : 'border-slate-200 focus:border-brand-gold focus:bg-white focus:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        }`}
                        placeholder="Mesajınızı buraya yazınız..."
                      />
                      {errors.message && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.message.message as string}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full lg:w-auto min-w-[220px] bg-brand-navy text-white h-14 md:h-16 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:shadow-[0_15px_30px_-10px_rgba(5,11,21,0.3)] active:scale-[0.98]"
                    >
                      <span className="relative z-10 flex items-center gap-3 text-sm md:text-base">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-brand-gold rounded-full animate-spin" />
                        ) : (
                          <>
                            Mesajı Gönder
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ELEGANT MAP SECTION */}
      <section className="relative h-[380px] md:h-[520px] w-full overflow-hidden border-t border-b border-slate-200">
        <iframe 
          title="MRC SÖVE YALITIM Google Harita Konumu"
          src="https://maps.google.com/maps?q=38.334732,38.193420&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          className="w-full h-full border-0 absolute inset-0 z-10" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* 4. CALL TO ACTION - FAST CONTACT */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy font-display">Daha hızlı bir yanıt mı arıyorsunuz?</h2>
              <p className="text-slate-500">Müşteri temsilcilerimizle WhatsApp üzerinden yazışabilir veya doğrudan telefonla arayabilirsiniz.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a 
                href="tel:+905322585244"
                className="flex items-center justify-center gap-3 bg-brand-navy text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95 w-full sm:w-auto"
              >
                <Phone size={22} className="text-brand-gold shrink-0" />
                <span>+90 532 258 52 44</span>
              </a>
              <a 
                href="https://wa.me/905322585244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              >
                <MessageCircle size={22} />
                <span>WhatsApp Hattı</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
