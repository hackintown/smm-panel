const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { loginAdmin } = require("../controllers/adminController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);

module.exports = router;
