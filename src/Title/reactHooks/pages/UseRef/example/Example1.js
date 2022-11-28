import { useState, useRef, useEffect } from 'react';

function Example1() {
  const [count, setCount] = useState(0);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      console.log("useEffect was first run");
      return
    }
    console.log("useEffect was run");
  });

  return (
    <div className='example-container'>
      <h3>Example: 1</h3>
      <p>Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Example1;