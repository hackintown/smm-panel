const mongoose = require("mongoose");

const apiProviderSchema = new mongoose.Schema({
  apiUrl: { type: String, required: true },
  apiKey: { type: String, required: true },
});

module.exports = mongoose.model("ApiProvider", apiProviderSchema);
