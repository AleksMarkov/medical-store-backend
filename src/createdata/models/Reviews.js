//Reviews.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: String,
  name: String,
  testimonial: String,
});

module.exports = mongoose.model("Review", reviewSchema);
