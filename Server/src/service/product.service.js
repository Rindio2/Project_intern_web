const Product = require('../models/Product');

// 🟢 Tạo sản phẩm mới
const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

// 🔵 Lấy danh sách tất cả sản phẩm
const getAllProducts = async () => {
  return await Product.find();
};

module.exports = {
  createProduct,
  getAllProducts,
};
