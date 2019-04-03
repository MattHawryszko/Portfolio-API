const mongoose = require('mongoose')

const dbName = "matts-portfolio"
const dbUser = "admin"
const dbPassword = "abc123"
const dbServer = "167.114.153.227"
const dbPort = "27017"
const dbAuthSource = "admin"

const dbConnectionString = "mongodb://"+dbUser+":"+dbPassword+"@"+dbServer+":"+dbPort+"/"+dbName+"?authSource="+dbAuthSource

mongoose.connect(dbConnectionString, {
    "useNewUrlParser": true,
    "useCreateIndex": true,
})




