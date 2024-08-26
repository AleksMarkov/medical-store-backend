//Pharmacies.js
const mongoose = require("mongoose");

const pharmacieSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  city: String,
  phone: String,
  rating: Number,
});

module.exports = mongoose.model("Pharmacies", pharmacieSchema);
