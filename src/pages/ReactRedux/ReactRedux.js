import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

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

      </div>

    </div>
  )
}

export default ReactRedux