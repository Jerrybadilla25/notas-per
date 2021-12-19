const Tema = require('../model/tema.model');
const User = require('../model/user.model');


exports.addTema = async function(req, res){
        const id = req.params.id;
        const {tema, descripcion} = req.body;
        const tema1 = new Tema({tema, descripcion});
        const userId = await User.findById(id);
        await tema1.save();
        userId.temas.push(tema1._id);
        await userId.save();
        let msj = {"mesage": `El tema ${tema} ha sido creado`};
        res.status(200).json(msj);
    
};


exports.getTema = async function (req, res){
        const temas = await User.findById(req.params.id).populate('temas');
        res.json(temas.temas);
};


exports.addComando = async function(req, res){
        const {comando, descripcion, ejm, link} = req.body;
        const tema1 = await Tema.findById(req.params.id);
        tema1.comandos.push({comando, descripcion, ejm, link});
        await tema1.save();
        res.json(tema1);
};
