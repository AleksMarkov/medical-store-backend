//Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  suppliers: String,
  stock: String,
  price: String,
  category: String,
  photo: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
