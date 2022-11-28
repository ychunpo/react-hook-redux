import React from 'react';
import Example1 from './example/Example1';
import ExCode1 from './exCode/ExCode1';

const APIMemo = () => {
  return (
    <div id='memo'>
      <h2>memo</h2>
      <div className='example-group'>
        <div className='case-item'>
          <div className='case-position'>
            <Example1 />
          </div>
          <ExCode1 />
        </div>
      </div>
    </div>
  )
}

export default APIMemo;
