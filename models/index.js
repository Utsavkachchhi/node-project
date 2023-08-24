global.Mongoose = require('mongoose');

//Database connection
Mongoose.connect(Config.get('Database').URL, {
    useNewUrlParser: true
}).then(() => {  
    console.log("Successfully connected to the database");
    
}).catch(err => {  
    console.log('Could not connect to the database.', err);  
    process.exit();
});

let database = {}

Fs.readdirSync(__dirname)
    .filter(function(file) {
        return file.indexOf('.') !== 0 && file !== 'server.js';
    })
    .forEach(function(file)  {
        var file_name = file.split('.')[0];
        var model = require(Path.join(__dirname, file));
        database[file_name] = model;
    });

    module.exports = database;