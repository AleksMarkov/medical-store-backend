//index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./src/routes/userRoutes.js");
const dashboardRoutes = require("./src/routes/dashboardRoutes.js");
const ordersRoutes = require("./src/routes/ordersRoutes.js");
const productsRoutes = require("./src/routes/productsRoutes.js");
const suppliersRoutes = require("./src/routes/suppliersRoutes.js");
const customersRoutes = require("./src/routes/customersRoutes.js");
const HttpError = require("./src/helpers/HttpError.js");
const cookieParser = require("cookie-parser");

const app = express();

// app.use(cors());
app.use(cors({ origin: "https://AleksMarkov.github.io" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", ordersRoutes);
app.use("/api", productsRoutes);
app.use("/api", suppliersRoutes);
app.use("/api", customersRoutes);

app.use((req, res, next) => {
  next(HttpError(404, "Route not found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
