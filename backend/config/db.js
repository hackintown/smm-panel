const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

module.exports = connectDB;
