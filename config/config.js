let Config = require('config');

if(process.env.DATABASE_URL){
    Config.Database.URL = process.env.DATABASE_URL;
}

global.Config = Config;