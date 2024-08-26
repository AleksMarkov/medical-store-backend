//Customer.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  id: String,
  image: String,
  name: String,
  email: String,
  spent: String,
  phone: String,
  address: String,
  register_date: String,
});

module.exports = mongoose.model("Customer", customerSchema);
