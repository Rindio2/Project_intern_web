const express = require('express');
const cors = require('cors'); // ✅ Thêm dòng này
const path = require('path');

const app = express();

// ✅ Kết nối MongoDB
require('./src/config/database');

// ✅ Cấu hình CORS – thêm sớm để áp dụng cho tất cả request
app.use(cors({
  origin: 'http://localhost:5173', // Đúng domain frontend React (Vite)
  credentials: true // Nếu bạn dùng cookie hoặc cần gửi thông tin xác thực
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Import routes
const userRoutes = require('./src/routes/user.routes');
const authRoutes = require('./src/routes/auth.routes');
const productRoutes = require('./src/routes/product.routes');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Định tuyến API
app.use('/api/v1', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', productRoutes);

// ✅ Khởi động server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
