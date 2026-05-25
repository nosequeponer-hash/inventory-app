# Documentación de la API

Base URL local: `http://localhost:3000`

## Endpoints

### GET /api/v1/productos

Devuelve todos los productos disponibles.

**Respuesta 200:**
```json
[
  {
    "id": 1,
    "nombre": "Manzanas Fuji (1kg)",
    "precio": 2.49,
    "stock": 50,
    "imagen": "https://...",
    "descripcion": "Manzanas Fuji frescas de temporada.",
    "categoriaId": 1,
    "categoria": "Frutas y verduras"
  }
]
```

---

### GET /api/v1/productos/:id

Devuelve un producto por su ID.

**Respuesta 200:** objeto producto (mismo formato que arriba)

**Respuesta 404:**
```json
{ "error": "No encontrado" }
```

---

### GET /api/v1/categorias

Devuelve todas las categorías disponibles.

**Respuesta 200:**
```json
[
  { "id": 1, "nombre": "Frutas y verduras", "emoji": "🍎" },
  { "id": 2, "nombre": "Lácteos", "emoji": "🥛" }
]
```

---

## Códigos HTTP utilizados

| Código | Significado |
|--------|-------------|
| 200 | Éxito |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |
