const { response, request } = require("express");
const estudiante = require("../models/estudiantes");

const mostrar = (req = request, res = response, next) => {
    estudiante.find({})
        .then(est => res.json(est))
        .catch(next)
}

const insertar = (req = request, res = response, next) => {
    estudiante.create(req.body)
        .then(est => res.json(est))
        .catch(next)
}

const modificar = async(req = request, res = response, next) => {
    await estudiante.findByIdAndUpdate(req.params.id,req.body)
    estudiante.findById(req.params.id)
        .then(est => res.json(est))
        .catch(next)
}

const eliminar = (req = request, res = response, next) => {
    estudiante.findByIdAndDelete(req.params.id)
        .then(est => res.json(est))
        .catch(next)
}

module.exports = {
    mostrar,insertar,modificar,eliminar
}
