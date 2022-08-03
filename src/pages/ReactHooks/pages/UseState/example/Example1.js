import React, { useState } from 'react';


const Example1 = () => {
  const [count, setCount] = useState(4);
  // setCount(count + 1);
  // setCount(count + 1);
  // console.log('A: ', count)

  return (
    <>
      <div className='example-container'>
        <h3>Example: 1</h3>
        <p>No1 Pass the State Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Num 1 add</button>
      </div>
    </>
  )
}

export default Example1