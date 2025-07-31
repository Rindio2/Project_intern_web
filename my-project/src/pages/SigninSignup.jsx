import React, { useState } from 'react';
import SigninForm from '../components/SigninForm';
import SignupForm from '../components/SignupForm';

const SigninSignup = () => {
  const [isSignin, setIsSignin] = useState(true);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-[700px] h-[400px] overflow-hidden shadow-2xl rounded-2xl">
        <div
          className={`flex w-[1400px] h-full transition-transform duration-500 ${
            isSignin ? 'translate-x-0' : '-translate-x-[700px]'
          }`}
        >
          {/* Sign In */}
          <div className="w-[700px] h-full bg-white flex items-center justify-center">
            <SigninForm switchToSignup={() => setIsSignin(false)} />
          </div>

          {/* Sign Up */}
          <div className="w-[700px] h-full bg-blue-100 flex items-center justify-center">
            <SignupForm switchToSignin={() => setIsSignin(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
