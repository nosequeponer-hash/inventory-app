// src/context/CarritoContext.tsx
// Contexto global para gestionar el carrito de la compra.

import { createContext, useContext, useState, useCallback } from 'react';
import type { Producto, ItemCarrito } from '../types';

interface CarritoContextType {
  items: ItemCarrito[];
  totalItems: number;
  totalPrecio: number;
  añadirProducto: (producto: Producto) => void;
  eliminarProducto: (id: number) => void;
  cambiarCantidad: (id: number, cantidad: number) => void;
  vaciarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextType | null>(null);

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([]);

  const añadirProducto = useCallback((producto: Producto) => {
    setItems(prev => {
      const existente = prev.find(i => i.producto.id === producto.id);
      if (existente) {
        return prev.map(i =>
          i.producto.id === producto.id
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        );
      }
      return [...prev, { producto, cantidad: 1 }];
    });
  }, []);

  const eliminarProducto = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.producto.id !== id));
  }, []);

  const cambiarCantidad = useCallback((id: number, cantidad: number) => {
    if (cantidad <= 0) {
      setItems(prev => prev.filter(i => i.producto.id !== id));
    } else {
      setItems(prev =>
        prev.map(i => i.producto.id === id ? { ...i, cantidad } : i)
      );
    }
  }, []);

  const vaciarCarrito = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0);
  const totalPrecio = items.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0);

  return (
    <CarritoContext.Provider value={{
      items, totalItems, totalPrecio,
      añadirProducto, eliminarProducto, cambiarCantidad, vaciarCarrito
    }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  return ctx;
}
