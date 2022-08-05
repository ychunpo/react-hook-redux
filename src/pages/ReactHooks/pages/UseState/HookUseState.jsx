import React from 'react';
import Example1 from './example/Example1';
import Example2 from './example/Example2';
import Example3 from './example/Example3';
import Example4 from './example/Example4';

const HookUseState = () => {

  return (
    <div id='useState'>
      <h2>useState</h2>
      <div className='example-item'>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
      </div>
      <hr />
    </div>
  )
}

export default HookUseState;
