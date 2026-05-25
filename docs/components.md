# Documentación de componentes

## Header

**Archivo:** `src/components/Header.tsx`

Cabecera fija de la aplicación. Contiene el logo con enlace a la home, un buscador que redirige a `/productos?buscar=...` al pulsar Enter, el icono del carrito con un contador de artículos y una barra de navegación de categorías.

**Props:** ninguna (consume el contexto del carrito directamente).

---

## ProductCard

**Archivo:** `src/components/ProductCard.tsx`

Tarjeta reutilizable para mostrar un producto en el catálogo. Muestra la imagen, categoría, nombre, precio y un botón para añadir al carrito. Si el producto no tiene stock muestra un mensaje de "Sin stock" en lugar del botón.

**Props:**
- `producto: Producto` — el producto a mostrar

---

## Footer

**Archivo:** `src/components/Footer.tsx`

Pie de página con información de la tienda, listado de categorías e información legal. No tiene props ni estado.
