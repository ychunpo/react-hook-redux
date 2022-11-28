import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
import React, { useState, useCallback, memo } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  console.log("re-render parent component");

  const resetCount = useCallback(() => {
    console.log("useCallback component")
    setCount(0);
  }, []);

  return (
    <div className='example-container'>
      <h3>Example: 1</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Child reset={resetCount} />
    </div>
  );
};

const Child = memo(({ reset }) => {
  console.log("re-render child component.");

  return (
    <>
      <p>Child component which resets count</p>
      <button onClick={reset}>Reset Count</button>
    </>
  );
});

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