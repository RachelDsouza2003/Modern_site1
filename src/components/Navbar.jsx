import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/global.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}>Modern</span>
          <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.5rem' }}>Site</span>
        </div>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}
