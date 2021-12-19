const express = require("express");
const router = express.Router();
require('dotenv').config();

const Controller = require('../controller/user.controller');

//Rutas
router.post("/user/login", Controller.getUser);

router.post("/user/create", Controller.addUser);

module.exports = router;