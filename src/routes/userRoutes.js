//userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middleware/authMiddleware");

// Роут для логина
router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Запрос на логин:", { email, password });

  try {
    // Поиск пользователя по email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Пользователь не найден:", email);
      return res.status(400).json({ message: "Неправильный email или пароль" });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Пароль не совпадает для пользователя:", email);
      return res.status(400).json({ message: "Неправильный email или пароль" });
    }

    // Генерация JWT токена
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Токен создан для пользователя:", email);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Ошибка в маршруте логина:", error.message);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Пример защищенного маршрута
router.get("/api/user/protected", authMiddleware, (req, res) => {
  res.json({ message: "Доступ разрешен", user: req.user });
});

module.exports = router;
