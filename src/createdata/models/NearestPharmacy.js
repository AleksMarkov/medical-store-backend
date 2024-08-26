//models/NearestPharmacy.js
const mongoose = require("mongoose");

const nearestPharmacySchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  city: String,
  phone: String,
  rating: Number,
});

module.exports = mongoose.model("NearestPharmacy", nearestPharmacySchema);
