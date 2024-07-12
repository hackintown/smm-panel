const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const createDefaultAdmin = require("./script/defaultAdmin");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

connectDB();
createDefaultAdmin();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/navbarRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
