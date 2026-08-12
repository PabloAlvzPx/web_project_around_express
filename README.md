# 🚀 Web Project Around - Express API

Este es el servidor backend para el proyecto "Around the U.S.", construido con **Node.js**, **Express** y **MongoDB**.
Actualmente, esta API sirve datos en formato JSON y utiliza una arquitectura MVC (Model-View-Controller) para gestionar usuarios y tarjetas, interactuando de forma permanente con una base de datos real a través de **Mongoose**.

## 🛠️ Tecnologías y Herramientas Usadas

- **Node.js** (Entorno de ejecución)
- **Express.js** (Framework para el servidor)
- **MongoDB** (Base de datos NoSQL)
- **Mongoose** (ODM para modelado de objetos y validación de datos)
- **Nodemon** (Hot reload para desarrollo)
- **ESLint** (Linter configurado con la guía de estilo de Airbnb)

## 📂 Estructura del Proyecto

- `/controllers`: Contiene la lógica de la base de datos y el manejo de peticiones (`users.js`, `cards.js`).
- `/models`: Define los esquemas y reglas de validación de los datos (`user.js`, `card.js`).
- `/routes`: Contiene los enrutadores modulares de la API (`users.js`, `cards.js`).
- `app.js`: Archivo principal, configuración del middleware y punto de entrada del servidor.

## 💻 Instrucciones para ejecutar el proyecto en local

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando:
   npm install
3. **¡Importante!** Asegúrate de encender tu motor local de MongoDB antes de arrancar la aplicación (usualmente en el puerto `27017`).
4. Para levantar el servidor en modo desarrollo (con hot-reload), ejecuta:
   npm run dev
5. El servidor estará corriendo en `http://localhost:3000` y se conectará automáticamente a la base de datos `aroundb`.

## 🌐 Rutas Disponibles (Endpoints)

### 👤 Usuarios (`/users`)

- `GET /users` — Devuelve la lista de todos los usuarios registrados.
- `GET /users/:userId` — Devuelve un usuario específico según su ID.
- `POST /users` — Crea un nuevo usuario (requiere `name`, `about`, `avatar`).
- `PATCH /users/me` — Actualiza la información del perfil del usuario actual.
- `PATCH /users/me/avatar` — Actualiza la URL del avatar del usuario actual.

### 🖼️ Tarjetas (`/cards`)

- `GET /cards` — Devuelve la lista de todas las tarjetas.
- `POST /cards` — Crea una nueva tarjeta (requiere `name`, `link`).
- `DELETE /cards/:cardId` — Elimina una tarjeta existente según su ID.
- `PUT /cards/:cardId/likes` — Agrega un "like" a la tarjeta.
- `DELETE /cards/:cardId/likes` — Elimina un "like" de la tarjeta.
