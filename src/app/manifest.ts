import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MRC Yalıtım ve Söve | Malatya Yalıtım & Söve İmalatçısı',
    short_name: 'MRC Yalıtım',
    description: 'Malatya 1. OSB yüksek dansite EPS ısı yalıtım levhası ve dış cephe söve profilleri üreticisi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050B15',
    theme_color: '#050B15',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
