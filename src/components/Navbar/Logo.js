import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo-link" to='/'>
        <img className="logo-size" src={logo} alt='Logo' />
      </Link>
      <div className="navbar-title">
        <p>React Reference</p>
      </div>
    </div>
  )
}

export default Logo;