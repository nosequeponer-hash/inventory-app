// src/pages/DetalleProducto.tsx
// Página de detalle de un producto individual.

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducto } from '../api/client';
import { useCarrito } from '../context/CarritoContext';
import type { Producto } from '../types';

export function DetalleProducto() {
  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const { añadirProducto } = useCarrito();
  const [añadido, setAñadido] = useState(false);

  useEffect(() => {
    if (!id) return;
    setCargando(true);
    getProducto(Number(id))
      .then(setProducto)
      .catch(() => setError('Producto no encontrado'))
      .finally(() => setCargando(false));
  }, [id]);

  function handleAñadir() {
    if (!producto) return;
    añadirProducto(producto);
    setAñadido(true);
    setTimeout(() => setAñadido(false), 2000);
  }

  if (cargando) return <div className="text-center py-20 text-gray-500">⏳ Cargando...</div>;
  if (error || !producto) return (
    <div className="text-center py-20">
      <p className="text-red-500 mb-4">❌ {error}</p>
      <Link to="/productos" className="text-green-700 hover:underline">Volver al catálogo</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/productos" className="text-green-700 hover:underline text-sm mb-6 inline-block">
        ← Volver al catálogo
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-80 object-cover"
          onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Producto'; }}
        />
        <div className="p-8 flex flex-col">
          <span className="text-sm text-green-700 font-medium mb-2">{producto.categoria}</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{producto.nombre}</h1>
          <p className="text-gray-600 mb-6 flex-1">{producto.descripcion}</p>

          <div className="flex items-center justify-between mb-6">
            <span className="text-3xl font-bold text-gray-900">{producto.precio.toFixed(2)} €</span>
            <span className={`text-sm font-medium ${producto.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {producto.stock > 0 ? `✅ En stock (${producto.stock} uds.)` : '❌ Sin stock'}
            </span>
          </div>

          <button
            onClick={handleAñadir}
            disabled={producto.stock === 0}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              producto.stock === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : añadido
                ? 'bg-green-500 text-white'
                : 'bg-green-700 hover:bg-green-800 text-white'
            }`}
          >
            {añadido ? '✅ Añadido al carrito' : 'Añadir al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
}
