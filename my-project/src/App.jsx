// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import About from "./pages/About"; // Ví dụ thêm 1 trang khác
import SigninSignup from "./pages/SigninSignup"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
