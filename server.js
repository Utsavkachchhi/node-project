const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();



require('./config/config');
const port = Config.get("App").PORT ||  3000;
app.use(express.json());


app.use('/',(req,res) => {
    res.send('Post Protection BE is working');
});


app.listen(port, () => {
    console.log(`App running on port: ${port}`)
});