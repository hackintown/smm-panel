const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("Auth Header:", authHeader); // Log the Authorization header

  if (!authHeader) {
    return res.status(401).json({ msg: "No token, authorization denied" });
    console.log("Auth Header:", authHeader); // Log the Authorization header
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("Token:", token); // Log the token

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded); // Log the decoded token
    req.user = { id: decoded.adminId }; // Set the id from the token payload
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;
