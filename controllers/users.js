const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: "Error por defecto" }));
};

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => {
      const error = new Error("Usuario no encontrado");
      error.statusCode = 404;
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.message });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de usuario inválido" });
      }
      res.status(500).send({ message: "Error por defecto" });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .send({ message: "Se pasaron datos inválidos al crear el usuario" });
      }
      res.status(500).send({ message: "Error por defecto" });
    });
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      const error = new Error("Usuario no encontrado");
      error.statusCode = 404;
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.statusCode === 404)
        return res.status(404).send({ message: err.message });
      if (err.name === "ValidationError")
        return res
          .status(400)
          .send({ message: "Datos inválidos para actualizar perfil" });
      res.status(500).send({ message: "Error por defecto" });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      const error = new Error("Usuario no encontrado");
      error.statusCode = 404;
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.statusCode === 404)
        return res.status(404).send({ message: err.message });
      if (err.name === "ValidationError")
        return res.status(400).send({ message: "URL de avatar inválida" });
      res.status(500).send({ message: "Error por defecto" });
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateProfile,
  updateAvatar,
};
