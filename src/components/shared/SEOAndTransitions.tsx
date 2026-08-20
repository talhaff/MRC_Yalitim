'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
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
