//index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");
const dashboardRoutes = require("./routes/dashboardRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const suppliersRoutes = require("./routes/suppliersRoutes");
const HttpError = require("./helpers/HttpError");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", ordersRoutes);
app.use("/api", productsRoutes);
app.use("/api", suppliersRoutes);

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
