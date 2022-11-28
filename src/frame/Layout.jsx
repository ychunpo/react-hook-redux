import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';


const Layout = () => {
  return (
    <div className="layout-container">
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
