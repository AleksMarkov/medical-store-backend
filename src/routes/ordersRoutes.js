//routes/ordersRoutes.js
const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Get all orders
router.get("/orders", async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
