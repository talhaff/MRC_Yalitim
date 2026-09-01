/** @type {import('next').NextConfig} */
const nextConfig = {
  // 100/100 Lighthouse & En Yüksek Hız için Saf Statik HTML Dışa Aktarma
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
