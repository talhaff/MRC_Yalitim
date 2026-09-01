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
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo_transparent.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  };
}
