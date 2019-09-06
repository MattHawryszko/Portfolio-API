"use strict";

var mongoose = require('mongoose');

var dbName = "matts-portfolio";
var dbUser = "portfolio_admin";
var dbPassword = "HHEHDRjMLqdgvBFK";
var dbServer = "portfolio-7dwgj.mongodb.net/test";
var dbPort = "27017";
var dbAuthSource = "admin";

var dbConnectionString = "mongodb+srv://" + dbUser + ":" + dbPassword + "@" + dbServer + ":" + dbPort + "/" + dbName + "?authSource=" + dbAuthSource;

mongoose.connect(dbConnectionString, {
    "useNewUrlParser": true,
    "useCreateIndex": true
});
//# sourceMappingURL=mongoose.js.map