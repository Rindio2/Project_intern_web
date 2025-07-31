const productService = require('../service/product.service');

const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.filename : null;

    const productData = { name, description, price, image };
    const newProduct = await productService.createProduct(productData);

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addProduct, getAllProducts };
