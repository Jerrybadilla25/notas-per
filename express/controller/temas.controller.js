const Tema = require("../model/tema.model");
const User = require("../model/user.model");
const Comando = require("../model/comando.model");

exports.addTema = async function (req, res) {
  const id = req.params.id;
  const { tema, descripcion } = req.body;
  const tema1 = new Tema({ tema, descripcion });
  const userId = await User.findById(id);
  await tema1.save();
  userId.temas.push(tema1._id);
  await userId.save();
  let msj = { mesage: `El tema ${tema} ha sido creado` };
  res.status(200).json(msj);
};


exports.getTema = async function (req, res) {
  const temas = await User.findById(req.params.id).populate("temas");
  res.json(temas.temas);
};


exports.addComando = async function (req, res) {
  const id = req.params.id;
  const { comando, descripcion, ejm, link } = req.body;
  const comando1 = new Comando({comando, descripcion, ejm, link  });
  await comando1.save();
  const tema1 = await Tema.findById(id);
  tema1.comandos.push(comando1._id);
  await tema1.save();
  res.json({mesage: "Comando gardado correctamente"});
};

exports.getComando = async function (req, res){
  const idtema = req.params.id;
  const tema = await Tema.findById(idtema).populate('comandos');
  res.json(tema);
}


exports.editComando = async function (req, res) {
  const idcomando = req.params.idcomando;
  const idtema = req.params.idtema;
  const datos = req.body;
  const comando = await Comando.findOneAndUpdate(idtema, datos);
  res.json({mesage: "Doc editado"});
};

