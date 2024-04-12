import React, { useContext, useState } from 'react';
import Navbar from './NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const HomeInsuranceQuotePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [homeAge, setHomeAge] = useState('');
  const [heatingType, setHeatingType] = useState('');
  const [dwellingType, setDwellingType] = useState('');

  const calculatePremium = async () => {
    let premium = 500;

    if (homeAge < 25) {
      premium *= 1;
    } else if (homeAge < 50) {
      premium *= 1.25;
    } else {
      premium *= 1.5;
    }

    if (dwellingType === 2) {
      premium *= 0.75; 
    } else if (dwellingType === 4) {
      premium *= 1.15;
    } else {
      premium *= 1; 
    }

    if (heatingType === 2) {
      premium *= 2; 
    } else if (heatingType === 3) {
      premium *= 1.25; 
    } else {
      premium *= 1; 
    }

    let homeQuoteObj = {
      user: user.email,
      homeAge: homeAge,
      heatingType: heatingType,
      dwellingType: dwellingType,
      premium: premium.toFixed(2)
    }

    const response = await axios.post('/newHomeQuote', { homeQuoteObj });
    console.log(response.data);
    navigate('/homeQuoteSubmitted', { state: { premium: `${premium.toFixed(2)}` } });

  };

  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h1>Home Insurance Quote</h1>
          <form className='homeForm' onSubmit={(e) => { e.preventDefault(); calculatePremium(); } }>
            <div className='homeInputs'>
              <label htmlFor="homeAge">Home Age:</label>
              <input type="number" id="homeAge" value={homeAge} onChange={(e) => setHomeAge(e.target.value)} required />

              <label htmlFor="heatingType">Heating Type:</label>
              <select id="heatingType" value={heatingType} onChange={(e) => setHeatingType(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="1">Electric</option>
                  <option value="2">Oil</option>
                  <option value="3">Wood</option>
                  <option value="4">Gas</option>
                  <option value="5">Other</option>
              </select>

              <label htmlFor="dwellingType">Dwelling Type:</label>
              <select id="dwellingType" value={dwellingType} onChange={(e) => setDwellingType(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="1">Single Dwelling</option>
                  <option value="2">Apartment</option>
                  <option value="3">Bungalow</option>
                  <option value="4">Semi-attached</option>
              </select>

              <button id='homeQuoteBtn' type="submit">Get Quote</button>
            </div>
          </form>
      </div></>
  );
};

export default HomeInsuranceQuotePage;
