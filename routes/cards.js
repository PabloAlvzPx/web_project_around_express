const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res) => {
  fs.readFile(dataPath, "utf8")
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: "Error interno del servidor" });
    });
});

module.exports = router;
