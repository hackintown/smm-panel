const Services = require("../models/servicesModel");
const axios = require("axios");

const API_URL = "https://cheapestsmmpanels.com/api/v2";
const API_KEY = "4f3547bf197e3bbdeb08f2b459a70b0e";

// Helper function to handle API requests
const makeApiRequest = async (params) => {
  try {
    const response = await axios.post(API_URL, params);
    return response.data;
  } catch (error) {
    throw new Error("API request failed");
  }
};

exports.getServices = async (req, res) => {
  const { key, action } = req.body;

  if (key !== API_KEY || action !== "services") {
    return res.status(400).json({ message: "Invalid key or action" });
  }

  try {
    const servicesData = await makeApiRequest({ key, action });

    await Services.deleteMany({});
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
    key: API_KEY,
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
  const params = { key: API_KEY, action: "status", order };

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
  const params = { key: API_KEY, action: "status", orders };

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
  const params = { key: API_KEY, action: "refill", order };

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
  const params = { key: API_KEY, action: "refill", orders };

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
  const params = { key: API_KEY, action: "refill_status", refill };

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
  const params = { key: API_KEY, action: "refill_status", refills };

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
  const params = { key: API_KEY, action: "cancel", orders };

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
  const params = { key: API_KEY, action: "balance" };

  try {
    const response = await makeApiRequest(params);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching user balance:", error);
    res.status(500).json({ message: "Error fetching user balance" });
  }
};
