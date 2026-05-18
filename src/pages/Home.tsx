// src/pages/Home.tsx
// Página de inicio de Mercabuena.

import { Link } from 'react-router-dom';
import { useProductos } from '../hooks/useProductos';
import { ProductCard } from '../components/ProductCard';

const categorias = [
  { nombre: 'Frutas y verduras', emoji: '🍎' },
  { nombre: 'Lácteos', emoji: '🥛' },
  { nombre: 'Panadería', emoji: '🍞' },
  { nombre: 'Carnes', emoji: '🥩' },
  { nombre: 'Bebidas', emoji: '🥤' },
];

export function Home() {
  const estado = useProductos();

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Mercabuena 🛒</h1>
        <p className="text-xl mb-8 text-green-100">Tu supermercado online. Productos frescos, precios justos.</p>
        <Link
          to="/productos"
          className="bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
        >
          Ver todos los productos
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Categorías */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprar por categoría</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {categorias.map(cat => (
            <Link
              key={cat.nombre}
              to={`/productos?categoria=${encodeURIComponent(cat.nombre)}`}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-green-300 transition-all"
            >
              <div className="text-4xl mb-2">{cat.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{cat.nombre}</div>
            </Link>
          ))}
        </div>

        {/* Productos destacados */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos destacados</h2>

        {estado.estado === 'cargando' && (
          <div className="text-center py-12 text-gray-500">⏳ Cargando productos...</div>
        )}

        {estado.estado === 'error' && (
          <div className="text-center py-12 text-red-500">❌ {estado.mensaje}</div>
        )}

        {estado.estado === 'exito' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {estado.datos.slice(0, 8).map(producto => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
