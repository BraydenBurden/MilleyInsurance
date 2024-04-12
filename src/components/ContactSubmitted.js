import React from 'react';
import Navbar from './NavBar';

const ContactSubmitted = () => {
  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
          <p>One of our employees will get back to you as soon as possible.</p>
          {/* You can add more information or a link to navigate back to the home page */}
      </div></>
  );
};

export default ContactSubmitted;
