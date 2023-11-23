const express = require('express')
const mongoose = require('mongoose')
const coursesModel = require('../models/coursesModel')
const router = express.Router()

//definir rutas de courses con el routeador
router.get('/', async (req , res) => {
    //seleccionar todos los 
    //courses en la collection
    try {
        const courses =
            await coursesModel.find()
        if(courses.length == 0 ) {
            res.
                status(400).
                json({
                    success: false,
                    msg: "no hay courses en la coleccion"
            })

        }else{
            res.
            status(200).
            json({
                success: true,
                data: courses
        })
        }
    } catch (error) {
        res.status(error.status).json({
            success: false,
            msg: error.message
        })
    }
    

})

//seleccionar courses por id
router.get('/:id' , async (req , res) => {
    try {
        coursesid = req.params.id
        //validar el id suministrado
        if(!mongoose.Types.ObjectId.isValid(coursesid)){
            res.status(400).json({
                success:false,
                msg: "el id no es valido"
            })
        }else{
            selected_courses = await coursesModel.
                        findById(coursesid)

        if(selected_courses){
            //se encontro el course
            res.status(200).json({
                success:true,
                results: selected_courses
            })
        }else{
            //no se encontro el curso
            res.status(400).json({
                success:false,
                msg: `no se encontro ningun course ${coursesid}` 
            })
        }
    //enviar respuesta
    }
        
    }catch (error) {
        res.status(500).json(
            {
                success: false,
                msg: error.message

            })
    }
    
})

//crear courses
router.post('/' , async (req , res)=>{
    try {
        const newCourses = await coursesModel.
                            create(req.body)
    res.status(201).json({
        success: true,
        results: newCourses
    })
} catch (error) {
    res.status(500).json({ 
        success: false,
        msg: error.message 
        })
    }
})

router.put('/:id' , async(req, res) => { 
    try {
        coursesid = req.params.id
        //validar el id suministrado
        if(!mongoose.Types.ObjectId.isValid(coursesid)){
            res.status(400).json({
                success:false,
                msg: "el id no es valido"
        })
    }else{
        selected_courses = await coursesModel.
                            findByIdAndUpdate(coursesid, 
                                req.body,
                                        {
                                            new: true
                                        })


    if(selected_courses){
        //se encontro el course
        res.status(200).json({
            success:true,
            results: selected_courses
        })
    }else{
        //no se encontraron los courses
        res.status(400).json({
            success:false,
            msg: `no se encontro el course ${coursesid}` 
        })
    }
//enviar respuesta
}
    
    }catch (error) {
        res.status(500).json(
            {
                success: false,
                msg: error.message

        })
}

})

router.delete('/:id' , async (req, res) =>{
    
try {
    coursesid = req.params.id
    //validar el id suministrado
    if(!mongoose.Types.ObjectId.isValid(coursesid)){
        res.status(400).json({
            success:false,
            msg: "el id no es valido"
        })
    }else{
        selected_courses = await coursesModel.
                    findByIdAndDelete(coursesid)

    if(selected_courses){
        //se encontro el course
        res.status(200).json({
            success:true,
            results: selected_courses
        })
    }else{
        //no se encontro el course
        res.status(400).json({
            success:false,
            msg: `no se encontraron los courses ${coursesid}` 
        })
    }
//enviar respuesta
}
    
}catch (error) {
    res.status(500).json(
        {
            success: false,
            msg: error.message

        })
}

})

//exportar routedor
module.exports = router