import React from 'react';
import Example1 from './example/Example1';
import RenderCount from './example/RenderCount';
import ReplaceUseState from './example/ReplaceUseState';
import RenderCountCode from './exCode/RenderCountCode';
import ReplaceUseStateCode from './exCode/ReplaceUseStateCode';
import Examplehook from './example/Examplehook';

const HookUseRef = () => {
  return (
    <div id='useRef'>
      <h2>useRef</h2>
      <div className='example-group'>
        <div className='case-item-group'>
          <div className='case-item'>
            <div className='case-position'>
              <RenderCount />
            </div>
            <RenderCountCode />
          </div>
        </div>
        <div className='case-item-group'>
          <div className='case-item'>
            <div className='case-position'>
              <ReplaceUseState />
            </div>
            <ReplaceUseStateCode />
          </div>
        </div>
        <div className='case-item'>
          <div className='case-position'>
            <Examplehook />
          </div>

        </div>

        <Example1 />


      </div>
      <hr />
    </div>
  )
}

export default HookUseRef