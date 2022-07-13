import React, { useState } from "react";

//浅比较
export function Counter7() {
  const [counter, setCounter] = useState({ name: '计数器', number: 0 });
  console.log('render Counter')
  // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
  return (
    <>
      <h3>Counter7</h3>
      <p>{counter.name}:{counter.number}</p>
      <button onClick={() => setCounter({ ...counter, number: counter.number + 1 })}>+</button>
      <button onClick={() => setCounter(counter)}>++</button>
      <hr />
    </>
  )
}
