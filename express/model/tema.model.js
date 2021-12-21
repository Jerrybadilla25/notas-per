const mongoose = require('mongoose');
const Shema = mongoose.Schema;





const newTema = new Shema({
    tema : {type: String},
    order : {type: Number},
    descripcion: {type: String},
    fecha: { type: Date, default: Date.now},
    comandos: [{
        type: Shema.Types.ObjectId,
        ref: "comando"
    }]
});


module.exports= mongoose.model('temas', newTema);