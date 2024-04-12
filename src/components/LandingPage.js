import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import logo from '../images/logo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-page">
      <header className="top-bar">
        <img src={logo} className="logo" alt="Milley Insurance Logo" />
        <div className="buttons">
          <button className="login" onClick={handleLogin}>Login</button>
          <button className="signup" onClick={handleSignup}>Sign Up</button>
        </div>
      </header>
      <main className="mission-statement">
        <h2>Welcome to Milley Insurance</h2>
        <p>Milley Insurance is dedicated to providing reliable and affordable home and car insurance solutions...</p>
      </main>
    </div>
  );
}

export default LandingPage;
