const express = require('express');
const { login, updatePassword } = require('../controllers/adminController');
const { protect } = require('../middleware/adminAuthMiddleware');
const router = express.Router();

router.post('/login', login);
router.put('/update-password', protect, updatePassword);

module.exports = router;
