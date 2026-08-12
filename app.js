const express = require("express");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const app = express();
const { PORT = 3000 } = process.env;

mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => {
    console.log("¡Conexión exitosa a la base de datos (aroundb)! 🗄️");
  })
  .catch((err) => {
    console.log("Error al conectar a MongoDB", err);
  });

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "6a7b8eec96ea9390e14187fc",
  };
  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`¡Servidor corriendo en el puerto ${PORT}! 🚀`);
});
