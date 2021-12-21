const express = require("express");
const router = express.Router();

const Controller = require('../controller/temas.controller');
const verfyToken = require('../auth/token');


router.post('/comando/:id', verfyToken, Controller.addComando);
router.post('/temas/:id',verfyToken,  Controller.addTema);



router.get('/comando/:id',verfyToken, Controller.getComando);
router.get('/temas/:id',verfyToken,  Controller.getTema);


router.put('/comando/:idtema/:idcomando',verfyToken, Controller.editComando );



module.exports = router;