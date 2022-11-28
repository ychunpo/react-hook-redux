import React, { useState } from 'react';

const Example1 = () => {
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

export default Example1;
