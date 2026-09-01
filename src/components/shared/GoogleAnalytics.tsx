'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export const GA_MEASUREMENT_ID = 'G-3QN5483JR8';

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // 1. Check existing consent in localStorage
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem('mrc_cookie_consent');
        if (consent === 'accepted') {
          setHasConsent(true);
        } else {
          setHasConsent(false);
        }
      } catch {
        // Fallback if storage access is restricted
        setHasConsent(false);
      }
    };

    checkConsent();

    // 2. Listen for consent changes dynamically without page reload
    window.addEventListener('mrc_cookie_consent_change', checkConsent);
    return () => {
      window.removeEventListener('mrc_cookie_consent_change', checkConsent);
    };
  }, []);

  // Do not render or load any analytics script until explicit user consent is obtained
  if (!hasConsent) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
