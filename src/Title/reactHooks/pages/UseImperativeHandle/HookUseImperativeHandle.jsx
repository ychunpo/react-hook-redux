import React from 'react';
import Example1 from './example/Example1';
import Example2 from './example/Example2';
import Examplehook from './example/Examplehook'

const HookUseImperativeHandle = () => {
  return (
    <div id='useImperativeHandle'>
      <h2>useImperativeHandle</h2>
      <div className='example-group'>
        <div className='case-item'>
          <div className='case-position'>
            <Example1 />
          </div>

        </div>

        <div className='case-item'>
          <div className='case-position'>
            <Example2 />
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

export default HookUseImperativeHandle;
