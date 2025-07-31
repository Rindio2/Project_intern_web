import React from 'react';

const SigninForm = ({ switchToSignup }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Đăng nhập</h2>
      <input className="border p-2 rounded w-64" type="email" placeholder="Email" />
      <input className="border p-2 rounded w-64" type="password" placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Đăng nhập</button>
      <p className="text-sm">
        Chưa có tài khoản?{' '}
        <button onClick={switchToSignup} className="text-blue-600 underline">
          Đăng ký
        </button>
      </p>
    </div>
  );
};

export default SigninForm;
