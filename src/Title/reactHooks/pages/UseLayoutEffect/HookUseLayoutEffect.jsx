import React from 'react';
import Examplehook from './example/Examplehook';

const HookUseLayoutEffect = () => {
  return (
    <div id='useLayoutEffect'>
      <h2>useLayoutEffect</h2>
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

export default HookUseLayoutEffect