//suppliersRoutes.js
const express = require("express");
const Supplier = require("../models/Supplier");
const router = express.Router();

// Get all suppliers
router.get("/suppliers", async (req, res, next) => {
  try {
    const suppliers = await Supplier.find({});
    res.status(200).json(suppliers);
  } catch (error) {
    next(error);
  }
});

// Add new supplier
router.post("/suppliers", async (req, res, next) => {
  const { name, address, suppliers, date, amount, status } = req.body;
  const newSupplier = new Supplier({
    name,
    address,
    suppliers,
    date,
    amount,
    status,
  });

  try {
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    next(error);
  }
});

// Update supplier
router.put("/suppliers/:supplierId", async (req, res, next) => {
  const { supplierId } = req.params;
  const { name, address, suppliers, date, amount, status } = req.body;

  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      supplierId,
      { name, address, suppliers, date, amount, status },
      { new: true }
    );

    if (!updatedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    res.status(200).json(updatedSupplier);
  } catch (error) {
    next(error);
  }
});

// Delete supplier
router.delete("/suppliers/:supplierId", async (req, res, next) => {
  const { supplierId } = req.params;

  try {
    const deletedSupplier = await Supplier.findByIdAndDelete(supplierId);

    if (!deletedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
