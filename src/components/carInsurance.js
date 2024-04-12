import React, { useContext, useState } from 'react';
import Navbar from './NavBar';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarInsuranceQuotePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [carValue, setCarValue] = useState('');
  const [driverAge, setDriverAge] = useState(user.age);
  const [vehicleAge, setVehicleAge] = useState('');
  const [accidents, setAccidents] = useState('');
  const [location, setLocation] = useState('');

  const calculatePremium = async () => {
    let premium = 750;

    if (driverAge < 25) {
      premium *= 2;
    } else {
      premium *= 1;
    }

    if (accidents === 1) {
      premium *= 1.00; 
    } else if (accidents === 2) {
      premium *= 1.25; 
    } else {
      premium *= 2.50;
    }

    if (location === 1) {
      premium *= 1.50;
    } else if (location === 2) {
      premium *= 1.25;
    } else if (location === 3) {
      premium *= 1.00;
    }

    let carQuoteObj = {
      user: user.email, 
      carValue, 
      driverAge, 
      vehicleAge, 
      accidents, 
      location,
      premium: premium.toFixed(2)
    }

    const response = await axios.post('/newCarQuote', { carQuoteObj });
    console.log(response.data);
    navigate('/carQuoteSubmitted', { state: { premium: `${premium.toFixed(2)}` } });
  };

  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
      <h1>Car Insurance Quote</h1>
      <form className='carForm' onSubmit={(e) => { e.preventDefault(); calculatePremium(); } }>
        <div className='carInputs'>
          <label htmlFor="carValue">Car Value:</label>
          <input type="number" id="carValue" value={carValue} onChange={(e) => setCarValue(e.target.value)} required />

          <label htmlFor="driverAge">Driver Age:</label>
          <input type="number" id="driverAge" value={driverAge} onChange={(e) => setDriverAge(e.target.value)} required disabled />

          <label htmlFor="vehicleAge">Vehicle Age:</label>
          <input type="number" id="vehicleAge" value={vehicleAge} onChange={(e) => setVehicleAge(e.target.value)} required/>

          <label htmlFor="accidents">Accidents in Last 5 Years:</label>
          <select id="accidents" value={accidents} onChange={(e) => setAccidents(e.target.value)} required>
            <option value="">Select</option>
            <option value="1">None</option>
            <option value="2">1 in last 5 years</option>
            <option value="3">2 in last 5 years</option>
          </select>

          <label htmlFor="location">Location</label>
          <select id="accidents" value={location} onChange={(e) => setLocation(e.target.value)} required>
            <option value="">Select</option>
            <option value="1">Dense Urban</option>
            <option value="2">Urban</option>
            <option value="3">Rural</option>
          </select>

          <button id='carQuoteBtn' type="submit">Get Quote</button>
        </div>
      </form>
    </div></>
  );
};

export default CarInsuranceQuotePage;
