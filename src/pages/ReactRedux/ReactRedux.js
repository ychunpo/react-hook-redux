import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import UnderConstruction from '../../components/UnderConstruction';

const ReactRedux = () => {
  const topic = [
    {
      name: 'Redux',
      sub: 'Data Handle',
    }
  ];

  const listData = [
    {
      name: 'Array',
      link: "/react-basic/array"
    },
    {
      name: 'List',
      link: "/react-basic/list"
    }
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
        <UnderConstruction />
      </div>
    </div>
  )
}

export default ReactRedux