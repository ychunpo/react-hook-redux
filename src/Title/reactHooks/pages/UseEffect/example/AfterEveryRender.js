import React, { useEffect, useState } from 'react';

const AfterEveryRender = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('render');
    //document.title = `You clicked ${count} times`;
  })

  return (
    <div className='example-container'>
      <h3>After Every Render</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default AfterEveryRender