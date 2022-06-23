import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
  );
}

export default App;
