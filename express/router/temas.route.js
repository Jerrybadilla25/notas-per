const express = require("express");
const router = express.Router();

const Controller = require('../controller/temas.controller');
const verfyToken = require('../auth/token');


router.post('/addtema/:id', verfyToken, Controller.addTema);
router.get('/temaget/:id', verfyToken,  Controller.getTema);

router.post('/comandoAdd/:id', verfyToken, Controller.addComando);
//router.get('/comandoGet/:id', );

module.exports = router;