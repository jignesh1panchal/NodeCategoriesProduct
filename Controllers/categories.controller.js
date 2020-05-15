const DB = require("../Models/connect");
const Categories = DB.CategoriesModel;

exports.create = (req, res) => {

  // Validate request
  if (!req.body.name || !req.body.parent || !req.body.category) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a category
  const CategoriesData = new Categories({
    name: req.body.name,
    parent: req.body.parent,
    category: req.body.category
  });

  // Save category in the database
  CategoriesData
    .save(CategoriesData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categories."
      });
    });
};

exports.getAll = (req, res) => {
    condition = [{$graphLookup : { from: 'categories', startWith: '$category', connectFromField: 'category', connectToField: 'parent', as: 'child_categories' }}];
    Categories.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Categories."
        });
      });
  };