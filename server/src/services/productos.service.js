// server/src/services/productos.service.js
// Datos de productos en memoria (simula una base de datos).

const productos = [
  { id: 1, nombre: 'Manzanas Fuji (1kg)', precio: 2.49, stock: 50, imagen: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', descripcion: 'Manzanas Fuji frescas de temporada, dulces y crujientes.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 2, nombre: 'Plátanos de Canarias (1kg)', precio: 1.89, stock: 40, imagen: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', descripcion: 'Plátanos de Canarias con denominación de origen.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 3, nombre: 'Tomates rama (500g)', precio: 1.29, stock: 60, imagen: 'https://images.unsplash.com/photo-1546470427-e5380b43b1e0?w=400', descripcion: 'Tomates de rama maduros, perfectos para ensaladas.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 4, nombre: 'Lechuga iceberg', precio: 0.89, stock: 30, imagen: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400', descripcion: 'Lechuga iceberg fresca y crujiente.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 5, nombre: 'Leche entera (1L)', precio: 0.99, stock: 100, imagen: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', descripcion: 'Leche entera fresca de vaca, rica en calcio.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 6, nombre: 'Yogur natural (pack 4)', precio: 1.49, stock: 80, imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', descripcion: 'Yogur natural sin azúcares añadidos.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 7, nombre: 'Queso manchego curado (200g)', precio: 3.99, stock: 25, imagen: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a318?w=400', descripcion: 'Queso manchego curado con denominación de origen.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 8, nombre: 'Pan de molde integral', precio: 1.69, stock: 45, imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', descripcion: 'Pan de molde integral, rico en fibra.', categoriaId: 3, categoria: 'Panadería' },
  { id: 9, nombre: 'Barra de pan', precio: 0.49, stock: 20, imagen: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400', descripcion: 'Barra de pan artesanal crujiente.', categoriaId: 3, categoria: 'Panadería' },
  { id: 10, nombre: 'Croissants (pack 4)', precio: 2.29, stock: 15, imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', descripcion: 'Croissants de mantequilla, horneados diariamente.', categoriaId: 3, categoria: 'Panadería' },
  { id: 11, nombre: 'Pechuga de pollo (500g)', precio: 4.99, stock: 35, imagen: 'https://images.unsplash.com/photo-1604503468506-a8da13d11f36?w=400', descripcion: 'Pechuga de pollo fresca, sin antibióticos.', categoriaId: 4, categoria: 'Carnes' },
  { id: 12, nombre: 'Carne picada mixta (400g)', precio: 3.49, stock: 20, imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400', descripcion: 'Carne picada mixta de cerdo y ternera.', categoriaId: 4, categoria: 'Carnes' },
  { id: 13, nombre: 'Agua mineral (pack 6x1.5L)', precio: 2.99, stock: 90, imagen: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', descripcion: 'Agua mineral natural sin gas.', categoriaId: 5, categoria: 'Bebidas' },
  { id: 14, nombre: 'Zumo de naranja (1L)', precio: 2.49, stock: 55, imagen: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400', descripcion: 'Zumo de naranja exprimido, sin azúcares añadidos.', categoriaId: 5, categoria: 'Bebidas' },
  { id: 15, nombre: 'Refresco de cola (2L)', precio: 1.99, stock: 0, imagen: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400', descripcion: 'Refresco de cola clásico.', categoriaId: 5, categoria: 'Bebidas' },
];

const obtenerTodos = () => productos;

const obtenerPorId = (id) => {
  const producto = productos.find(p => p.id === Number(id));
  if (!producto) throw new Error('NOT_FOUND');
  return producto;
};

module.exports = { obtenerTodos, obtenerPorId };
