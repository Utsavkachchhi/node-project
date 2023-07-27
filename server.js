const express = require('express')
const app = express();




const port = 3000;
app.use(express.json());


app.use('/',(req,res) => {
    res.send('Post Protection BE is working');
});


app.listen(port, () => {
    console.log(`App running on port: ${port}`)
});