const express = require('express');
const app = express();

// ✅ Kết nối MongoDB
require('./src/config/database');

// ✅ Import routes
const userRoutes = require('./src/routes/user.routes');
const authRoutes = require('./src/routes/auth.routes'); // 👈 Thêm dòng này

app.use(express.json());

// ✅ Định tuyến API
app.use('/api/v1', userRoutes);
app.use('/api/v1/auth', authRoutes); // 👈 Thêm dòng này

// ✅ Khởi động server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
