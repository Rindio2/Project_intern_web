// src/controller/user.controller.js
const userService = require('../service/user.service');

// ✅ Admin: lấy tất cả user
const findAllUser = async (req, res) => {
  try {
    const users = await userService.findAll();
    const sanitizedUsers = users.map(u => {
      const { password, ...userData } = u.toObject();
      return userData;
    });
    res.json(sanitizedUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ API trả về thông tin user đang login
const getCurrentUser = async (req, res) => {
  try {
    const user = await userService.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Ẩn password
    const { password, ...userData } = user.toObject();
    res.json(userData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Cập nhật user đang login
const updateUser = async (req, res) => {
  try {
    const updates = req.body;
    const user = await userService.updateById(req.user.id, updates);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { password, ...userData } = user.toObject();
    res.json(userData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { findAllUser, getCurrentUser, updateUser };
