import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import loginImage from './logo/danatehub.webp'; // Rasm yo'lini to'g'rilang

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Example users for validation
  const validCredentials = [
    { username: 'admin', password: 'password' },
    { username: 'none', password: '123' },
  ];

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Validate username and password
    const isValidUser = validCredentials.some(
      (user) => user.username === username && user.password === password
    );

    if (!isValidUser) {
      alert('Invalid username or password. Please try again.');
      return;
    }

    // Successful login
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('loginTime', new Date().getTime().toString());
    alert('Login successful!');

    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="content-wrapper">
        <div className="login-box">
          <h2>LOGIN</h2>
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button className="login-btn" onClick={handleLogin}>Login</button>
        </div>
        <div className="logo-section">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
