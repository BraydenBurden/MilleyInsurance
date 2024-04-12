import React, { useState, useEffect, useContext } from 'react';
import Navbar from './NavBar';
import { UserContext } from '../context/UserContext';

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h1 style={{ fontSize: "2.5rem"}}>My Profile</h1>
          {user && (
              <div className='profilePage'>
                  <h2 style={{textAlign: "center", textDecoration: "underline", fontSize: "1.75rem"}}>{user.firstName} {user.lastName}</h2>
                  <p>Email: {user.email}</p>
                  <p>Age: {user.age} years old</p>
              </div>
          )}
      </div></>
  );
};

export default ProfilePage;
