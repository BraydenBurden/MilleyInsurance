import React from 'react';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';

const CarSubmitted = () => {
    const location = useLocation();
  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h2>Thank You!</h2>
          <p>Your car quote has been submitted successfully.</p>
          <p>Your car insurance premium is ${location.state.premium}</p>
          {/* You can add more information or a link to navigate back to the home page */}
      </div></>
  );
};

export default CarSubmitted;
