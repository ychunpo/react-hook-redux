import React from 'react';
import { useState } from 'react';

/**
 *   - Example2 是一个函数组件。
 *   - useState 是一个 Hooks React 内部提供，0是初始值
 *   - count 是 state; setCount 可以理解为 setState 传入的参数结果就是新的 State 值
 */

function Example2() {
  // 声明一个新的状态变量，我们将其称为 "count" 
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Example-2</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example2;