const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controller/product.controller');
const { authenticate, authorizeAdmin } = require('../middleware/auth.middleware');

// ⚙️ Cấu hình multer để lưu ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// 🛡️ Áp dụng JWT middleware
router.post('/products', authenticate, authorizeAdmin, upload.single('image'), productController.addProduct);
router.get('/products', productController.getAllProducts);

module.exports = router;
