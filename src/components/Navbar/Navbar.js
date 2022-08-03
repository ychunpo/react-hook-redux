import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="navbar-main">

        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-basic" className="navbar-link">
              Basic
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-hooks" className="navbar-link">
              Hook
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-api" className="navbar-link">
              API
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-redux" className="navbar-link">
              Redux
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-communication" className="navbar-link">
              Communication
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-dnd" className="navbar-link">
              DND
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/react-mapinput" className="navbar-link">
              MapInput
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;