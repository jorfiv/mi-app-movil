import React, { createContext, useState, useContext } from 'react';

export type Product = { id: string; name: string; price: number; image: string };
type CartItem = { product: Product; quantity: number };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  total: number;
  totalItems: number;
} | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) return prev.map(item => item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity > 1) {
        return prev.map(item => item.product.id === productId ? {...item, quantity: item.quantity - 1} : item);
      }
      return prev.filter(item => item.product.id !== productId);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, totalItems }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
