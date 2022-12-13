import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './frame/Layout';
import Home from './Title/home/Home';
import ReactHooks from './Title/reactHooks/ReactHooks';
import ReactFunction from './Title/reactFunction/ReactFunction'
import ReactRedux from './Title/reactRedux/ReactRedux';
import ReactRouter from './Title/reactRouter/ReactRouter';
import Communication from './Title/reactCommunication/Communication';
import BeautDnD from './BeautifulDnDTable/pages/BeautDnD';
import MapInput from './Title/mapInput/MapInput';
import Navbar from './frame/components/navbar/Navbar';
import './App.css';
//import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="react-practices/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="react-hooks" element={<ReactHooks />} />
          <Route path="react-components" element={<ReactFunction />} />
          <Route path="react-communication" element={<Communication />} />
        </Route>

        <Route path="react-practices/react-redux" element={<ReactRedux />} />
        <Route path="react-router" element={<ReactRouter />} />
        <Route path="react-dnd" element={<BeautDnD />} />
        <Route path="react-mapInput" element={<MapInput />} />
      </Routes>
    </div>
  );
}

export default App;
