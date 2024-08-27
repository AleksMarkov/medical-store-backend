//Orders.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: String,
  photo: String,
  name: String,
  address: String,
  products: String,
  price: String,
  status: String,
  order_date: String,
});

module.exports = mongoose.model("Order", orderSchema);
