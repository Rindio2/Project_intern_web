const authService = require('../service/auth.service');

const register = async (req, res) => {
  try {
    await authService.register(req, res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    await authService.login(req, res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
