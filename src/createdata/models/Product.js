//Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  photo: String,
  name: String,
  suppliers: String,
  stock: String,
  price: String,
  category: String,
});

module.exports = mongoose.model("Product", productSchema);
