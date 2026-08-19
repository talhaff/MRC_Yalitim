'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ 
          opacity: mounted ? 1 : 0, 
          y: mounted ? 0 : 15, 
          scale: mounted ? 1 : 0.98,
          filter: mounted ? 'blur(0px)' : 'blur(8px)' 
        }}
        exit={{ opacity: 0, y: -15, scale: 0.98, filter: 'blur(8px)' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// SEO Schema Component
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MRC Yalıtım ve Söve",
    "url": "https://mrcyalitim.com",
    "logo": "https://mrcyalitim.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-212-555-0000",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://facebook.com/mrcyalitim",
      "https://instagram.com/mrcyalitim",
      "https://linkedin.com/company/mrcyalitim"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
