//Supplier.js
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: String,
  address: String,
  suppliers: String,
  date: String,
  amount: String,
  status: String,
});

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
