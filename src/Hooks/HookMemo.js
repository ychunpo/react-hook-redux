import React, { useState, useEffect } from 'react';
import Greeting from './Greeting.js';

function HookMemo() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCounter(counter + 1), 3000);
    return () => {
      console.log('------ cleanUp ------');
      clearInterval(intervalId);
    };
  }, [counter]);

  console.log('Memo render');
  return (
    <div className="App">
      <Greeting name="Aaron" />
    </div>
  );
}

export default HookMemo;