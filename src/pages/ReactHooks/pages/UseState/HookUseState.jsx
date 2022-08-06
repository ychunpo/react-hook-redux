import React from 'react';
import AppClass from './example/AppClass';
import AppHook from './example/AppHook';
import Example1 from './example/Example1';
import Example2 from './example/Example2';
import Example3 from './example/Example3';
//import Example4 from './example/Example4';
import AppClassCode from './exCode/AppClassCode';
import AppHookCode from './exCode/AppHookCode';
import ExCode1 from './exCode/ExCode1';
import ExCode2 from './exCode/ExCode2';
import ExCode3 from './exCode/ExCode3';

const HookUseState = () => {

  return (
    <div id='useState'>
      <h2>useState</h2>
      <div className='example-group'>
        <div className='example-group-title'>
          <h3>Class <span> vs </span> Function</h3>
        </div>

        <div className='case-item-group'>
          <div className='case-item'>
            <AppClass />
            <AppClassCode />
          </div>
          <div className='case-item'>
            <AppHook />
            <AppHookCode />
          </div>
        </div>

        <div className='case-item'>
          <Example1 />
          <ExCode1 />
        </div>

        <div className='case-item'>
          <Example2 />
          <ExCode2 />
        </div>

        <div className='case-item'>
          <Example3 />
          <ExCode3 />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HookUseState;
