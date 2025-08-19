import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👉 dùng để điều hướng
import { getCurrentUser } from "../services/userService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (err) {
        console.error("Lỗi khi tải thông tin user:", err);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div className="p-6 text-gray-500">Đang tải thông tin...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <img
          src={user.avatar || "https://i.pravatar.cc/150"}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-2">
          {user.username}
        </h2>
        <p className="text-center text-gray-600">{user.email}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Vai trò:</span> {user.role}
          </p>
          <p>
            <span className="font-semibold">Ngày tạo:</span>{" "}
            {new Date(user.createdAt).toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Cập nhật gần nhất:</span>{" "}
            {new Date(user.updatedAt).toLocaleString()}
          </p>
        </div>

        {/* 👉 Nút chuyển sang EditProfile */}
        <button
          onClick={() => navigate("/edit-profile")}
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Chỉnh sửa thông tin
        </button>
      </div>
    </div>
  );
};

export default Profile;
