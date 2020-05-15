module.exports = App => {
    const categories = require("../Controllers/categories.controller.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", categories.create);
    router.get("/", categories.getAll);
    App.use('/api/categories', router);
};