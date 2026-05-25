# Mercabuena 🛒

Supermercado online desarrollado como proyecto final de prácticas en Corner Studios. Aplicación fullstack con React + TypeScript + Tailwind en el frontend y Node.js + Express en el backend.

## 🌐 URLs del proyecto

- **Frontend:** _(añadir URL de Vercel aquí)_
- **Backend API:** _(añadir URL de Vercel aquí)_

## 📋 Tablero Trello

https://trello.com/b/k13NX7bf/mi-tablero-de-trello

## ✨ Funcionalidades

- 🏠 Página de inicio con hero y productos destacados
- 📦 Catálogo completo de productos
- 🔍 Buscador de productos en tiempo real
- 🏷️ Filtro por categorías
- 📄 Página de detalle de cada producto
- 🛍️ Carrito de la compra con gestión de cantidades
- 📱 Diseño responsive (móvil y escritorio)
- ❌ Página 404 personalizada

## 🛠️ Tecnologías

**Frontend:**
- React 19 + TypeScript
- Tailwind CSS
- React Router
- Context API

**Backend:**
- Node.js + Express
- Arquitectura por capas (routes, controllers, services)

**Despliegue:**
- Vercel

## 📁 Estructura del proyecto

```
inventory-app/
├── src/
│   ├── api/          # Cliente de API tipado
│   ├── components/   # Componentes reutilizables
│   ├── context/      # Context API (carrito)
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Páginas de la aplicación
│   ├── types/        # Tipos TypeScript
│   └── utils/        # Utilidades
├── server/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       └── services/
└── docs/             # Documentación completa
```

## 🚀 Cómo ejecutarlo en local

1. Clona el repositorio:
```bash
git clone https://github.com/nosequeponer-hash/inventory-app.git
cd inventory-app
```

2. Instala dependencias del frontend:
```bash
npm install
```

3. Instala dependencias del backend:
```bash
cd server
npm install
```

4. Crea el archivo `server/.env`:
```
PORT=3000
```

5. Arranca el backend:
```bash
cd server
npm run dev
```

6. Arranca el frontend (en otra terminal):
```bash
npm run dev
```

7. Abre `http://localhost:5173/`

## 📚 Documentación

Toda la documentación técnica está en la carpeta `docs/`:

| Archivo | Contenido |
|---------|-----------|
| `agile.md` | Metodologías ágiles |
| `idea.md` | Descripción del proyecto |
| `project-management.md` | Organización con Trello |
| `design.md` | Arquitectura y diseño |
| `components.md` | Documentación de componentes |
| `hooks.md` | Documentación de hooks |
| `context.md` | Documentación del contexto |
| `routing.md` | Estructura de rutas |
| `forms.md` | Formularios |
| `api.md` | Endpoints de la API |
| `api-client.md` | Capa de red y tipos |
| `testing.md` | Pruebas manuales |
| `deployment.md` | Proceso de despliegue |
| `retrospective.md` | Reflexión final |
