const Services = require("../models/servicesModel");
const axios = require("axios");
exports.getServices = async (req, res) => {
  const { key, action } = req.body; // Assuming the key and action are passed in the request body

  // Check if key and action match expected values
  if (key !== "4f3547bf197e3bbdeb08f2b459a70b0e" || action !== "services") {
    return res.status(400).json({ message: "Invalid key or action" });
  }
  try {
    const response = await axios.post("https://cheapestsmmpanels.com/api/v2");
    const servicesData = response.data;

    // Clear existing data and insert new data into MongoDB
    await Services.deleteMany({});
    await Services.insertMany(servicesData);
    res.status(200).json({ message: "Services updated successfully" });
  } catch (error) {
    console.error("Error fetching panels:", error);
    res.status(500).json({ message: "Error fetching panels" });
  }
};
