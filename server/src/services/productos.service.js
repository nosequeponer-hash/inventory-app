// server/src/services/productos.service.js

const productos = [
  // ── Frutas y verduras ──────────────────────────────────────
  { id: 1,  nombre: 'Manzanas Fuji (1kg)',        precio: 1.99, stock: 50, imagen: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', descripcion: 'Manzanas Fuji frescas de temporada, dulces y crujientes.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 2,  nombre: 'Plátanos de Canarias (1kg)', precio: 1.49, stock: 40, imagen: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', descripcion: 'Plátanos de Canarias con denominación de origen.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 3,  nombre: 'Tomates rama (500g)',         precio: 0.99, stock: 60, imagen: 'https://images.unsplash.com/photo-1546470427-e5380b43b1e0?w=400', descripcion: 'Tomates de rama maduros, perfectos para ensaladas.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 4,  nombre: 'Lechuga iceberg',             precio: 0.79, stock: 30, imagen: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400', descripcion: 'Lechuga iceberg fresca y crujiente.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 16, nombre: 'Naranjas (1kg)',              precio: 1.29, stock: 55, imagen: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400', descripcion: 'Naranjas de Valencia, ideales para zumo o para comer.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 17, nombre: 'Fresas (500g)',               precio: 1.89, stock: 35, imagen: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400', descripcion: 'Fresas frescas de temporada, dulces y jugosas.', categoriaId: 1, categoria: 'Frutas y verduras' },
  { id: 18, nombre: 'Sandía (unidad)',             precio: 3.49, stock: 20, imagen: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400', descripcion: 'Sandía entera fresca, perfecta para el verano.', categoriaId: 1, categoria: 'Frutas y verduras' },

  // ── Lácteos ────────────────────────────────────────────────
  { id: 5,  nombre: 'Leche entera (1L)',           precio: 0.89, stock: 100, imagen: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', descripcion: 'Leche entera fresca de vaca, rica en calcio.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 6,  nombre: 'Yogur natural (pack 4)',      precio: 1.29, stock: 80,  imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', descripcion: 'Yogur natural sin azúcares añadidos.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 7,  nombre: 'Queso manchego curado (200g)',precio: 3.49, stock: 25,  imagen: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a318?w=400', descripcion: 'Queso manchego curado con denominación de origen.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 19, nombre: 'Queso en lonchas (200g)',     precio: 1.69, stock: 60,  imagen: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=400', descripcion: 'Lonchas de queso suave, perfectas para bocadillos.', categoriaId: 2, categoria: 'Lácteos' },
  { id: 20, nombre: 'Queso de cabra (rulo)',       precio: 2.29, stock: 30,  imagen: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400', descripcion: 'Rulo de queso de cabra cremoso, ideal para ensaladas.', categoriaId: 2, categoria: 'Lácteos' },

  // ── Panadería ──────────────────────────────────────────────
  { id: 8,  nombre: 'Pan de molde integral',          precio: 1.49, stock: 45, imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', descripcion: 'Pan de molde integral, rico en fibra.', categoriaId: 3, categoria: 'Panadería' },
  { id: 9,  nombre: 'Barra de pan',                   precio: 0.39, stock: 20, imagen: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400', descripcion: 'Barra de pan artesanal crujiente.', categoriaId: 3, categoria: 'Panadería' },
  { id: 10, nombre: 'Croissants (pack 4)',             precio: 1.99, stock: 15, imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', descripcion: 'Croissants de mantequilla, horneados diariamente.', categoriaId: 3, categoria: 'Panadería' },
  { id: 21, nombre: 'Pan de hamburguesa (pack 4)',     precio: 1.19, stock: 40, imagen: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400', descripcion: 'Pan de hamburguesa esponjoso, ideal para barbacoas.', categoriaId: 3, categoria: 'Panadería' },
  { id: 22, nombre: 'Pan de perrito caliente (pack 6)',precio: 1.09, stock: 35, imagen: 'https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=400', descripcion: 'Pan de hot dog suave y alargado.', categoriaId: 3, categoria: 'Panadería' },

  // ── Carnes ─────────────────────────────────────────────────
  { id: 11, nombre: 'Pechuga de pollo (500g)',     precio: 3.99, stock: 35, imagen: 'https://images.unsplash.com/photo-1604503468506-a8da13d11f36?w=400', descripcion: 'Pechuga de pollo fresca, sin antibióticos.', categoriaId: 4, categoria: 'Carnes' },
  { id: 12, nombre: 'Carne picada mixta (400g)',   precio: 2.99, stock: 20, imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400', descripcion: 'Carne picada mixta de cerdo y ternera.', categoriaId: 4, categoria: 'Carnes' },
  { id: 23, nombre: 'Hamburguesas (pack 4)',        precio: 3.49, stock: 30, imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', descripcion: 'Hamburguesas de ternera jugosas, listas para la plancha.', categoriaId: 4, categoria: 'Carnes' },
  { id: 24, nombre: 'Salchichas Frankfurt (pack 6)',precio: 1.79, stock: 45, imagen: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400', descripcion: 'Salchichas Frankfurt clásicas, perfectas para perritos.', categoriaId: 4, categoria: 'Carnes' },
  { id: 25, nombre: 'Chorizo en lonchas (150g)',   precio: 1.99, stock: 40, imagen: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400', descripcion: 'Chorizo ibérico en lonchas, sabor intenso.', categoriaId: 4, categoria: 'Carnes' },
  { id: 26, nombre: 'Salchichón en lonchas (150g)',precio: 1.89, stock: 40, imagen: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400', descripcion: 'Salchichón curado en lonchas finas.', categoriaId: 4, categoria: 'Carnes' },
  { id: 27, nombre: 'Pavo en lonchas (200g)',      precio: 1.49, stock: 50, imagen: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400', descripcion: 'Pechuga de pavo cocida en lonchas, baja en grasa.', categoriaId: 4, categoria: 'Carnes' },

  // ── Bebidas ────────────────────────────────────────────────
  { id: 13, nombre: 'Agua mineral (pack 6x1.5L)', precio: 2.49, stock: 90, imagen: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', descripcion: 'Agua mineral natural sin gas.', categoriaId: 5, categoria: 'Bebidas' },
  { id: 14, nombre: 'Zumo de naranja (1L)',        precio: 1.99, stock: 55, imagen: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400', descripcion: 'Zumo de naranja exprimido, sin azúcares añadidos.', categoriaId: 5, categoria: 'Bebidas' },
  { id: 15, nombre: 'Refresco de cola (2L)',       precio: 1.69, stock: 0,  imagen: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400', descripcion: 'Refresco de cola clásico.', categoriaId: 5, categoria: 'Bebidas' },
  { id: 28, nombre: 'Té de limón (pack 20 bolsitas)', precio: 1.49, stock: 60, imagen: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', descripcion: 'Té negro con toque de limón, refrescante y aromático.', categoriaId: 5, categoria: 'Bebidas' },
  { id: 29, nombre: 'Té de mango (pack 20 bolsitas)', precio: 1.49, stock: 60, imagen: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400', descripcion: 'Té verde con aroma tropical de mango.', categoriaId: 5, categoria: 'Bebidas' },
];

const obtenerTodos = () => productos;

const obtenerPorId = (id) => {
  const producto = productos.find(p => p.id === Number(id));
  if (!producto) throw new Error('NOT_FOUND');
  return producto;
};

module.exports = { obtenerTodos, obtenerPorId };
