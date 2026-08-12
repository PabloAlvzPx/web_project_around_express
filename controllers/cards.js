const Card = require("../models/card");

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: "Error por defecto" }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .send({ message: "Se pasaron datos inválidos al crear la tarjeta" });
      }
      res.status(500).send({ message: "Error por defecto" });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => {
      const error = new Error("Tarjeta no encontrada");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.message });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de tarjeta inválido" });
      }
      res.status(500).send({ message: "Error por defecto" });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error("Tarjeta no encontrada");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.statusCode === 404)
        return res.status(404).send({ message: err.message });
      if (err.name === "CastError")
        return res.status(400).send({ message: "ID de tarjeta inválido" });
      res.status(500).send({ message: "Error por defecto" });
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error("Tarjeta no encontrada");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.statusCode === 404)
        return res.status(404).send({ message: err.message });
      if (err.name === "CastError")
        return res.status(400).send({ message: "ID de tarjeta inválido" });
      res.status(500).send({ message: "Error por defecto" });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
