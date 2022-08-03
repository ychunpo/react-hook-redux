import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Navbar/Logo';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ReactBasic from './pages/ReactBasic/ReactBasic';
//import ReactHooks from './pages/ReactHooks/ReactHooks';
//import ReactAPI from './pages/ReactAPI/ReactAPI'
import ReactRedux from './pages/ReactRedux/ReactRedux';
import Communication from './pages/Communication/Communication';
import BeautDnD from './BeautifulDnDTable/pages/BeautDnD';
import MapInput from './pages/MapInput/MapInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react-basic" element={<ReactBasic />} />
          <Route path="/react-redux" element={<ReactRedux />} />
          <Route path="/react-communication" element={<Communication />} />
          <Route path="/react-dnd" element={<BeautDnD />} />
          <Route path="/react-mapInput" element={<MapInput />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
