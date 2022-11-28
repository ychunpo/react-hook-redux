import React from 'react';
import Examplehook from './example/Examplehook';

const CustomHooks = () => {
  return (
    <div id='customhooks'>
      <h2>Custom Hooks</h2>
      <div className='example-group'>
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

export default CustomHooks;