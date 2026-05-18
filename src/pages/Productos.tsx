// src/pages/Productos.tsx
// Catálogo completo de productos con filtros y búsqueda.

import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useProductos } from '../hooks/useProductos';
import { ProductCard } from '../components/ProductCard';

const categorias = ['Frutas y verduras', 'Lácteos', 'Panadería', 'Carnes', 'Bebidas'];

export function Productos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaActiva = searchParams.get('categoria') || '';
  const busqueda = searchParams.get('buscar') || '';
  const estado = useProductos();

  // Filtramos los productos según categoría y búsqueda
  const productosFiltrados = useMemo(() => {
    if (estado.estado !== 'exito') return [];
    return estado.datos.filter(p => {
      const coincideCategoria = categoriaActiva ? p.categoria === categoriaActiva : true;
      const coincideBusqueda = busqueda ? p.nombre.toLowerCase().includes(busqueda.toLowerCase()) : true;
      return coincideCategoria && coincideBusqueda;
    });
  }, [estado, categoriaActiva, busqueda]);

  function seleccionarCategoria(cat: string) {
    const params = new URLSearchParams(searchParams);
    if (cat === categoriaActiva) {
      params.delete('categoria');
    } else {
      params.set('categoria', cat);
    }
    setSearchParams(params);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {busqueda ? `Resultados para "${busqueda}"` : 'Todos los productos'}
      </h1>

      <div className="flex gap-8">
        {/* Sidebar de filtros */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <h2 className="font-semibold text-gray-700 mb-3">Categorías</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSearchParams({})}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!categoriaActiva ? 'bg-green-700 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                Todas
              </button>
            </li>
            {categorias.map(cat => (
              <li key={cat}>
                <button
                  onClick={() => seleccionarCategoria(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${categoriaActiva === cat ? 'bg-green-700 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid de productos */}
        <div className="flex-1">
          {estado.estado === 'cargando' && (
            <div className="text-center py-12 text-gray-500">⏳ Cargando productos...</div>
          )}

          {estado.estado === 'error' && (
            <div className="text-center py-12 text-red-500">❌ {estado.mensaje}</div>
          )}

          {estado.estado === 'exito' && (
            <>
              <p className="text-sm text-gray-500 mb-4">{productosFiltrados.length} productos encontrados</p>
              {productosFiltrados.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No se encontraron productos.</p>
                  <Link to="/productos" className="text-green-700 hover:underline">Ver todos los productos</Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productosFiltrados.map(producto => (
                    <ProductCard key={producto.id} producto={producto} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
