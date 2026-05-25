# Capa de red y cliente de API

## Cliente de API tipado

**Archivo:** `src/api/client.ts`

Todas las peticiones HTTP al backend pasan por este módulo. Cada función devuelve datos fuertemente tipados con TypeScript, alineados con las interfaces definidas en `src/types/index.ts`.

La URL base se lee de la variable de entorno `VITE_API_URL`, con `http://localhost:3000` como valor por defecto para desarrollo local.

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

## Funciones disponibles

| Función | Retorno | Descripción |
|---------|---------|-------------|
| `getProductos()` | `Promise<Producto[]>` | Obtiene todos los productos |
| `getProducto(id)` | `Promise<Producto>` | Obtiene un producto por ID |
| `getCategorias()` | `Promise<Categoria[]>` | Obtiene todas las categorías |

## Gestión de estados de red

La UI gestiona tres estados usando el tipo `EstadoRed<T>` (unión discriminada):

- **Cargando:** muestra un spinner o mensaje de espera
- **Éxito:** renderiza los datos
- **Error:** muestra un mensaje descriptivo al usuario

```typescript
type EstadoRed<T> =
  | { estado: 'cargando' }
  | { estado: 'exito'; datos: T }
  | { estado: 'error'; mensaje: string };
```

## Contrato de tipos

Los tipos del frontend están alineados con las respuestas del backend:

```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen: string;
  descripcion: string;
  categoriaId: number;
  categoria: string;
}
```
