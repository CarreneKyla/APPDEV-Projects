import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>KeyStaxx</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/reviews">Company Reviews</Link></li>
        <li><Link to="/company-profile">Our Team</Link></li>
        <li><Link to="/developer">Support Our Developers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;