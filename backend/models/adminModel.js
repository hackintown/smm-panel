const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const adminSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: ["Enter Username"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
