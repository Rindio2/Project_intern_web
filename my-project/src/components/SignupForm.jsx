import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/register", {
        username,
        email,
        password,
      });

      const { token, user } = res.data;

      // ✅ Lưu token và thông tin user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Chuyển sang trang signin
      navigate("/signin");
    } catch (err) {
      alert(err.response?.data?.message || "Sign up failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[250px] bg-white rounded-b-[50%] shadow-lg"></div>

      <div className="z-10 w-full max-w-md px-8 py-10 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
