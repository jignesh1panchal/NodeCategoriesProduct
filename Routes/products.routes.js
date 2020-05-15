module.exports = App => {
    const products = require("../Controllers/products.controller.js");
    var router = require("express").Router();
    
    router.post("/", products.create);
    router.get("/", products.getProductByCategories);
    router.put("/:id",products.update);
    App.use('/api/products', router);
};