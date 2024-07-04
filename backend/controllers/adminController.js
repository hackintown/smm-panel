const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, admin: { id: admin._id, username: admin.username } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select("-password");
    if (!admin) {
      return res.status(404).json({ msg: "Admin Not Found" });
    }
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const resetAdminPassword = async (req, res) => {
  const { adminId } = req.user;
  const { newPassword } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await Admin.findByIdAndUpdate(adminId, { password: hashedPassword });

    res.json({ msg: "Password reset successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { loginAdmin, resetAdminPassword, getAdmin };
