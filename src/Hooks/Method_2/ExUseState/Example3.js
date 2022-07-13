import React, { useState } from 'react';

function Example3() {
  // 声明一个新的状态变量，我们将其称为 "count" 
  const [count, setCount] = useState(0);
  const countAction = (preCount, b) => preCount + b;

  return (
    <div>
      <h3>Example-3</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(countAction(count, 2))}>
        Click me
      </button>
    </div>
  );
}

export default Example3;