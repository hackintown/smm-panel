const express = require("express");
const router = express.Router();
const servicesCtrl = require("../controllers/servicesCtrl");

// Route to fetch and store services data
router.post("/services", servicesCtrl.getServices);

module.exports = router;
