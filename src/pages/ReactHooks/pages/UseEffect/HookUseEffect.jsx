import React from 'react'
import Once from './example/Once';
import AfterEveryRender from './example/AfterEveryRender';
import OnPropsStateChange from './example/OnPropsStateChange';
//import AppClass from './example/AppClass';
//import AppHook from './example/AppHook';
import OnUnmount from './example/OnUnmount';
import Example1 from './example/Example1';
import Example2 from './example/Example2';
import Example3 from './example/Example3';
import Example4 from './example/Example4';
import Example5 from './example/Example5';
//import AppClassCode from './exCode/AppClassCode';
//import AppHookCode from './exCode/AppHookCode';

const HookUseEffect = () => {
  return (
    <div id='useEffect'>
      <h2>useEffect</h2>
      <div className='example-group'>

        <div>
          <Once />
          <AfterEveryRender />
          <OnPropsStateChange />
          <OnUnmount />
        </div>
        <div>
          <Example1 />
          <Example2 />
          <Example3 />
          <Example4 />
          <Example5 />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HookUseEffect;