const bcrypt = require("bcryptjs");
const Admin = require("../models/adminModel");

const createDefaultAdmin = async () => {
  try {
    const admin = await Admin.findOne({ username: "admin" });
    if (admin) {
      console.log("Admin user already exists");
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin@12345", salt);

    const newAdmin = new Admin({
      username: "admin",
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log("Admin user created");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = createDefaultAdmin;
