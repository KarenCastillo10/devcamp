const mongoose = require('mongoose')

//Definir el Schema

const coursesSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: [ true, "title requerido" ],
        maxlength : [ 30 , "titulo muy largo"],
        minlength : [ 10 , "titulo muy corto"]
    },
    description: {
        type: String,
        required: [ true, "description requerida" ],
        max : [ 10 , "description muy larga"]
    },
    weeks: {
        type: Number,
        required: [ true, "semanas requerida" ],
        max : [ 9 , "El numero de semanas es 9"]
    },
    enroll_cost: {
        type: Number,
        required: [ true, "El costo de la inscripcion es requerida" ],

    },
    minimum_skill: {
        type: [ String ],
        enum: [ "Beginner" ,
                "Intermediate" , 
                "Advanced" , 
                "Expert"
            ]
    },
})

//exportar el modelo 
const coursesModel = mongoose
                .model("Courses" , 
                 coursesSchema)

module.exports = coursesModel