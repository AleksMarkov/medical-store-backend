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
    const products = await Product.find({});
    const allProducts = products.reduce(
      (sum, product) => sum + Number(product.stock),
      0
    );
    const allSuppliers = await Supplier.countDocuments();

    const allCustomers = await Customer.countDocuments();

    const recentCustomers = await Customer.find({}).select(
      "image name email spent register_date"
    );

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
