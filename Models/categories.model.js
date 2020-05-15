module.exports = mongoose => {

  var schema = mongoose.Schema(
    {
      name: String,
      parent: String,
      category: String
    },
    { timestamps: true }
  );

  const CategoriesModel = mongoose.model("categories", schema);

  return CategoriesModel;
};