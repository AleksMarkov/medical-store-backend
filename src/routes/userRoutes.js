//userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middlewares/authMiddleware");
const HttpError = require("../helpers/HttpError");
const validateBody = require("../middlewares/validateBody");
const {
  userLoginSchema,
  userRegistrationSchema,
} = require("../schemas/validationSchemas");

// Route for login
router.post(
  "/user/login",
  validateBody(userLoginSchema),
  async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return next(HttpError(401, "Invalid email or password"));
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return next(HttpError(401, "Invalid email or password"));
      }

      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });

      const refreshToken = jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
      );

      user.refreshToken = refreshToken;
      await user.save();

      res.status(200).json({
        accessToken,
        refreshToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(HttpError(500, "Server error"));
    }
  }
);

// Route for register
router.post(
  "/user/register",
  validateBody(userRegistrationSchema),
  async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return next(HttpError(409, "Email already in use"));
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(201).json({ token });
    } catch (error) {
      console.error("Error in registration route:", error.message);
      next(HttpError(500, "Server error"));
    }
  }
);

// Route for refresh-token
router.post("/user/refresh-token", async (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return next(HttpError(401, "Refresh token is required"));
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== refreshToken) {
      return next(HttpError(401, "Invalid refresh token"));
    }

    const newAccessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    next(HttpError(401, "Invalid refresh token"));
  }
});

// Logout route
router.post("/user/logout", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.status(204).send();
  } catch (error) {
    next(HttpError(500, "Server error"));
  }
});

module.exports = router;
