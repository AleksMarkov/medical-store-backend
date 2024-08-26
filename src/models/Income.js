//Income.js
const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  name: String,
  amount: String,
  type: String,
});

const Income = mongoose.model("Income", incomeSchema);
module.exports = Income;
