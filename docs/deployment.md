# Despliegue

## Frontend en Vercel

El frontend está desplegado en Vercel conectado al repositorio `inventory-app` de GitHub. Vercel detecta automáticamente que es un proyecto Vite y lo despliega correctamente.

### Variable de entorno en Vercel

En el panel de Vercel → Settings → Environment Variables se añade:

- **Key:** `VITE_API_URL`
- **Value:** URL del backend desplegado

### Pasos realizados

1. Conectar el repositorio `inventory-app` con Vercel
2. Importar el proyecto desde Vercel
3. Añadir la variable de entorno `VITE_API_URL`
4. Desplegar

## Backend en Vercel

El backend se despliega desde la carpeta `server/` del mismo repositorio usando un archivo `vercel.json`.

### Variable de entorno del backend

- **Key:** `PORT`
- **Value:** `3000`

## URLs del proyecto

- **Frontend:** _(añadir URL de Vercel aquí)_
- **Backend:** _(añadir URL de Vercel aquí)_
