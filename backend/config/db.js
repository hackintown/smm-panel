const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");
const MenuItem = require("../models/navbarModel");
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const defaultMenuItems = [
      { label: "Dashboard", icon: "FaTachometerAlt" },
      { label: "New Order", icon: "FaShoppingBag" },
      { label: "Orders", icon: "FaClipboardList" },
      { label: "Services", icon: "FaCogs" },
      { label: "Add Funds", icon: "FaMoneyBillWave" },
      { label: "Tickets", icon: "FaTicketAlt" },
      { label: "Api Docs", icon: "FaBook" },
      { label: "Child Panel", icon: "FaChild" },
      { label: "Affiliate", icon: "FaGift" },
      { label: "Terms", icon: "FaExclamationTriangle" },
      { label: "Blogs", icon: "FaBlog" },
    ];
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(defaultMenuItems);
    console.log("Default menu items seeded successfully");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

module.exports = connectDB;
