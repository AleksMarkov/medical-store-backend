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

// Add new product
router.post("/products", async (req, res, next) => {
  const { name, suppliers, stock, price, category, photo } = req.body;
  const newProduct = new Product({
    name,
    suppliers,
    stock,
    price,
    category,
    photo,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
});

// Update product
router.put("/products/:productId", async (req, res, next) => {
  const { productId } = req.params;
  const { name, suppliers, stock, price, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, suppliers, stock, price, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

// Delete product
router.delete("/products/:productId", async (req, res, next) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
