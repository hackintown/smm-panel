const Services = require("../models/servicesModel");
const Provider = require("../models/apiProviderModel");
const axios = require("axios");

// Helper function to handle API requests
const makeApiRequest = async (params) => {
  try {
    const provider = await Provider.findOne({});
    if (!provider) {
      throw new Error("No provider found");
    }
    const apiUrl = provider.apiUrl;
    const response = await axios.post(apiUrl, {
      ...params,
      key: provider.apiKey,
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw new Error("API request failed: " + error.message);
  }
};

exports.addProvider = async (req, res) => {
  const { apiUrl, apiKey } = req.body;
  if (!apiUrl || !apiKey) {
    return res
      .status(400)
      .json({ message: "API URL and API Key are required" });
  }
  try {
    // Update or Create the provider in the database
    let provider = await Provider.findOne({});
    if (provider) {
      // If a provider already exists, update it
      provider.apiUrl = apiUrl;
      provider.apiKey = apiKey;
      await provider.save();
    } else {
      // Otherwise, create a new provider
      provider = new Provider({ apiUrl, apiKey });
      await provider.save();
    }

    // Fetch and update services with the new provider's details
    await Services.deleteMany({});
    await exports.getServices(req, res);
  } catch (error) {
    console.error("Error adding provider:", error);
    res
      .status(500)
      .json({ message: "Error adding provider", error: error.message });
  }
};

exports.getServices = async (req, res) => {
  const { key, action } = req.body;

  try {
    // Fetch services data from API
    const servicesData = await makeApiRequest({ key, action });
    // Validate the format of the data if necessary
    if (!Array.isArray(servicesData)) {
      throw new Error("Services data is not an array");
    }

   // Log the data for debugging
   console.log("Fetched services data:", servicesData);

    await Services.insertMany(servicesData);
    res.status(200).json({ message: "Services updated successfully" });
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services" });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find({});
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services" });
  }
};

// Add order
exports.addOrder = async (req, res) => {
  const { service, link, quantity, runs, interval } = req.body;
  const params = {
    action: "add",
    service,
    link,
    quantity,
    runs,
    interval,
  };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ message: "Error adding order" });
  }
};

// Order status
exports.getOrderStatus = async (req, res) => {
  const { order } = req.body;
  const params = { action: "status", order };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching order status:", error);
    res.status(500).json({ message: "Error fetching order status" });
  }
};

// Multiple orders status
exports.getMultipleOrdersStatus = async (req, res) => {
  const { orders } = req.body;
  const params = { action: "status", orders };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching multiple orders status:", error);
    res.status(500).json({ message: "Error fetching multiple orders status" });
  }
};

// Create refill
exports.createRefill = async (req, res) => {
  const { order } = req.body;
  const params = { action: "refill", order };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating refill:", error);
    res.status(500).json({ message: "Error creating refill" });
  }
};

// Create multiple refills
exports.createMultipleRefills = async (req, res) => {
  const { orders } = req.body;
  const params = { action: "refill", orders };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating multiple refills:", error);
    res.status(500).json({ message: "Error creating multiple refills" });
  }
};

// Get refill status
exports.getRefillStatus = async (req, res) => {
  const { refill } = req.body;
  const params = { action: "refill_status", refill };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching refill status:", error);
    res.status(500).json({ message: "Error fetching refill status" });
  }
};

// Get multiple refill statuses
exports.getMultipleRefillStatuses = async (req, res) => {
  const { refills } = req.body;
  const params = { action: "refill_status", refills };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching multiple refill statuses:", error);
    res
      .status(500)
      .json({ message: "Error fetching multiple refill statuses" });
  }
};

// Create cancel
exports.createCancel = async (req, res) => {
  const { orders } = req.body;
  const params = { action: "cancel", orders };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating cancel:", error);
    res.status(500).json({ message: "Error creating cancel" });
  }
};

// User balance
exports.getUserBalance = async (req, res) => {
  const params = { action: "balance" };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching user balance:", error);
    res.status(500).json({ message: "Error fetching user balance" });
  }
};
