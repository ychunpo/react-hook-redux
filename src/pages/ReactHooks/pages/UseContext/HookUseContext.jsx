import React from 'react';
import WithoutUseContext from './example/CaseCompare/WithoutUseContext';
import WithUseContext from './example/CaseCompare/WithUseContext';
import WithoutUseContextCode from './exCode/WithoutUseContextCode';
import WithUseContextCode from './exCode/WithUseContextCode';

const HookUseContext = () => {
  return (
    <div id='useContext'>
      <h2>useContext</h2>
      <div className='example-item'>
        <div className='example-group-title'>
          <h3>without useContext <span> vs </span> with useContext</h3>
        </div>

        <div className='case-item-group'>
          <div className='case-item'>
            <div>
              <WithoutUseContext />
            </div>
            <WithoutUseContextCode />
          </div>
          <div className='case-item'>
            <div>
              <WithUseContext />
            </div>
            <WithUseContextCode />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HookUseContext;