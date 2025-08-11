import { useParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "T-shirt", price: "$25", image: "https://picsum.photos/400/300?1", description: "Comfortable cotton T-shirt" },
  { id: 2, name: "Hoodie", price: "$40", image: "https://picsum.photos/400/300?2", description: "Warm and stylish hoodie" },
  { id: 3, name: "Jeans", price: "$55", image: "https://picsum.photos/400/300?3", description: "Classic denim jeans" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6 text-red-500">Sản phẩm không tồn tại.</div>;
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
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-green-400 mb-4">{product.price}</p>
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
