import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashbord from './components/dashboard/dashbord.jsx';
import Users from './components/users/users.jsx';
import Withdraws from './components/withraws/withraws.jsx';
import Home from './components/Home/home.jsx';
import NoPage from './components/nopage/nopage.jsx';
import Login from './components/login/loginpage.jsx';
import ProtectedRoute from './components/ProtectedRoute/protecteroute.jsx';

import './App.css';

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
        <Route path="withdraws" element={<Withdraws />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
