import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from '../components/StartPage';
import Home from '../components/Home';
import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
);

export default AppRouter;