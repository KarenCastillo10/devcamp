const mongoose = require('mongoose')

//Definir el Schema
//Plano general de todo bootcamp

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "nombre requerido" ],
        unique : [ true , "nombre repetido"]
    },
    phone:{
        type: Number,
        required: [ true, "telefono requerido" ],
        max : [ 4444444444 , "telefono muy largo"]
    },
    address:{
        type: String,
        required: [ true, "direccion requerida" ],
        maxlength : [ 20 , "direccion muy larga"],
        minlength : [ 10 , "direccion muy corta"]
    },
    topics:{
        type: [ String ],
        enum: [ "AI" ,
                "Backend" , 
                "Frontend" , 
                "Devops"
            ]
    },
    createdAt: Date
})

//exportar el modelo 
const bootcampModel = mongoose
                .model("Bootcamp" , 
                 bootcampSchema)

module.exports = bootcampModel