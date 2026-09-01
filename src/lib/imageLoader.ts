'use client';

/**
 * Cloudflare Pages & Workers için Akıllı Görsel Yükleyici (Custom Image Loader)
 * 
 * 1. Cloudflare Image Resizing aktif olduğunda (NEXT_PUBLIC_CF_IMAGE_RESIZING=true),
 *    otomatik olarak '/cdn-cgi/image/width={w},quality={q},format=auto/{src}' formatına dönüştürür.
 * 2. Standart Cloudflare Pages CDN ortamında ise görselleri Cloudflare Edge ağı üzerinden
 *    gecikmesiz (0-ms cold start) ve immutable HTTP önbellek başlıklarıyla doğrudan sunar.
 */
export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Tam URL ile verilen harici görseller
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const q = quality || 85;
  const isCloudflareResizing = process.env.NEXT_PUBLIC_CF_IMAGE_RESIZING === 'true';

  if (isCloudflareResizing) {
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `/cdn-cgi/image/width=${width},quality=${q},format=auto/${cleanSrc}`;
  }

  // Cloudflare Edge CDN doğrudan statik iletim
  return src;
}
