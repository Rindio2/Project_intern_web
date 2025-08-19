import { useEffect, useState } from "react";
import { getCurrentUser, updateCurrentUser } from "../services/userService";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setFormData(user);
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateCurrentUser(formData);
      alert("Cập nhật thành công!");
      setFormData(updated);
    } catch (err) {
      alert("Cập nhật thất bại");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-lg"
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-2 border rounded-lg"
        />

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full px-4 py-2 border rounded-lg"
        />

        <input
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          placeholder="Avatar URL"
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
