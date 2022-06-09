const { Schema, model } = require("mongoose");

const campos = {
    nombre:String,
    rol:{
        type:String,
        required:[true,"el rol es requerido"],
    },
    presente:{
        type:Boolean,
        default:true
    }
}

const esquema = new Schema(campos);

module.exports = model("student",esquema);
