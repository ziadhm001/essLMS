import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import StartPage from '../components/StartPage';
import Courses from '../components/Courses';

import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import NotFoundPage from '../components/NotFoundPage';
import Profile from '../components/Profile';
import About from '../components/About';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
)};

export default AppRouter;