const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(dataPath, "utf8")
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: "Error interno del servidor" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(dataPath, "utf8")
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.find((u) => u._id === id);

      if (!user) {
        return res.status(404).send({ message: "ID de usuario no encontrado" });
      }

      res.send(user);
    })
    .catch(() => {
      res.status(500).send({ message: "Error interno del servidor" });
    });
});

module.exports = router;
