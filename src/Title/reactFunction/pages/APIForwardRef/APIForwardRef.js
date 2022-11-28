import React from 'react';
import Example1 from './example/Example1';
//import Examplehook from './example/Examplehook';
import ExCode1 from './exCode/ExCode1';

const APIForwardRef = () => {
  return (
    <div id='forwardref'>
      <h2>forwardRef</h2>
      <div className='example-group'>
        <div className='case-item'>
          <div className='case-position'>
            <Example1 />
          </div>
          <ExCode1 />
        </div>

        <div className='case-item'>
          <div className='case-position'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default APIForwardRef