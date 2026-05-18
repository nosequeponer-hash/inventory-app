// src/api/client.ts
// Cliente de API tipado para comunicarse con el backend.

import type { Producto, Categoria } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Obtiene todos los productos del servidor.
 */
export async function getProductos(): Promise<Producto[]> {
  const res = await fetch(`${API_URL}/api/v1/productos`);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
}

/**
 * Obtiene un producto por su ID.
 */
export async function getProducto(id: number): Promise<Producto> {
  const res = await fetch(`${API_URL}/api/v1/productos/${id}`);
  if (!res.ok) throw new Error('Producto no encontrado');
  return res.json();
}

/**
 * Obtiene todas las categorías.
 */
export async function getCategorias(): Promise<Categoria[]> {
  const res = await fetch(`${API_URL}/api/v1/categorias`);
  if (!res.ok) throw new Error('Error al obtener categorías');
  return res.json();
}
