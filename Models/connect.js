const DBConfig = require("../config/DB.config.js");

const Mongoose = require("Mongoose");
Mongoose.Promise = global.Promise;

const DB = {};
DB.mongoose = Mongoose;
DB.url = DBConfig.url;
DB.CategoriesModel = require("./categories.model.js")(Mongoose);
DB.ProductsModel = require("./products.model.js")(Mongoose);

module.exports = DB;