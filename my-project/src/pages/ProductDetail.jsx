import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-6 text-gray-400">Đang tải sản phẩm...</div>;
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-400 hover:underline"
      >
        ← Quay lại
      </button>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-gray-800 p-6 rounded-lg">
        <img
          src={`http://localhost:3000/uploads/${product.image}`}
          alt={product.name}
          className="w-full h-auto rounded"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-green-400 mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>

          <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
