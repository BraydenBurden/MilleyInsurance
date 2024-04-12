import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from "../images/logo.png"
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

    const href = window.location.href;
  return (
    <div className="navbar">
        <Link to="/" className="logo"><img src={logo} className="logo" alt="Milley Insurance Logo" /></Link>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link style={{ color: href.includes("about") ? "orange" : ""}} to="/about">About</Link></li>
          <li><Link style={{ color: href.includes("carinsurance") ? "orange" : ""}} to="/carinsurance">Car Insurance</Link></li>
          <li><Link style={{ color: href.includes("homeinsurance") ? "orange" : ""}} to="/homeinsurance">Home Insurance</Link></li>
          <li><Link style={{ color: href.includes("contact") ? "orange" : ""}} to="/contact">Contact</Link></li>
          {user.userType === "Admin" && <li><Link style={{ color: href.includes("admin") ? "orange" : ""}} to="/admin">Stats</Link></li>}
        </ul>
      </div>
        <div className="profile">
          <Link style={{ color: href.includes("profile") ? "orange" : ""}} className='profileLink' to="/profile"><div className="pic">{user.firstName[0]}{user.lastName[0]}</div></Link>
          <Link className='logout' to="/">Logout</Link>
        </div>
    </div>
  );
};

export default Navbar;
