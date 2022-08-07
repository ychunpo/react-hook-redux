import React from 'react';
import AppClass from './example/ClassAndHook/AppClass';
import AppHook from './example/ClassAndHook/AppHook';
import Example1 from './example/Example1';
import Example2 from './example/Example2';
import Example3 from './example/Example3';
import UpdateCompare from './example/UpdateCompare/UpdateCompare';
//import Example4 from './example/Example4';
import AppClassCode from './exCode/AppClassCode';
import AppHookCode from './exCode/AppHookCode';
import ExCode1 from './exCode/ExCode1';
import ExCode2 from './exCode/ExCode2';
import ExCode3 from './exCode/ExCode3';
import UpdateCompareCode from './exCode/UpdateCompareCode';

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
            <div>
              <AppClass />
            </div>
            <AppClassCode />
          </div>
          <div className='case-item'>
            <div>
              <AppHook />
            </div>
            <AppHookCode />
          </div>
        </div>

        <div className='example-group-title'>
          <h3>Before Update <span> vs </span> After Update</h3>
        </div>
        <div className='case-item-group'>
          <div className='case-item'>
            <div>
              <UpdateCompare />
            </div>
            <UpdateCompareCode />
          </div>
        </div>

        <div className='case-item'>
          <div>
            <Example1 />
          </div>
          <ExCode1 />
        </div>

        <div className='case-item'>
          <div>
            <Example2 />
          </div>
          <ExCode2 />
        </div>

        <div className='case-item'>
          <div>
            <Example3 />
          </div>
          <ExCode3 />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HookUseState;
