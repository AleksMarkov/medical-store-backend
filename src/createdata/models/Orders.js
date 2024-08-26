//Orders.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: String,
  photo: String,
  name: String,
  email: String,
  spent: String,
  phone: String,
  address: String,
  register_date: String,
});

module.exports = mongoose.model("Order", orderSchema);
