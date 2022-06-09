const { Router } = require("express");
const { mostrar, insertar, modificar, eliminar } = require("../controllers/estudiantes.controller");

const router = Router();

router.get('/',mostrar);

router.post('/',insertar);

router.put('/:id?',modificar);

router.delete('/:id?',eliminar);

module.exports = router;
