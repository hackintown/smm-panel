const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const {
  loginAdmin,
  resetAdminPassword,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);
router.post("/reset-password", resetAdminPassword);

module.exports = router;
