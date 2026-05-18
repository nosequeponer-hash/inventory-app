// src/pages/NotFound.tsx
// Página 404.

import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl mb-4">🥦</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
      <p className="text-xl text-gray-500 mb-8">Esta página no existe... ¡pero nuestros productos sí!</p>
      <Link to="/" className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors">
        Volver al inicio
      </Link>
    </div>
  );
}
