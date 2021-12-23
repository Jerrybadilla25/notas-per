const express = require("express");
const router = express.Router();

const Controller = require('../controller/temas.controller');
const verfyToken = require('../auth/token');


router.post('/comando/:id', verfyToken, Controller.addComando);
router.post('/temas/:id',verfyToken,  Controller.addTema);


router.get('/comando/:id',verfyToken, Controller.getComando);
router.get('/temas/:id',verfyToken,  Controller.getTema);


router.put('/comando/:idcomando',verfyToken, Controller.editComando );
router.put('/tema/:id',verfyToken, Controller.editTema );


router.delete('/comando/:idpadre/:id',verfyToken, Controller.deleteComando );
router.delete('/tema/:iduser/:id', Controller.deleteTema );



module.exports = router;