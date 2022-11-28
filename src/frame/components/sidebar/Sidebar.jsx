import React from 'react';
//import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = (props) => {
  const { topic, listData } = props;
  console.log('topic', topic)

  return (
    <div className='side-container'>
      <div className="side-title">
        <p></p>
      </div>
      <ul className="side-group">

      </ul>
    </div>
  )
}

export default Sidebar
