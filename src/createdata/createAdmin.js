//createAdmin.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
require("dotenv").config();

const createUser = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongoose.connect");
  const hashedPassword = await bcrypt.hash("300041", 10);
  console.log("hashedPassword");
  const user = new User({
    name: "Admin",
    email: "soncha@ukr.net",
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
