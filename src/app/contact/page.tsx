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
                  content: 'Organize Sanayi Bölgesi, Malatya',
                  action: 'Yol Tarifi Al',
                  link: 'https://maps.google.com/?q=Organize+Sanayi+Bolgesi+Malatya'
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
                  content: 'info@mrcyalitim.com',
                  action: 'Mail Gönder',
                  link: 'mailto:info@mrcyalitim.com'
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
      <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden group">
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/dots.svg')] bg-repeat" />
          <div className="animate-pulse flex flex-col items-center gap-4">
             <div className="w-12 h-12 border-4 border-brand-navy/20 border-t-brand-gold rounded-full animate-spin" />
             <p className="text-brand-navy font-bold text-sm tracking-widest uppercase">Harita Yükleniyor...</p>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99901.76673898144!2d38.1278144372138!3d38.30906233486395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153282215f94ba05%3A0xea69a4892c902242!2zWWXFn2lseXVydC9NYWxhdHlh!5e0!3m2!1str!2str!4v1716503023245!5m2!1str!2str" 
          className="w-full h-full border-0 absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-1000" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* 4. CALL TO ACTION - FAST CONTACT */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy font-display">Daha hızlı bir yanıt mı arıyorsunuz?</h2>
              <p className="text-slate-500">Müşteri temsilcilerimizle WhatsApp üzerinden anında yazışmaya başlayın.</p>
            </div>
            <a 
              href="https://wa.me/905322585244" 
              target="_blank" 
              className="flex items-center justify-center gap-3 md:gap-4 bg-[#25D366] text-white px-6 md:px-10 py-4 md:py-6 rounded-[24px] font-bold text-base md:text-xl hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] w-full md:w-auto"
            >
              <MessageCircle size={24} className="md:w-8 md:h-8" />
              WhatsApp Destek Hattı
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
