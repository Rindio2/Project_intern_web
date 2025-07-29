// src/pages/Home.jsx

import React from 'react';

const Home = () => {
  const categories = [
    { id: 1, name: 'Áo thun', image: '/images/tshirt.jpg' },
    { id: 2, name: 'Giày', image: '/images/shoes.jpg' },
    { id: 3, name: 'Phụ kiện', image: '/images/accessories.jpg' },
  ];

  const products = [
    {
      id: 1,
      name: 'Áo thun basic',
      price: '199.000₫',
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Giày sneaker trắng',
      price: '599.000₫',
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: 'Mũ bucket',
      price: '129.000₫',
      image: '/images/product3.jpg',
    },
  ];

  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với SHOP của bạn</h1>
        <p className="text-lg mb-6">Thời trang xu hướng – Giá tốt mỗi ngày</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Mua ngay
        </button>
      </section>

      {/* Danh mục */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-2xl font-semibold mb-6">Danh mục nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="text-center">
              <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <p className="font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white rounded-lg shadow p-4">
              <img src={prod.image} alt={prod.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">{prod.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{prod.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Đăng ký nhận ưu đãi</h2>
        <p className="mb-6">Nhận thông tin giảm giá và sản phẩm mới qua email</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
          Đăng ký ngay
        </button>
      </section>
    </div>
  );
};

export default Home;
