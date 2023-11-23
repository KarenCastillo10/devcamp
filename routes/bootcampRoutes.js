const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const mongoose = require('mongoose')
const router = express.Router()

//definir rutas de bootcamps con el routeador
router.get('/', async (req , res) => {
    //seleccionar todos los 
    //bootcamps en la collection
    try {
        const bootcamps =
            await bootcampModel.find()
        if(bootcamps.length == 0 ) {
            res.
                status(400).
                json({
                    success: false,
                    msg: "no hay bootcamps en la colleccion"
            })

        }else{
            res.
            status(200).
            json({
                success: true,
                data: bootcamps
        })
        }
    } catch (error) {
        res.status(error.status).json({
            success: false,
            msg: error.message
        })
    }
    

})

//seleccionar bootcamps por id
router.get('/:id' , async (req , res) => {
    try {
        bootcampid = req.params.id
        //validar el id suministrado
        if(!mongoose.Types.ObjectId.isValid(bootcampid)){
            res.status(400).json({
                success:false,
                msg: "el id no es valido"
            })
        }else{
            selected_bootcamp = await bootcampModel.
                        findById(bootcampid)

        if(selected_bootcamp){
            //se encontro el bootcamp
            res.status(200).json({
                success:true,
                results: selected_bootcamp
            })
        }else{
            //no se encontro el bootcamp
            res.status(400).json({
                success:false,
                msg: `no se encontro el bootcamp ${bootcampid}` 
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

//crear bootcamp 
router.post('/' , async (req , res)=>{
    try {
        const newBootcamp = await bootcampModel.
                            create(req.body)
    res.status(201).json({
        success: true,
        results: newBootcamp
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
        bootcampid = req.params.id
        //validar el id suministrado
        if(!mongoose.Types.ObjectId.isValid(bootcampid)){
            res.status(400).json({
                success:false,
                msg: "el id no es valido"
        })
    }else{
        selected_bootcamp = await bootcampModel.
                            findByIdAndUpdate(bootcampid, 
                                req.body,
                                        {
                                            new: true
                                        })


    if(selected_bootcamp){
        //se encontro el bootcamp
        res.status(200).json({
            success:true,
            results: selected_bootcamp
        })
    }else{
        //no se encontro el bootcamp
        res.status(400).json({
            success:false,
            msg: `no se encontro el bootcamp ${bootcampid}` 
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
    bootcampid = req.params.id
    //validar el id suministrado
    if(!mongoose.Types.ObjectId.isValid(bootcampid)){
        res.status(400).json({
            success:false,
            msg: "el id no es valido"
        })
    }else{
        selected_bootcamp = await bootcampModel.
                    findById(bootcampid)

    if(selected_bootcamp){
        //se encontro el bootcamp
        res.status(200).json({
            success:true,
            results: selected_bootcamp
        })
    }else{
        //no se encontro el bootcamp
        res.status(400).json({
            success:false,
            msg: `no se encontro el bootcamp ${bootcampid}` 
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


//224 148 4543