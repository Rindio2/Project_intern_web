import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'SigninSignup.scss';
import axios from 'axios';

const SigninSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [labelText, setLabelText] = useState('To keep connected with us please login with your personal info');
  const [headerText, setHeaderText] = useState('Welcome Back!');
  const [buttonText, setButtonText] = useState('SIGN UP');

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    number_phone: '',
    address: '',
    role: 0
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    if (isSignUp) {
      setLabelText('To keep connected with us please login with your personal info');
      setHeaderText('Welcome Back!');
      setButtonText('SIGN UP');
    } else {
      setLabelText('Enter your personal details and start your journey with us');
      setHeaderText('Hello, Friend!');
      setButtonText('SIGN IN');
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const login = () => {
    if (!loginData.username || !loginData.password) {
      alert("Username and password cannot be empty");
      return;
    }

    axios.post("http://localhost:3000/auth/login", loginData)
      .then(response => {
        const { access_token, user } = response.data;
        if (access_token) {
          alert("Login successful!");
          localStorage.setItem("token", access_token);
          localStorage.setItem("role", user.role);
          navigate(user.role === 1 ? '/admin' : '/shop');
        } else {
          alert("Login failed!");
        }
      })
      .catch(err => {
        alert(err.response?.data?.message || "Login failed!");
      });
  };

  const register = async () => {
    if (!registerData.username || !registerData.email || !registerData.password) {
      alert("Please fill in all required fields");
      return;
    }

    if (registerData.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/auth/register', registerData);
      const userId = res.data.id;

      const orderRes = await axios.post('http://localhost:3000/orders', { userId });

      alert("Registration successful!");
      navigate('/shop');
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      {/* Sign Up */}
      <div className="form-container sign-up-container">
        <h1>Create Account</h1>
        <div className="social-container">
          <button className='sign-in-container-button-icon'><i className="fab fa-facebook"></i></button>
          <button className='sign-in-container-button-icon'><i className="fab fa-google"></i></button>
          <button className='sign-in-container-button-icon'><i className="fab fa-instagram"></i></button>
        </div>
        <input type="text" placeholder="Username" name="username" value={registerData.username} onChange={handleRegisterChange} />
        <input type="text" placeholder="Email" name="email" value={registerData.email} onChange={handleRegisterChange} />
        <input type="password" placeholder="Password" name="password" value={registerData.password} onChange={handleRegisterChange} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className='input-row'>
          <input type="text" placeholder="First Name" name="first_name" value={registerData.first_name} onChange={handleRegisterChange} />
          <input type="text" placeholder="Last Name" name="last_name" value={registerData.last_name} onChange={handleRegisterChange} />
        </div>
        <div className='input-row'>
          <input type="text" placeholder="Phone Number" name="number_phone" value={registerData.number_phone} onChange={handleRegisterChange} />
          <input type="text" placeholder="Address" name="address" value={registerData.address} onChange={handleRegisterChange} />
        </div>
        <button onClick={register}>SIGN UP</button>
      </div>

      {/* Sign In */}
      <div className="form-container sign-in-container">
        <h1>Sign in</h1>
        <div className="social-container">
          <button className='sign-in-container-button-icon'><i className="fab fa-facebook"></i></button>
          <button className='sign-in-container-button-icon'><i className="fab fa-google"></i></button>
          <button className='sign-in-container-button-icon'><i className="fab fa-instagram"></i></button>
        </div>
        <input type="text" placeholder="Username" name="username" value={loginData.username} onChange={handleLoginChange} />
        <input type="password" placeholder="Password" name="password" value={loginData.password} onChange={handleLoginChange} />
        <a href="#">Forgot your password?</a>
        <button onClick={login}>SIGN IN</button>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>{headerText}</h1>
            <label className="label">{labelText}</label> <br />
            <button className="button" onClick={handleToggle}>{buttonText}</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>{isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}</h1>
            <label>{isSignUp ? 'To keep connected with us please login with your personal info' : 'Enter your personal details and start your journey with us'}</label><br />
            <button className="button" onClick={handleToggle}>{isSignUp ? 'SIGN IN' : 'SIGN UP'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
