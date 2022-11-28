import React from 'react';
import { topic, listData } from './Data/listData';
import APIComponent from './pages/APIComponent/APIComponent';
import APIPureComponent from './pages/APIPure/APIPure';
import APIMemo from './pages/APIMemo/APIMemo';
import APIForwardRef from './pages/APIForwardRef/APIForwardRef';
import APILazy from './pages/APILazy/APILazy';
import APISuspense from './pages/APISuspense/APISuspense';
import APIFragment from './pages/APISuspense/APISuspense';
import APIProfiler from './pages/APIProfiler/APIProfiler';
import APIStrickMode from './pages/APIStrictMode/APIStrictMode';
import '../pages.css';

const ReactAPI = () => {

  return (
    <div className='main-container'>
      <div className='main-left'>

      </div>
      <div className='main-right'>
        <h1>This page is under construction......</h1>
        <br />
        <APIComponent />
        <hr />
        <APIPureComponent />
        <hr />
        <APIMemo />
        <hr />
        <APIForwardRef />
        <hr />
        <APILazy />
        <hr />
        <APISuspense />
        <hr />
        <APIFragment />
        <hr />
        <APIProfiler />
        <hr />
        <APIStrickMode />
      </div>
    </div>
  )
}

export default ReactAPI;
