// routes/productsRoutes.js
const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get all products
router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
