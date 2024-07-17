const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  dripfeed: {
    type: Boolean,
    default: false,
  },
  refill: {
    type: Boolean,
    default: false,
  },
  cancel: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Services", servicesSchema);
