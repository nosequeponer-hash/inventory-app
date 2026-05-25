# Documentación de formularios

## Buscador del Header

**Archivo:** `src/components/Header.tsx`

Formulario controlado con un único input de texto. El estado del input se gestiona con `useState`. Al hacer submit redirige a `/productos?buscar=...` usando `useNavigate` de React Router.

```tsx
const [busqueda, setBusqueda] = useState('');

function handleBuscar(e: React.FormEvent) {
  e.preventDefault();
  if (busqueda.trim()) {
    navigate(`/productos?buscar=${encodeURIComponent(busqueda.trim())}`);
  }
}
```

**Validación:** se comprueba que el texto no esté vacío antes de redirigir.

---

## Edición de cantidad en el carrito

**Archivo:** `src/pages/Carrito.tsx`

Botones de incremento y decremento que llaman a `cambiarCantidad` del contexto. Si la cantidad llega a 0, el producto se elimina automáticamente del carrito.
