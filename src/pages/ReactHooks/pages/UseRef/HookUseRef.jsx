import React from 'react'
import RenderCount from './example/RenderCount'
import ReplaceUseState from './example/ReplaceUseState'

const HookUseRef = () => {
  return (
    <div id='useRef'>
      <h2>useRef</h2>
      <div className='example-group'>
        <RenderCount />
        <ReplaceUseState />
      </div>
      <hr />
    </div>
  )
}

export default HookUseRef