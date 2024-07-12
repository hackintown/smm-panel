const NavbarItem = require("../models/navbarModel");

// Get all navbar items
exports.getNavbarItems = async (req, res) => {
  try {
    const navbarItems = await NavbarItem.find();
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
exports.deleteNavrbarItem = async (req, res) => {
  try {
    const id = req.params.id;
    await NavbarItem.findByIdAndRemove(id);
    res.json({ message: "Navbar item removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing navbar item" });
  }
};
