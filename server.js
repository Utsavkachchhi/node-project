const dotenv = require('dotenv');
dotenv.config();
global._ = require('lodash');
global.Path = require('path');
global.Fs = require('fs-extra');
const cors = require('cors');
const express = require('express');
const app = express();



require('./config/config');
global.Models = require('./models');
const port = Config.get("App").PORT ||  3000;
app.use(express.json());


app.use('/',(req,res) => {
    res.send('Utsav Project is working');
});


app.listen(port, () => {
    console.log(`App running on port: ${port}`)
});