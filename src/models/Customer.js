//Customer.js
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  photo: String,
  name: String,
  email: String,
  spent: String,
  phone: String,
  address: String,
  register_date: String,
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
