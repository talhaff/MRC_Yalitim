/** @type {import('next').NextConfig} */
const nextConfig = {
  // 100/100 Lighthouse & En Yüksek Hız için Saf Statik HTML Dışa Aktarma
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
};

export default nextConfig;

