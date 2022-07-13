import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ReactHook from './pages/ReactHook/ReactHook';
import ReactRedux from './pages/ReactRedux/ReactRedux';
import Component from './pages/Component/Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react-hook" element={<ReactHook />} />
          <Route path="/react-redux" element={<ReactRedux />} />
          <Route path="/component" element={<Component />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
