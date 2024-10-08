import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Yo'naltirish uchun hook

  const handleLogin = () => {
    // Login funksiyasi
    if (!username || !password) {
      alert('Iltimos, foydalanuvchi nomi va parolni kiriting.');
      return;
    }

    // Muvaffaqiyatli login bo'lgandan so'ng, foydalanuvchini Home sahifasiga yo'naltirish
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('loginTime', new Date().getTime());
    alert('Muvaffaqiyatli kirish!');

    // Home sahifasiga yo'naltirish
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Kirish</h2>
        <div className="input-group">
          <label>Foydalanuvchi nomi</label>
          <input 
            type="text" 
            placeholder="Foydalanuvchi nomi" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Parol</label>
          <input 
            type="password" 
            placeholder="Parol" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>Kirish</button>
      </div>
    </div>
  );
};

export default Login;
