// src/components/Footer.tsx
// Pie de página de la aplicación.

export function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">🛒 Mercabuena</h3>
          <p className="text-sm text-green-300">Tu supermercado online de confianza. Productos frescos y de calidad a un click.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Categorías</h3>
          <ul className="text-sm space-y-1 text-green-300">
            <li>🍎 Frutas y verduras</li>
            <li>🥛 Lácteos</li>
            <li>🍞 Panadería</li>
            <li>🥩 Carnes</li>
            <li>🥤 Bebidas</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Información</h3>
          <ul className="text-sm space-y-1 text-green-300">
            <li>Sobre nosotros</li>
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-green-800 text-center py-4 text-sm text-green-400">
        © 2026 Mercabuena · Hecho con 💚 durante las prácticas
      </div>
    </footer>
  );
}
