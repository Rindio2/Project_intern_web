// src/routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { authenticate, authorizeAdmin } = require('../middleware/auth.middleware');

// Admin: Lấy tất cả user
router.get('/users', authenticate, authorizeAdmin, userController.findAllUser);

// User: Lấy thông tin chính mình
router.get('/users/me', authenticate, userController.getCurrentUser);

// User: Cập nhật thông tin cá nhân
router.put('/users/me', authenticate, userController.updateUser);

module.exports = router;
