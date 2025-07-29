const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { authenticate, authorizeAdmin } = require('../middleware/auth.middleware');

router.get('/users', authenticate, authorizeAdmin, userController.findAllUser);
// hoặc nếu bạn dùng controller dạng object:
// router.get('/users', (req, res) => userController.findAllUser(req, res));

module.exports = router;
