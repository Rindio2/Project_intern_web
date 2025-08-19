// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import About from "./pages/About"; // Ví dụ thêm 1 trang khác
import SigninForm from "./components/SigninForm";
import ProductDetail from "./pages/ProductDetail";
import SignupForm from "./components/SignupForm";
import HomeAfterLogin from "./pages/HomeAfterLogin";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-after-login" element={<HomeAfterLogin />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
