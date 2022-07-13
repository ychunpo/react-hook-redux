import React, { useState } from "react";

export function Counter2() {
  let [number, setNumber] = useState(0);
  function alertNumber() {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的那个状态
      alert(number);
    }, 3000);
  }
  return (
    <>
      <h3>Counter2 - IndependentClosure</h3>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
      <hr />
    </>
  )
}
