import React from 'react';

const SignupForm = ({ switchToSignin }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Đăng ký</h2>
      <input className="border p-2 rounded w-64" type="text" placeholder="Họ và tên" />
      <input className="border p-2 rounded w-64" type="email" placeholder="Email" />
      <input className="border p-2 rounded w-64" type="password" placeholder="Password" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Đăng ký</button>
      <p className="text-sm">
        Đã có tài khoản?{' '}
        <button onClick={switchToSignin} className="text-green-600 underline">
          Đăng nhập
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
