// controllers/user.controller.js

const userService = require('../service/user.service');

// Gọi đến userService.findAll để lấy danh sách user
const findAllUser = async (req, res) => {
  try {
    await userService.findAll(req, res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { findAllUser };
