const Admin = require("../models/adminModel");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin._id,
      username: admin.username,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};

// @desc    Update admin password
// @route   PUT /api/admin/update-password
// @access  Private

const updatePassword = async (req, res) => {
  const { newPassword } = req.body;
  const admin = await Admin.findById(req.user._id);

  if (admin) {
    admin.password = bcrypt.hashSync(newPassword, 10); // Hash the new password
    await admin.save();
    res.json({
      message: "Password updated successfully, please log in again.",
    });
  } else {
    res.status(404).json({ message: "Admin not found" });
  }
};

module.exports = { login, updatePassword };
