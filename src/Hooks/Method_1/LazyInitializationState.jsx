import React, { useState } from "react";

export function Counter5(props) {
  console.log('Counter5 render');
  // 这个函数只在初始渲染时执行一次，后续更新状态重新渲染组件时，该函数就不会再被调用
  function getInitState() {
    return { number: props.number };
  }
  let [counter, setCounter] = useState(getInitState);
  return (
    <>
      <h3>Counter5 - LasyInitialzationState</h3>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({ number: counter.number + 1 })}>+</button>
      <button onClick={() => setCounter(counter)}>setCounter</button>
      <hr />
    </>
  )
}
