const Usuarios = require('../model/user.model');
const jwt = require("jsonwebtoken");


exports.getUser = async function(req, res){
  const userID = await Usuarios.findOne({ email: req.body.email }).populate('temas');
  if (!userID) {
    console.log("estoy en 1");
    return res.json({ message: "Datos invalidos" });
  }
  try {
    if (userID) {
      const match = await userID.matchPassword(
        req.body.password,
        userID.password
      );
      if (!match) {
        console.log("estoy en 2");
        return res.json({ message: "la contraseña no coincide" });
      }
      //generar toquen
      const token = jwt.sign({ id: userID._id }, process.env.SECRET, {
        expiresIn: 86400, // 24 horas
      });
      console.log("estoy en 3");
      const {user, _id, email} = userID;
      res.status(200).json({ token, user, _id, email});
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addUser = async function(req, res){
  const userData = await Usuarios.findOne({ email: req.body.email });
    if (userData) {
      res.json({
        message: `El correo ${userData.email} ya esta registrado en la base de datos`,
      });
    } else {
      const { user, email, password } = req.body;
      const task = new Usuarios({
        user,
        email,
        password,
      });
      task.password = await task.encryptPassword(password);
      const userNew = await task.save();
      //generar toquen
      const token = jwt.sign({ id: user._id }, "secretoaqui", {
        expiresIn: 86400, // 24 horas
      });
      const {_id} = userNew;
      res.status(200).json({ token, user, _id, email });
    }
}

