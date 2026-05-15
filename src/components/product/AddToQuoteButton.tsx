'use client';

import { useQuoteStore, BasketItem } from '@/store/useQuoteStore';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner'; // Assuming sonner for notifications

interface AddToQuoteButtonProps {
  product: {
    id: string;
    name: string;
    slug: string;
    images: { url: string }[];
  };
}

export function AddToQuoteButton({ product }: AddToQuoteButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useQuoteStore((state) => state.addItem);

  const handleAdd = () => {
    const item: BasketItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.images[0].url,
      quantity: quantity,
      unit: 'adet', // Default unit
    };

    addItem(item);
    setIsAdded(true);
    toast.success(`${product.name} teklif listesine eklendi.`);
    
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="flex items-center border border-slate-300 rounded-lg bg-white h-14">
        <button 
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="px-4 h-full text-slate-500 hover:text-blue-600 transition-colors"
        >
          <Minus size={20} />
        </button>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="w-16 text-center font-semibold text-slate-900 border-none focus:ring-0"
        />
        <button 
          onClick={() => setQuantity(q => q + 1)}
          className="px-4 h-full text-slate-500 hover:text-blue-600 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      <button
        onClick={handleAdd}
        disabled={isAdded}
        className={`flex-1 h-14 rounded-lg flex items-center justify-center gap-3 font-bold transition-all ${
          isAdded 
            ? 'bg-emerald-500 text-white' 
            : 'bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-200'
        }`}
      >
        {isAdded ? (
          <>
            <Check size={24} />
            Eklendi
          </>
        ) : (
          <>
            <ShoppingCart size={24} />
            Teklif Listesine Ekle
          </>
        )}
      </button>
    </div>
  );
}
