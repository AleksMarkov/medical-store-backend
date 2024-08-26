//createAdmin2.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Проверь путь до модели пользователя
require("dotenv").config();

const createUser = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongoose.connect");
  const hashedPassword = await bcrypt.hash("123456", 10);
  console.log("hashedPassword");
  const user = new User({
    name: "Clayton Santos",
    email: "vendor@gmail.com",
    password: hashedPassword,
  });
  console.log("user", User);
  try {
    await user.save();
    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    mongoose.connection.close();
  }
};

createUser();
