const express = require('express');
const app = express();
const path = require('path');

// ✅ Kết nối MongoDB
require('./src/config/database');

// ✅ Import routes
const userRoutes = require('./src/routes/user.routes');
const authRoutes = require('./src/routes/auth.routes'); // 👈 Thêm dòng này
const productRoutes = require('./src/routes/product.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Định tuyến API
app.use('/api/v1', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', productRoutes);

// ✅ Khởi động server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
