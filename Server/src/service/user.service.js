require('../config/database'); // goi database
const User = require('../models/User');

const findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { findAll };