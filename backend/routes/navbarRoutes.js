const express = require("express");
const router = express.Router();
const navbarController = require("../controllers/navbarController");

router.get("/navbar-items", navbarController.getNavbarItems);
router.post("/navbar-items", navbarController.addNavbarItem);
router.put("/navbar-items/:id", navbarController.updateNavbarItem);
router.delete("/navbar-items/:id", navbarController.deleteNavbarItem);

module.exports = router;
