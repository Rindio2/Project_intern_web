import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 w-1/4">FASHION</div>

      {/* Search Bar - căn giữa */}
      <div className="w-2/4 flex justify-center">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none text-gray-700 focus:ring-2 focus:ring-gray-300 bg-gray-100"
        />
      </div>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-700 w-1/4 justify-end">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Shop</Link></li>
        <li><Link to="#">Categories</Link></li>
        <li><Link to="#">Contact</Link></li>
        <li><Link to="/signin">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;