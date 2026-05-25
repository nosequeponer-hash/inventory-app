# Arquitectura y diseño de Mercabuena

## Estructura de componentes

```
App
├── Header (logo, buscador, carrito)
├── Pages
│   ├── Home (hero, categorías, productos destacados)
│   ├── Productos (catálogo con filtros)
│   ├── DetalleProducto (información completa del producto)
│   ├── Carrito (lista de items, resumen y total)
│   └── NotFound (página 404)
└── Footer
```

## Gestión del estado

El estado global del carrito se gestiona con **Context API** (`CarritoContext`). Se eligió Context sobre otras soluciones porque es la solución nativa de React, sin dependencias externas, y es suficiente para la complejidad de esta aplicación.

El estado local de cada página (carga, error, filtros) se gestiona con `useState` y `useEffect`.

## Diseño del backend

### Endpoints disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/productos` | Lista todos los productos |
| GET | `/api/v1/productos/:id` | Obtiene un producto por ID |
| GET | `/api/v1/categorias` | Lista todas las categorías |

### Arquitectura por capas

- **Routes:** mapean URLs a controladores
- **Controllers:** extraen datos de la petición y responden HTTP
- **Services:** contienen la lógica de negocio

## Flujo de datos

```
Usuario → Frontend (React) → fetch → Backend (Express) → Service → Datos en memoria
                          ←  JSON  ←                   ←         ←
```

## Persistencia

Los datos de productos y categorías viven en memoria en el servidor. El carrito se gestiona en el cliente con Context API (no se persiste entre sesiones, lo que es una mejora futura).
