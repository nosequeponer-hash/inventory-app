// src/hooks/useProductos.ts
// Hook personalizado para cargar productos desde la API
// con gestión de estados de carga, éxito y error.

import { useState, useEffect } from 'react';
import { getProductos } from '../api/client';
import type { Producto, EstadoRed } from '../types';

export function useProductos() {
  const [estado, setEstado] = useState<EstadoRed<Producto[]>>({ estado: 'cargando' });

  useEffect(() => {
    let cancelado = false;

    getProductos()
      .then(datos => {
        if (!cancelado) setEstado({ estado: 'exito', datos });
      })
      .catch(() => {
        if (!cancelado) setEstado({ estado: 'error', mensaje: 'No se pudieron cargar los productos.' });
      });

    return () => { cancelado = true; };
  }, []);

  return estado;
}
