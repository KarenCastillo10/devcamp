//dependencias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencia de conexion
const conectarDB = require("./config/db")
//definir las dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampRoutes')
const coursesRoutes = require('./routes/coursesRoutes')

//configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//conectar a db
conectarDB()

//crear el objeto de app
//express
const app = express()

//habilitar express para recibir body en formato json
app.use(express.json())

//establecerrutas de proyecto 
app.use('/api/v1/bootcamps', 
            bootcampsRoutes)

app.use('/api/v1/courses', 
            coursesRoutes)

//crear el servidor de aplicaciones express
app.listen( process.env.PUERTO, 
            () => { 
                console.log(`servidor express ejecutando ${process.env.PUERTO}`.bgCyan.yellow.underline)
            }
)

