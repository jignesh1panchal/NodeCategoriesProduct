module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        cost: Number,
        currency: String,
        categories: Array
      },
      { timestamps: true }
    );
  
    const productsModel = mongoose.model("products", schema);
  
    return productsModel;
};