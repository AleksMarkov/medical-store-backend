//customersRoutes.js
const express = require("express");
const Customer = require("../models/Customer");
const router = express.Router();

// Get all customers
router.get("/customers", async (req, res, next) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
