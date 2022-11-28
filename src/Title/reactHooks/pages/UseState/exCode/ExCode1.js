import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `
  import React, { useState } from 'react';

  const Example3 = () => {
    const [count, setCount] = useState(0);

    return (
      <div className='example-container'>
        <h3>Example: 1</h3>
        <div>Now number is {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    )
  }

  export default Example3;
`.trim();

const ExCode1 = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode1;