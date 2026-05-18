// src/pages/Carrito.tsx
// Página del carrito de la compra.

import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export function Carrito() {
  const { items, totalItems, totalPrecio, eliminarProducto, cambiarCantidad, vaciarCarrito } = useCarrito();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8">Añade algunos productos para empezar</p>
        <Link to="/productos" className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Tu carrito ({totalItems} artículos)</h1>
        <button onClick={vaciarCarrito} className="text-sm text-red-500 hover:underline">
          Vaciar carrito
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lista de productos */}
        <div className="md:col-span-2 space-y-4">
          {items.map(({ producto, cantidad }) => (
            <div key={producto.id} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 items-center shadow-sm">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                onError={e => { (e.target as HTMLImageElement).src = 'https://placehold.co/80x80?text=P'; }}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{producto.nombre}</h3>
                <p className="text-sm text-gray-500">{producto.precio.toFixed(2)} € / ud.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => cambiarCantidad(producto.id, cantidad - 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 font-bold"
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold">{cantidad}</span>
                <button
                  onClick={() => cambiarCantidad(producto.id, cantidad + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{(producto.precio * cantidad).toFixed(2)} €</p>
                <button
                  onClick={() => eliminarProducto(producto.id)}
                  className="text-xs text-red-400 hover:underline"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Resumen</h2>
          <div className="space-y-2 mb-4 text-sm">
            {items.map(({ producto, cantidad }) => (
              <div key={producto.id} className="flex justify-between text-gray-600">
                <span>{producto.nombre} x{cantidad}</span>
                <span>{(producto.precio * cantidad).toFixed(2)} €</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{totalPrecio.toFixed(2)} €</span>
          </div>
          <button className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
