const mongoose = require('mongoose');
const Shema = mongoose.Schema;


const newComando = new Shema({
    comando : {type: String},
    descripcion: {type: String},
    ejm: {type: String},
    link: {type: String},
    fecha: { type: Date, default: Date.now},
});

module.exports= mongoose.model('comando', newComando);