//userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Пример маршрута для создания пользователя
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
