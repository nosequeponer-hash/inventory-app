// src/components/ProductCard.tsx
// Tarjeta de producto reutilizable.

import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import type { Producto } from '../types';

interface ProductCardProps {
  producto: Producto;
}

export function ProductCard({ producto }: ProductCardProps) {
  const { añadirProducto } = useCarrito();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* Imagen */}
      <Link to={`/productos/${producto.id}`}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-48 object-cover"
          onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x200?text=Producto'; }}
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        {/* Categoría */}
        <span className="text-xs text-green-700 font-medium mb-1">{producto.categoria}</span>

        {/* Nombre */}
        <Link to={`/productos/${producto.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-green-700 transition-colors line-clamp-2 mb-2">
            {producto.nombre}
          </h3>
        </Link>

        <div className="mt-auto">
          {/* Precio */}
          <p className="text-xl font-bold text-gray-900 mb-3">
            {producto.precio.toFixed(2)} €
          </p>

          {/* Stock y botón */}
          {producto.stock === 0 ? (
            <p className="text-sm text-red-500 font-medium">Sin stock</p>
          ) : (
            <button
              onClick={() => añadirProducto(producto)}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Añadir al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
