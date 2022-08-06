import React from 'react';
import PrismRender from '../../../../../components/Prism/PrismRender';

const code = `
  import React, { useState } from 'react';

  const Example1 = () => {
    const [count, setCount] = useState(4);

    return (
        <div>
          <h3>Example: 1</h3>
          <p>No 1 Pass the State Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>+ 1</button>
        </div>
    )
  }
  
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