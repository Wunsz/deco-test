import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'redux/store';

import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';

function App() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Routes>
      {currentUser === undefined ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </>
      )}
    </Routes>
  );
}

export default App;
