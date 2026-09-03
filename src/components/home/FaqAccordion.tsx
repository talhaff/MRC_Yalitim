'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openFaq === index;
        return (
          <div 
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'bg-white/[0.08] border-brand-gold/50 shadow-lg shadow-brand-gold/10' 
                : 'bg-white/[0.03] border-white/10 hover:border-white/20'
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-base sm:text-lg text-white group-hover:text-brand-gold transition-colors">
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                isOpen ? 'bg-brand-gold text-brand-navy rotate-180' : 'bg-white/5 text-brand-gold'
              }`}>
                <ChevronDown size={18} />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 sm:p-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 font-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
