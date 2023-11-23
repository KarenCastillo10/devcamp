const mongoose = require('mongoose')

const conectarDB = async () => {
    const conn = await mongoose.connect(
            'mongodb://127.0.0.1:27017/devcamp-2687340'
        )
        console.log("mongodb conectado".bgGreen.blue)    
}

module.exports=conectarDB