import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      }
    };
    fetchData();
  }, []);

  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id) => {
    alert(`Đã thêm sản phẩm ${id} vào giỏ hàng (chưa xử lý logic)`);
  };

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-white">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="rounded-lg shadow bg-gray-800 text-white flex flex-col"
          >
            <img
              src={`http://localhost:3000/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-400 mb-4">${product.price}</p>

            <div className="mt-auto flex gap-2">
              <button
                onClick={() => handleDetail(product._id)}
                className="border border-gray-700 text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-gray-800 transition"
              >
                Chi tiết
              </button>
              <button
                onClick={() => handleAddToCart(product._id)}
                className="border border-gray-700 text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-gray-800 transition"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
