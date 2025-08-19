import { useState, useEffect, useRef } from "react";

const NavbarAfterLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Hàm logout
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Logout error:", err);
    }

    // Xoá token client
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white relative">
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
        <li><a href="/">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Contact</a></li>
        <li
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          ref={dropdownRef}
          className="relative"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border cursor-pointer hover:opacity-80"
          />
          {isOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 text-sm w-40">
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAfterLogin;
