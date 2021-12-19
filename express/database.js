const mongoose = require('mongoose');
require('dotenv').config();


const URI = process.env.URI1;

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    autoIndex: false
})
.then(db => console.log('db is runnig, mongoDB Atlas'))
.catch(err => console.error(err));

module.exports = mongoose;