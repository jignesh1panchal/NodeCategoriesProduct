const DB = require("../Models/connect");
const Products = DB.ProductsModel;

exports.create = (req, res) => {

    // Validate request
    if (!req.body.name || !req.body.cost || !req.body.currency || !req.body.categories || !req.body.categories.length) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a category
    const ProductsData = new Products({
        name: req.body.name,
        cost: req.body.cost,
        currency: req.body.currency,
        categories: req.body.categories
    });

    // Save category in the database
    ProductsData
        .save(ProductsData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Products."
            });
        });
};

exports.getProductByCategories = (req, res) => {

    // Validate request
    if (!req.query.categories) {
        res.status(400).send({ message: "Categories can not be empty!" });
        return;
    }
    const categories = req.query.categories.split(",");
    condition = { categories: { "$in": categories } };
    console.log(condition);
    Products.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Product with id=${id}. Maybe Product was not found!`
                });
            } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Products with id=" + id
            });
        });
};