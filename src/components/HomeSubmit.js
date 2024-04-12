import React from 'react';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';

const HomeSubmitted = () => {
    const location = useLocation();
  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h2>Thank You!</h2>
          <p>Your home quote has been submitted successfully.</p>
          <p>Your home insurance premium is ${location.state.premium}</p>
          {/* You can add more information or a link to navigate back to the home page */}
      </div></>
  );
};

export default HomeSubmitted;
