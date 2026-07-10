# 🚀 Web Project Around - Express API

Este es el servidor backend para el proyecto "Around the U.S.", construido con **Node.js** y **Express**.
Actualmente, esta API sirve datos en formato JSON para usuarios y tarjetas mediante un enfoque modular, utilizando el sistema de archivos (`fs`) nativo de Node.

## 🛠️ Tecnologías y Herramientas Usadas

- **Node.js** (Entorno de ejecución)
- **Express.js** (Framework para el servidor)
- **Nodemon** (Hot reload para desarrollo)
- **ESLint** (Linter configurado con la guía de estilo de Airbnb)

## 📂 Estructura del Proyecto

- `/data`: Contiene los archivos JSON que actúan como base de datos temporal (`users.json`, `cards.json`).
- `/routes`: Contiene los enrutadores modulares de la API (`users.js`, `cards.js`).
- `app.js`: Archivo principal y punto de entrada del servidor.

## 💻 Instrucciones para ejecutar el proyecto en local

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando:
   `npm install`
3. Para levantar el servidor en modo desarrollo (con hot-reload), ejecuta:
   `npm run dev`
4. El servidor estará corriendo en `http://localhost:3000`.

## 🌐 Rutas Disponibles (Endpoints)

- `GET /users` - Devuelve la lista de todos los usuarios.
- `GET /users/:id` - Devuelve un usuario específico según su ID.
- `GET /cards` - Devuelve la lista de todas las tarjetas.
