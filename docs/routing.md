# Documentación de rutas

## Estructura de rutas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Home` | Página de inicio con hero y productos destacados |
| `/productos` | `Productos` | Catálogo completo con filtros |
| `/productos?categoria=X` | `Productos` | Catálogo filtrado por categoría |
| `/productos?buscar=X` | `Productos` | Resultados de búsqueda |
| `/productos/:id` | `DetalleProducto` | Detalle de un producto |
| `/carrito` | `Carrito` | Carrito de la compra |
| `*` | `NotFound` | Página 404 |

## Configuración

Las rutas se configuran con React Router en `src/App.tsx` usando `BrowserRouter`, `Routes` y `Route`.

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/productos/:id" element={<DetalleProducto />} />
    <Route path="/carrito" element={<Carrito />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

## Parámetros de URL

La página de productos usa `useSearchParams` para leer los parámetros `categoria` y `buscar` directamente de la URL, lo que permite compartir enlaces con filtros aplicados.
