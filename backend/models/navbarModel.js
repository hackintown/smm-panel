const mongoose = require("mongoose");

const navbarItemSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("NavbarItem", navbarItemSchema);
