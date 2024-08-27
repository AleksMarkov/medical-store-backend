//Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  photo: String,
  name: String,
  address: String,
  products: String,
  price: String,
  status: String,
  order_date: String,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
