//Income.js
const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  id: String,
  name: String,
  amount: String,
  type: String,
});

module.exports = mongoose.model("Income", incomeSchema);
