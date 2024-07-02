const dotenv = require("dotenv"); //Reads .env file and makes environment variables available through process.env.
dotenv.config();
const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;
