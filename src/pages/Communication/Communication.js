import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import FunctionCommunication from '../../ComponentsCommunication/Function';
import ClassCommunication from '../../ComponentsCommunication/Class';
import '../pages.css';

const Communication = () => {
  const topic = [
    {
      name: 'Communication',
    }
  ];

  const listData = [
    {
      name: 'Class',
      link: "#react-class"
    },
    {
      name: 'Function',
      link: "#react-function"
    },
  ];

  return (
    <div className='main-container'>
      <div className='main-left'>
        <Sidebar
          topic={topic}
          listData={listData}
        />
      </div>
      <div className='main-right'>
        <ClassCommunication />
        <FunctionCommunication />
      </div>

    </div>
  )
}

export default Communication;