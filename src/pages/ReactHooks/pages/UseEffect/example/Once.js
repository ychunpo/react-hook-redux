import React, { useEffect, useState } from 'react';

const Once = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Once');
    setCount(count + 1);
  }, [])

  return (
    <div className='example-container'>
      <h3>Example: Once</h3>
      <p>**useEffect run once**</p>
      <p>Count Number: {count}</p>
    </div>
  )
}

export default Once