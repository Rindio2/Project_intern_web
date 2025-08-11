import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ Đúng cú pháp ESM


const Navbar_Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let username = "";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      username = decoded?.name || "User";
    } catch (err) {
      console.error("Token không hợp lệ");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 w-1/4">FASHION</div>

      {/* Search Bar */}
      <div className="w-2/4 flex justify-center">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none text-gray-700 focus:ring-2 focus:ring-gray-300 bg-gray-100"
        />
      </div>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-700 w-1/4 justify-end items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Shop</Link></li>
        <li><Link to="#">Categories</Link></li>
        <li><Link to="#">Contact</Link></li>
        <li className="font-semibold text-indigo-600">Xin chào, {username}</li>
        <li>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar_Login;
