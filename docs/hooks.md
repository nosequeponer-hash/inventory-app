# Documentación de hooks

## useProductos (custom hook)

**Archivo:** `src/hooks/useProductos.ts`

Hook personalizado que carga los productos desde la API y gestiona los tres estados de red: cargando, éxito y error. Incluye una bandera `cancelado` para evitar actualizar el estado si el componente se desmonta antes de que llegue la respuesta.

**Retorna:** `EstadoRed<Producto[]>` — unión discriminada con los tres estados posibles.

---

## useState

Usado en múltiples componentes para gestionar estado local:
- `Header`: texto del buscador
- `DetalleProducto`: producto cargado, estado de carga, error, y si se acaba de añadir al carrito
- `CarritoContext`: array de items del carrito

---

## useEffect

Usado en `DetalleProducto` para cargar el producto cuando cambia el ID de la URL. Incluye limpieza para evitar actualizaciones en componentes desmontados.

---

## useMemo

Usado en `Productos` para calcular los productos filtrados. Evita recalcular el filtro en cada render si los datos y los parámetros de búsqueda no han cambiado.

---

## useCallback

Usado en `CarritoContext` para memorizar las funciones `añadirProducto`, `eliminarProducto`, `cambiarCantidad` y `vaciarCarrito`, evitando que se creen nuevas referencias en cada render.
