const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  avatar: {
    type: String, // URL ảnh đại diện hoặc đường dẫn file
    default: "https://i.pravatar.cc/150"
  },
  phone: {
    type: String,
    trim: true,
    default: ""
  },
  address: {
    type: String,
    trim: true,
    default: ""
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
