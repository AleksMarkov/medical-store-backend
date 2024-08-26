//Supplier.js
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  suppliers: String,
  date: String,
  amount: String,
  status: String,
});

module.exports = mongoose.model("Supplier", supplierSchema);
