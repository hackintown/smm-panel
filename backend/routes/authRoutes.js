const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const {
  loginAdmin,
  resetAdminPassword,
  getAdmin,
} = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);
router.post("/admin/reset-password", authMiddleware, resetAdminPassword);
router.get("/profile", authMiddleware, getAdmin);

module.exports = router;
