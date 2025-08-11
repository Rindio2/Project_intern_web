import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "T-shirt",
    price: "$25",
    image: "https://picsum.photos/300/200?1",
  },
  {
    id: 2,
    name: "Hoodie",
    price: "$40",
    image: "https://picsum.photos/300/200?2",
  },
  {
    id: 3,
    name: "Jeans",
    price: "$55",
    image: "https://picsum.photos/300/200?3",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id) => {
    alert(`Đã thêm sản phẩm ${id} vào giỏ hàng (chưa xử lý logic)`);
    // TODO: Thêm vào giỏ hàng thực tế
  };

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-white">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow bg-gray-800 text-white flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-400 mb-4">{product.price}</p>

            <div className="mt-auto flex gap-2">
              <button
                onClick={() => handleDetail(product.id)}
                className="border border-gray-700 text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-gray-800 transition"
              >
                Chi tiết
              </button>
              <button
                onClick={() => handleAddToCart(product.id)}
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
