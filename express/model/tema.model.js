const mongoose = require('mongoose');
const Shema = mongoose.Schema;





const newTema = new Shema({
    tema : {type: String},
    order : {type: Number},
    descripcion: {type: String},
    fecha: { type: Date, default: Date.now},
    comandos: [{
        comando : {type: String},
        descripcion: {type: String},
        ejm: {type: String},
        link: {type: String},
        fecha: { type: Date, default: Date.now} 
    }]
});


module.exports= mongoose.model('temas', newTema);