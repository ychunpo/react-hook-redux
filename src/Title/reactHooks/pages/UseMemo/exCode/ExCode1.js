import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useMemo } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const memoizedValue = useMemo(() => {
    return Math.random();
  }, []);

  console.log('Random Number:', memoizedValue);

  const clickHandler = (e) => {
    setCount(count + 1);
  };

  return (
    <div className='example-container'>
      <h3>Example: 1</h3>
      <p>Random: {memoizedValue}</p>
      <button onClick={clickHandler}>Click</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Example1;
`.trim();

const ExCode1 = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;