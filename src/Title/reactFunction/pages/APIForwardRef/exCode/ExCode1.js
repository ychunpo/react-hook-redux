import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import { useRef, forwardRef } from "react";

const Example1 = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className='example-container'>
      <h3>Example: 1</h3>
      <Child ref={inputRef} />
      <br />
      <br />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  console.log('ref', ref);
  return <input type="text" ref={ref} />;
});

export default Example1;
`.trim();

const sample = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default sample;