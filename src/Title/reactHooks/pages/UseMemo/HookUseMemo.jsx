import React from 'react'
import SlowAppNoUseMemo from './example/SlowApp/SlowApp_NoUseMemo';
import SlowAppUseMemo from './example/SlowApp/SlowApp_useMemo';
import Example1 from './example/Example1';
import SlowAppNoUseMemoCode from './exCode/SlowAppNoUseMemoCode';
import SlowAppUseMemoCode from './exCode/SlowAppUseMemoCode';
import ExCode1 from './exCode/ExCode1';
import Examplehook from './example/Examplehook';

const HookUseMemo = () => {
  return (
    <div id='useMemo'>
      <h2>useMemo</h2>
      <div className='example-group'>
        <div className='example-group-title'>
          <h3>no useMemo <span> vs </span> useMemo</h3>
        </div>
        <div className='case-item'>
          <div className='case-position'>
            <SlowAppNoUseMemo />
          </div>
          <SlowAppNoUseMemoCode />
        </div>
        <div className='case-item'>
          <div className='case-position'>
            <SlowAppUseMemo />
          </div>
          <SlowAppUseMemoCode />
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
    </div >
  )
}

export default HookUseMemo