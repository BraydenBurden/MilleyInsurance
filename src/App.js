import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/Login';
import './App.css';
import axios from "axios";
import AboutPage from './components/About';
import CarInsuranceQuotePage from './components/carInsurance';
import HomeInsuranceQuotePage from './components/HomeInsurance';
import ContactPage from './components/Contact';
import AdminPage from './components/Admin';
import ProfilePage from './components/Profile';
import SignupPage from './components/SignUp';
import CarSubmitted from './components/CarSubmit';
import HomeSubmitted from './components/HomeSubmit';
import ContactSubmitted from './components/ContactSubmitted';

function App() {
  axios.defaults.baseURL = "http://192.168.2.34:5000";
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/carinsurance" element={<CarInsuranceQuotePage />} />
        <Route path='/carQuoteSubmitted' element={<CarSubmitted />} />
        <Route path="/homeinsurance" element={<HomeInsuranceQuotePage />} />
        <Route path='/homeQuoteSubmitted' element={<HomeSubmitted />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedBackSubmitted" element={<ContactSubmitted />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;