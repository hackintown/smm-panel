const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const connectDB = require("./config/db");
const { initializeAdmin } = require("./services/adminAuthService");

dotenv.config();
const app = express();

// MongoDB Connection
connectDB();
initializeAdmin();

// Middlewares
app.use(cors());
app.use(express.json({ extended: false }));


// admin-auth-route
app.use("/api/admin", adminRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Server-Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Your Server is Running at Port: ${PORT}`);
});
