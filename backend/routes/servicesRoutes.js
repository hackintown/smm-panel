const express = require("express");
const router = express.Router();
const servicesCtrl = require("../controllers/servicesCtrl");

// Route to fetch and store services data
router.post("/services", servicesCtrl.getServices);
router.get("/services", servicesCtrl.getAllServices);

// Additional routes for other functionalities
router.post("/addOrder", servicesCtrl.addOrder);
router.post("/orderStatus", servicesCtrl.getOrderStatus);
router.post("/multipleOrdersStatus", servicesCtrl.getMultipleOrdersStatus);
router.post("/createRefill", servicesCtrl.createRefill);
router.post("/createMultipleRefills", servicesCtrl.createMultipleRefills);
router.post("/refillStatus", servicesCtrl.getRefillStatus);
router.post("/multipleRefillStatuses", servicesCtrl.getMultipleRefillStatuses);
router.post("/createCancel", servicesCtrl.createCancel);
router.post("/userBalance", servicesCtrl.getUserBalance);

//Api Provider routes for new api services
router.post("/add-provider", servicesCtrl.addProvider);

module.exports = router;
