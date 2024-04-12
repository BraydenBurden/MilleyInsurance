import React, { useContext, useState } from 'react';
import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const ContactPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Category:', category);
    console.log('Message:', message);

    let feedbackObj = {
      user: user.email,
      category,
      message
    }

    const response = await axios.post('/newFeedback', { feedbackObj });
    console.log(response.data);
    setCategory('');
    setMessage('');

    navigate('/feedBackSubmitted')
  };

  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h1>Contact Us</h1>
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className='contactInputs'>
              <label htmlFor="category">Category:</label>
              <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="question">Question</option>
                  <option value="problem">Problem/Issue</option>
              </select>

              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

              <button id='contactSubmit' type="submit">Submit</button>
            </div>
          </form>
      </div></>
  );
};

export default ContactPage;
