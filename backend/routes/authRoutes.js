const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const {
  loginAdmin,
  resetAdminPassword,
  getAdmin,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);
router.post("/reset-password", resetAdminPassword);
router.get("/profile", getAdmin);

module.exports = router;
