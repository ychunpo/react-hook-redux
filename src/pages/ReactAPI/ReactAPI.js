import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../pages.css';

const ReactAPI = () => {
  const topic = [
    {
      name: 'API',
    }
  ];

  const listData = [
    {
      name: 'Component',
      link: "#component"
    },
    {
      name: 'PureComponent',
      link: "#purecomponent"
    },
    {
      name: 'memo',
      link: "#memo"
    },
    {
      name: 'forwardRef',
      link: "#forwardRef"
    },
    {
      name: 'lazy',
      link: "#lazy"
    },
    {
      name: 'Suspense',
      link: "#suspense"
    },
    {
      name: 'Fragment',
      link: "#fragment"
    },
    {
      name: 'Profiler',
      link: "#profiler"
    },
    {
      name: 'StrictMode',
      link: "#strictmode"
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
        API
      </div>

    </div>
  )
}

export default ReactAPI
