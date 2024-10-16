import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashbord from './components/dashboard/dashbord.jsx';
import Users from './components/users/users.jsx';
import Withraws from './components/withraws/withraws.jsx';
import Home from './components/Home/home.jsx';
import NoPage from './components/nopage/nopage.jsx';
import Login from './components/login/loginpage.jsx';
import ProtectedRoute from './components/ProtectedRoute/protecteroute.jsx';

import './App.css';
import Notification from './components/Notification/notification.jsx';

function App() {
  return (
    <Routes>
      {/* Login sahifasi */}
      <Route path="/login" element={<Login />} />

      {/* Himoyalangan yo'llar */}
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }>
        <Route index element={<Dashbord />} />
        <Route path="users" element={<Users />} />
        <Route path="withraws" element={<Withraws />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
