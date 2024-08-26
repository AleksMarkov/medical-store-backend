// insertData.js
const mongoose = require("mongoose");
const NearestPharmacy = require("./models/NearestPharmacy");
const Supplier = require("./models/Supplier");
const fs = require("fs");
require("dotenv").config();

const insertData = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const nearestPharmaciesData = JSON.parse(
      fs.readFileSync(__dirname + "/nearest_pharmacies.json", "utf-8")
    );

    await NearestPharmacy.insertMany(nearestPharmaciesData);
    console.log("Nearest Pharmacies data inserted successfully");

    const suppliersData = JSON.parse(
      fs.readFileSync(__dirname + "/suppliers.json", "utf-8")
    );
    await Supplier.insertMany(suppliersData);
    console.log("Suppliers data inserted successfully");

    const incomeData = JSON.parse(
      fs.readFileSync(__dirname + "/Income-Expenses.json", "utf-8")
    );
    const Income = require("./models/Income");
    await Income.insertMany(incomeData);
    console.log("Income data inserted successfully");

    const productsData = JSON.parse(
      fs.readFileSync(__dirname + "/products.json", "utf-8")
    );
    const Product = require("./models/Product");
    await Product.insertMany(productsData);
    console.log("Products data inserted successfully");

    const customersData = JSON.parse(
      fs.readFileSync(__dirname + "/customers.json", "utf-8")
    );
    const Customer = require("./models/Customer");
    await Customer.insertMany(customersData);
    console.log("Customers data inserted successfully");

    const ordersData = JSON.parse(
      fs.readFileSync(__dirname + "/orders.json", "utf-8")
    );
    const Orders = require("./models/Orders");
    await Orders.insertMany(ordersData);
    console.log("Orders data inserted successfully");

    const pharmaciesData = JSON.parse(
      fs.readFileSync(__dirname + "/pharmacies.json", "utf-8")
    );
    const Pharmacies = require("./models/Pharmacies");
    await Pharmacies.insertMany(pharmaciesData);
    console.log("Pharmacies data inserted successfully");

    const reviewsData = JSON.parse(
      fs.readFileSync(__dirname + "/reviews.json", "utf-8")
    );
    const Reviews = require("./models/Reviews");
    await Reviews.insertMany(reviewsData);
    console.log("Reviews data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.connection.close();
  }
};

insertData();
