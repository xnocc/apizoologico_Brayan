const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animalMode");

//Nuevo animal
router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
