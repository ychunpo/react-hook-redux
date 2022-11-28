import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useEffect, useRef } from 'react';

const RenderCount = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);  // { current: 0 }
  const inputRef = useRef();
  const previousName = useRef('');

  useEffect(() => {
    renderCount.current += 1;
    previousName.current = name
  }, [name])

  const changeHandler = e => {
    setName(e.target.value)
  }

  const clickHandler = () => {
    inputRef.current.focus()
  }

  return (
    <div className='useRef-container'>
      <div className='useRef-wrapper'>
        <div className='useRef-inputGroup'>
          <h3>Example - 不 re-render 的狀態下更新值，也可以直接抓取 DOM 進而控制 DOM 的行為 (Imperative)</h3>
          <input className='useRef-input'
            type='text'
            ref={inputRef}
            value={name}
            placeholder="Type Something..."
            onChange={changeHandler}
          />
          <div className='useRef-doubleNumber'>
            <span className='useRef-span'>- Input content is </span>
            {name}
          </div>
          <div className='useRef-doubleNumber'>
            <span className='useRef-span'>- Previous name is </span>
            {previousName.current}
          </div>
          <div className='useRef-doubleNumber'>
            <span className='useRef-span'>- Rendered times: </span>
            {renderCount.current}
          </div>
        </div>
        <button className='useRef-btn' onClick={clickHandler}>Focus</button>
      </div>
    </div>
  )
}

export default RenderCount;
`.trim();

const RenderCountCode = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default RenderCountCode;