import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './logo.css';

const Logo = () => {
  return (
    <Link className="logo-link" to='react-practices/'>
      <img className="logo-size" src={logo} alt='Logo' />
    </Link>
  )
}

export default Logo;