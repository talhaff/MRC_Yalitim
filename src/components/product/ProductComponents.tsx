'use client';

import React from 'react';

// 1. Specs Table Component
export function SpecsTable({ specs }: { specs: { key: string; value: string; unit?: string }[] }) {
  return (
    <div className="w-full">
      {specs.map((spec, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-2 px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100 last:border-0`}
        >
          <span className="text-slate-500 font-medium">{spec.key}</span>
          <span className="text-slate-900 font-bold text-right">
            {spec.value} {spec.unit}
          </span>
        </div>
      ))}
    </div>
  );
}

// 2. 3D Viewer Placeholder (Ready for Three.js / @google/model-viewer)
export function ThreeDViewer({ modelUrl }: { modelUrl?: string }) {
  return (
    <div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/10" />
      <div className="text-center z-10">
        <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>
        <p className="text-sm font-bold text-slate-800 uppercase tracking-widest">3D Modelini İncele</p>
        <p className="text-xs text-slate-500 mt-1">Interaktif görünüm için tıklayın</p>
      </div>
      {/* Real implementation would use: <model-viewer src={modelUrl} ... /> */}
    </div>
  );
}

// 3. Product Gallery Component
import Image from 'next/image';

export function ProductGallery({ images }: { images: { url: string; alt: string }[] }) {
  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-premium">
        <Image 
          src={images[activeImage].url} 
          alt={images[activeImage].alt}
          fill
          className="object-contain p-8"
        />
      </div>
      <div className="flex gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
              activeImage === idx ? 'border-blue-600 scale-95' : 'border-transparent hover:border-slate-300'
            }`}
          >
            <Image src={img.url} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
