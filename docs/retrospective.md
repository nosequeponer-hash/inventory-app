# Retrospectiva final

## Qué aprendí durante el proyecto

Lo más importante que aprendí fue cómo conectar el frontend con el backend. Antes todo vivía en el navegador, pero ahora el frontend hace peticiones a un servidor real y muestra los datos que recibe. También entendí mejor para qué sirve TypeScript: Al definir los tipos de los productos en el frontend y en el backend, es mucho más difícil que haya errores por datos incorrectos.

## Cómo conecté frontend, backend y API

El frontend usa funciones en client.ts que hacen peticiones fetch al servidor Express. El servidor tiene rutas, controladores y servicios separados. Los tipos de TypeScript garantizan que los datos que llegan del servidor tienen la forma correcta.

## Principales problemas encontrados

El problema más llamativo fue que algunos archivos se guardaron con doble extensión (.ts.ts y .js.js) al descargarlos, lo que hacía que el servidor no los encontrara. También la configuración de Tailwind requirió un orden específico en los archivos para funcionar.

## Cómo utilicé la IA durante el desarrollo

Usé IA para entender conceptos nuevos como Context API o los hooks de React. Siempre investigué para entender qué hacía cada parte.

## Reflexión final

Este proyecto me ha servido para ver cómo funciona una aplicación completa de principio a fin. Me gustaría en un futuro añadir un sistema de login, guardar el carrito entre sesiones y conectar una base de datos real en lugar de datos en memoria.
