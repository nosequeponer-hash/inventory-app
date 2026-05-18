// src/components/Header.tsx
// Cabecera de la aplicación con logo, buscador y carrito.

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';

export function Header() {
  const { totalItems } = useCarrito();
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  function handleBuscar(e: React.FormEvent) {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/productos?buscar=${encodeURIComponent(busqueda.trim())}`);
    }
  }

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight flex-shrink-0">
          🛒 Mercabuena
        </Link>

        {/* Buscador */}
        <form onSubmit={handleBuscar} className="flex-1">
          <input
            type="text"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-green-300"
          />
        </form>

        {/* Carrito */}
        <Link to="/carrito" className="relative flex-shrink-0">
          <span className="text-2xl">🛍️</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Navegación de categorías */}
      <nav className="bg-green-800">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-6 text-sm overflow-x-auto">
          <Link to="/productos" className="hover:text-green-200 transition-colors whitespace-nowrap">Todos los productos</Link>
          <Link to="/productos?categoria=Frutas y verduras" className="hover:text-green-200 transition-colors whitespace-nowrap">🍎 Frutas y verduras</Link>
          <Link to="/productos?categoria=Lácteos" className="hover:text-green-200 transition-colors whitespace-nowrap">🥛 Lácteos</Link>
          <Link to="/productos?categoria=Panadería" className="hover:text-green-200 transition-colors whitespace-nowrap">🍞 Panadería</Link>
          <Link to="/productos?categoria=Carnes" className="hover:text-green-200 transition-colors whitespace-nowrap">🥩 Carnes</Link>
          <Link to="/productos?categoria=Bebidas" className="hover:text-green-200 transition-colors whitespace-nowrap">🥤 Bebidas</Link>
        </div>
      </nav>
    </header>
  );
}
