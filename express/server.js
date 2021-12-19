const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

//configuracion
app.set('port', process.env.PORT || 4002 );

//archivos estaticos
app.use(express.static('./build/'));

//import database
const {mongoose} = require('./database');

//middlewear
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//rutas
app.use('/', require('./router/index.route'));
app.use('/api', require('./router/user.route'));
app.use('/api', require('./router/temas.route'));


//configuracion del server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
    
});