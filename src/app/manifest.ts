import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MRC Yalıtım Söve | Malatya Yalıtım & Söve İmalatçısı',
    short_name: 'MRC Yalıtım Söve',
    description: 'Malatya 1. OSB yüksek dansite EPS ısı yalıtım levhası ve dış cephe söve profilleri üreticisi.',
    start_url: '/',
    lang: 'tr',
    display: 'standalone',
    background_color: '#050B15',
    theme_color: '#050B15',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48 32x32 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
