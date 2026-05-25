# Pruebas manuales

## Funcionalidades probadas

| Prueba | Resultado |
|--------|-----------|
| Página de inicio carga correctamente | ✅ |
| Los productos destacados se muestran | ✅ |
| Las categorías del hero son clicables | ✅ |
| El catálogo muestra todos los productos | ✅ |
| El filtro por categoría funciona | ✅ |
| El buscador filtra por nombre | ✅ |
| La página de detalle carga el producto | ✅ |
| Añadir al carrito desde la tarjeta | ✅ |
| Añadir al carrito desde el detalle | ✅ |
| El contador del carrito se actualiza | ✅ |
| Cambiar cantidad en el carrito | ✅ |
| Eliminar producto del carrito | ✅ |
| Vaciar el carrito | ✅ |
| Producto sin stock muestra mensaje | ✅ |
| URL inexistente muestra página 404 | ✅ |
| Diseño responsive en móvil | ✅ |
| El servidor devuelve 404 para producto inexistente | ✅ |

## Errores encontrados y corregidos

- Las imágenes de productos con URL caída muestran una imagen de sustitución gracias al manejador `onError`.
- La doble extensión en algunos archivos (`.ts.ts`, `.js.js`) fue corregida durante el desarrollo.
