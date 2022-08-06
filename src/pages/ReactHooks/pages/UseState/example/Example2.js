import React, { useState } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(4);
  // setCount(prev => prev + 1);
  // setCount(prev => prev + 1);
  // console.log('B: ', count)

  return (
    <div className='example-container'>
      <h3>Example: 2</h3>
      <p>No 2 Pass the Function Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+ 1</button>
    </div>
  )
}

export default Example2
