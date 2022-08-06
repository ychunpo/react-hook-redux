import React from 'react';
import PrismRender from '../../../../../components/Prism/PrismRender';

const code = `
  import React, { useState } from 'react';

  const Example2 = () => {
    const [count, setCount] = useState(4);
    
    return (
      <div className='example-container'>
        <h3>Example: 2</h3>
        <p>No 2 Pass the Function Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>+ 1</button>
      </div>
    )
  }

  export default Example2
`.trim();

const ExCode2 = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode2;