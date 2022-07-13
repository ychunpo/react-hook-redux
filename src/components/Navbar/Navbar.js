import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar-title">
        <h3>Practice-React</h3>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/react-hook">
            Hook
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/react-redux">
            Redux
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/component">
            Component
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;