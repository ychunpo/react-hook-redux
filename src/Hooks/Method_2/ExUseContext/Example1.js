import React, { createContext, useContext, useState } from "react";

/**
 * 知识点： useContext 简单案例
 * 通过 useContext 不需要用 context.consumer 就可以获得 context 传递的数据。
 */

const theContext = createContext()

const Counter = props => {
  const { count, setCount } = useContext(theContext);

  return (
    <div>
      Counter Count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <button onClick={() => setCount(count - 1)}>count-1</button>
    </div>
  )
}

const Example1 = props => {
  const [count, setCount] = useState(0);

  return (
    <theContext.Provider value={{ count, setCount }}>
      <h3>Example-1</h3>
      <div>
        <Counter />
      </div>
    </theContext.Provider>
  );
}

export default Example1;