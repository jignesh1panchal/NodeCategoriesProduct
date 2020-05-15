/**** Library required to build application ****/
require("dotenv/config");
const Express = require("express");
const BodyParser = require("body-parser");


/**** Create App Server ****/
var App = Express();


/***** MongoDB connnection *****/
const MongoDB = require("./Models/connect");
MongoDB.mongoose.connect(MongoDB.url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log("Connected to the database!") })
        .catch(err => { console.log("Cannot connect to the database!", err); process.exit(); });


/**** MiddleWares ****/
App.use(BodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
App.use(BodyParser.json()); // parse requests of content-type - application/json


/***** Routes *****/
require("./Routes/categories.routes")(App);
require("./Routes/products.routes")(App);

App.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});


/**** Listen requests on given port at 3000 ****/
const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
    console.log(`Listening at :${PORT}...`);
});