import React from 'react';
import ExCode1 from './exCode/ExCode1';
import Example1 from './example/Example1';
import ListAppUseCallback from './example/ListApp/ListApp_useCallback';
import ListAppUseCallbackCode from './exCode/ListAppUseCallbackCode';
import Examplehook from './example/Examplehook';

const HookUseCallback = () => {
  return (
    <div id='useCallback'>
      <h2>UseCallback</h2>
      <div className='example-group'>
        <div className='case-item'>
          <div className='case-position'>
            <ListAppUseCallback />
          </div>
          <ListAppUseCallbackCode />
        </div>
        <div className='case-item'>
          <div className='case-position'>
            <Examplehook />
          </div>

        </div>

        <div className='case-item'>
          <div className='case-position'>
            <Example1 />
          </div>
          <ExCode1 />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HookUseCallback;
