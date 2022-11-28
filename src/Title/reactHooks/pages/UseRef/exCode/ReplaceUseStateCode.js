import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useRef } from 'react';
import './render_count.scss';

const ReplaceUseState = () => {
  const [stateExp, setStateExp] = useState(1000);
  const refExp = useRef(1000);

  const spendStateMoney = () => setStateExp(prevVal => prevVal - 1);

  const spendRefMoney = () => {
    refExp.current = refExp.current - 1;
    console.log('refExp.current', refExp.current);
  };

  return (
    <div className='useRef-container'>
      <div className='useRef-main'>
        <div className='useRef-title'>
          <h3>Example - useRef 取代 useState ? </h3>
          <p>不能，因為 useRef 不會觸發 re-render</p>
        </div>
        <section className="useRef-border">

          <div className="useRef-values">
            <span>useState value: \${stateExp}</span>
            <button className='useRef-btn' onClick={spendStateMoney}>Spend</button>
          </div>
          <div className="useRef-values">
            <span>useRef value: \${refExp.current}</span>
            <button className='useRef-btn' onClick={spendRefMoney}>Spend</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReplaceUseState;
`.trim();

const ReplaceUseStateCode = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ReplaceUseStateCode;