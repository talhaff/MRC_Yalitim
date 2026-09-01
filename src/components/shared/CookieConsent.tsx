'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('mrc_cookie_consent');
      if (!consent) {
        // Delay slightly for smooth page load transition
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage access blocked fallback
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('mrc_cookie_consent', 'accepted');
      window.dispatchEvent(new Event('mrc_cookie_consent_change'));
    } catch (e) {
      console.error(e);
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('mrc_cookie_consent', 'declined');
      window.dispatchEvent(new Event('mrc_cookie_consent_change'));
    } catch (e) {
      console.error(e);
    }
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 z-40 max-w-lg"
          role="dialog"
          aria-label="Çerez Kullanım Onayı"
        >
          <div className="bg-[#050B15]/95 backdrop-blur-xl border border-brand-gold/30 rounded-2xl p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-white relative">
            {/* Ambient Gold Glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center shrink-0 text-brand-gold">
                <Cookie size={20} />
              </div>
              <div className="flex-1 pr-6">
                <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-1.5">
                  Çerez Tercihleri ve Gizlilik
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-slate-300 leading-relaxed">
                  Web sitemizde gezinme deneyiminizi iyileştirmek, site trafiğimizi analiz etmek ve güvenliği sağlamak amacıyla KVKK mevzuatına uygun çerezler kullanmaktayız. Detaylı bilgi için{' '}
                  <Link
                    href="/kvkk"
                    className="text-brand-gold underline hover:text-white transition-colors"
                  >
                    KVKK ve Çerez Politikası
                  </Link>
                  &apos;nı inceleyebilirsiniz.
                </p>
              </div>

              {/* Quick Close (Acts as Essential Only) */}
              <button
                onClick={handleDecline}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Kapat"
                title="Sadece Zorunlu Çerezler"
              >
                <X size={18} />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-end gap-2.5">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                Sadece Zorunlu Çerezler
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-brand-gold via-[#e5c05d] to-brand-gold hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center gap-1.5"
              >
                <ShieldCheck size={15} />
                Tümünü Kabul Et
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
