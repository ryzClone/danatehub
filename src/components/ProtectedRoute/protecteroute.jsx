import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const loginTime = localStorage.getItem('loginTime');

  const currentTime = new Date().getTime();
  const THIRTY_MINUTES = 30 * 60 * 1000;

  // Agar foydalanuvchi login qilganidan 30 minut o'tgan bo'lsa
  if (loginTime && (currentTime - loginTime > THIRTY_MINUTES)) {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loginTime');
    return <Navigate to="/login" />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
