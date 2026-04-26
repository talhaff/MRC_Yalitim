import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BasketItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  quantity: number;
  unit: string;
}

interface QuoteStore {
  items: BasketItem[];
  addItem: (product: BasketItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
  totalItems: () => number;
}

export const useQuoteStore = create<QuoteStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);
        
        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, product] });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      
      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        });
      },
      
      clearBasket: () => set({ items: [] }),
      
      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
    }),
    {
      name: 'mrc-quote-storage',
    }
  )
);
