import React from 'react';
//import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = (props) => {
  const { topic, listData } = props;
  //console.log('topic', topic)

  return (
    <div className='side-container'>
      <div className="side-title">
        <p>{topic[0].name}</p>
      </div>
      <ul className="side-group">
        {
          listData.map((item) => {
            return (
              <div key={item.name} className="side-item">
                <li className="side-list">
                  <a href={item.link} className="side-link">{item.name}</a>
                </li>
              </div>
            );
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar
