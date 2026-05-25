# Documentación del contexto

## CarritoContext

**Archivo:** `src/context/CarritoContext.tsx`

Contexto global que gestiona el estado del carrito de la compra. Permite que cualquier componente de la aplicación pueda añadir, eliminar o modificar productos del carrito sin necesidad de pasar props por varios niveles.

### ¿Cuándo usar Context API?

Context es útil cuando un estado necesita ser accesible desde múltiples componentes en distintos niveles del árbol. En este caso el carrito se muestra en el Header (contador), en ProductCard (botón de añadir), en DetalleProducto y en la página Carrito. Pasar el estado por props a todos estos componentes sería muy complicado, por lo que Context es la solución adecuada.

### Valores expuestos

| Valor | Tipo | Descripción |
|-------|------|-------------|
| `items` | `ItemCarrito[]` | Lista de productos en el carrito |
| `totalItems` | `number` | Número total de artículos |
| `totalPrecio` | `number` | Precio total del carrito |
| `añadirProducto` | `(producto) => void` | Añade un producto o incrementa su cantidad |
| `eliminarProducto` | `(id) => void` | Elimina un producto del carrito |
| `cambiarCantidad` | `(id, cantidad) => void` | Cambia la cantidad de un producto |
| `vaciarCarrito` | `() => void` | Vacía el carrito completo |

### Uso

```tsx
// Envolver la app con el provider
<CarritoProvider>
  <App />
</CarritoProvider>

// Consumir en cualquier componente
const { añadirProducto, totalItems } = useCarrito();
```
