//dashboardRoutes.js
const express = require("express");
const Product = require("../models/Product");
const Supplier = require("../models/Supplier");
const Customer = require("../models/Customer");
const Income = require("../models/Income");
const router = express.Router();

// Get dashboard data
router.get("/dashboard", async (req, res, next) => {
  try {
    // Get total stock of all products
    const products = await Product.find({});
    const allProducts = products.reduce(
      (sum, product) => sum + Number(product.stock),
      0
    );

    // Get total number of suppliers
    const allSuppliers = await Supplier.countDocuments();

    // Get total number of customers
    const allCustomers = await Customer.countDocuments();

    // Get recent customers sorted by register_date
    const recentCustomers = await Customer.find({})
      // .sort({ register_date: -1 })
      .select("image name email spent register_date");
    //   .limit(5); // Adjust limit as needed

    // Get all income and expense entries
    const incomeExpenseList = await Income.find({}).select("name amount type");

    res.status(200).json({
      allProducts,
      allSuppliers,
      allCustomers,
      recentCustomers,
      incomeExpenseList,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
