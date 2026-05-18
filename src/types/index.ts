// src/types/index.ts
// Tipos centralizados de la aplicación Mercabuena.

export interface Categoria {
  id: number;
  nombre: string;
  emoji: string;
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen: string;
  descripcion: string;
  categoriaId: number;
  categoria: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

// Estados de red
export type EstadoRed<T> =
  | { estado: 'cargando' }
  | { estado: 'exito'; datos: T }
  | { estado: 'error'; mensaje: string };
