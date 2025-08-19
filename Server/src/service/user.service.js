// src/service/user.service.js
require('../config/database');
const User = require('../models/User');

// ✅ Tìm tất cả user
const findAll = async () => {
  return await User.find();
};

// ✅ Tìm user theo id
const findById = async (id) => {
  return await User.findById(id);
};

// ✅ Update user theo id
const updateById = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true });
};

module.exports = { findAll, findById, updateById };
