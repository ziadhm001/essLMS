import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import StartPage from '../components/StartPage';
import Courses from '../components/Courses';

import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import NotFoundPage from '../components/NotFoundPage';
import Profile from '../components/Profile';

const AppRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/home" element={<StartPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
);

export default AppRouter;