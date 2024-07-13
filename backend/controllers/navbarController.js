const NavbarItem = require("../models/navbarModel");
const mongoose = require("mongoose");

// Get all navbar items
exports.getNavbarItems = async (req, res) => {
  try {
    const navbarItems = await NavbarItem.find().exec();
    res.json(navbarItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching navbar items" });
  }
};

// Add new navbar item
exports.addNavbarItem = async (req, res) => {
  try {
    const newNavbarItem = new NavbarItem(req.body);
    await newNavbarItem.save();
    res.json(newNavbarItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding navbar item" });
  }
};

// Update navbar item
exports.updateNavbarItem = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedNavbarItem = await NavbarItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedNavbarItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating navbar item" });
  }
};

// Delete a navbar item
exports.deleteNavbarItem = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the ID is valid
    if (!id) {
      return res.status(400).json({ message: "Invalid ID supplied" });
    }

    // Check if the navbar item exists
    const navbarItem = await NavbarItem.findById(id);
    if (!navbarItem) {
      return res.status(404).json({ message: "Navbar item not found" });
    }

    // Delete the navbar item
    await NavbarItem.findByIdAndDelete(id);

    res.json({ message: "Navbar item removed successfully" });
  } catch (error) {
    console.error("Error deleting navbar item:", error);
    res.status(500).json({ message: "Error removing navbar item" });
  }
};

