const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');

const initializeAdmin = async () => {
  const adminExists = await Admin.findOne({ username: 'admin' });
  if (!adminExists) {
    const admin = new Admin({
      username: 'admin',
      password: bcrypt.hashSync('admin@12345', 10),
    });
    await admin.save();
    console.log('Admin user initialized');
  }
};

module.exports = { initializeAdmin };
