import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Overview from './Overview';
import Other from './Other';

const Home = () => {
  const topic = [
    {
      name: 'Home',
    }
  ];

  const listData = [
    {
      name: 'Overview',
      link: "#Overview"
    },
    {
      name: 'Other',
      link: "#Other"
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
        <Overview />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Other />
      </div>
    </div>
  )
}

export default Home
