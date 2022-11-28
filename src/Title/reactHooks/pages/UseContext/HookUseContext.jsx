import React from 'react';
import WithoutUseContext from './example/CaseCompare/WithoutUseContext';
import WithUseContext from './example/CaseCompare/WithUseContext';
import Examplehook from './example/Examplehook';
import WithoutUseContextCode from './exCode/WithoutUseContextCode';
import WithUseContextCode from './exCode/WithUseContextCode';

const HookUseContext = () => {
  return (
    <div id='useContext'>
      <h2>useContext</h2>
      <div className='example-group'>
        <div className='example-group-title'>
          <h3>without useContext <span> vs </span> with useContext</h3>
        </div>
        <div className='case-item-group'>
          <div className='case-item'>
            <div className='case-position'>
              <WithoutUseContext />
            </div>
            <WithoutUseContextCode />
          </div>
          <div className='case-item'>
            <div className='case-position'>
              <WithUseContext />
            </div>
            <WithUseContextCode />
          </div>
        </div>
        <div className='case-item'>
          <div className='case-position'>
            <Examplehook />
          </div>

        </div>
      </div>
      <hr />
    </div>
  )
}

export default HookUseContext;