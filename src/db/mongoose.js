const mongoose = require('mongoose')

const dbName = "matts-portfolio"
const dbUser = "portfolio_admin"
const dbPassword = "HHEHDRjMLqdgvBFK"
const dbServer = "portfolio-7dwgj.mongodb.net/test?retryWrites=true"
const dbPort = "27017"
const dbAuthSource = "admin"

const dbConnectionString = "mongodb+srv://"+dbUser+":"+dbPassword+"@"+dbServer+":"+dbPort+"/"+dbName+"?authSource="+dbAuthSource

mongoose.connect(dbConnectionString, {
    "useNewUrlParser": true,
    "useCreateIndex": true,
})




